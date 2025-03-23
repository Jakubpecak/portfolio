import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ContactItem } from '../../../core/models/contact-item';
import { FormItem } from '../../../core/models/form-item';
import { UserMessage } from '../../../core/models/message';
import { ContactService } from '../../../core/services/contact.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { contactItems } from '../../../core/utils/contact';
import { formItems } from '../../../core/utils/form';
import { email } from '../../../core/validators/email';
import { maxLength } from '../../../core/validators/max';
import { minLength } from '../../../core/validators/min';
import { required } from '../../../core/validators/required';

export interface UserProfileForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  form!: FormGroup<UserProfileForm>;
  contactItems: ContactItem[] = contactItems;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  formItems: FormItem[] = formItems;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group<UserProfileForm>({
      firstName: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          required('validation.name-required'),
          minLength(3, 'validation.min-length'),
          maxLength(20, 'validation.max-length'),
        ],
      }),
      lastName: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          required('validation.last-name-required'),
          minLength(3, 'validation.min-length'),
          maxLength(20, 'validation.max-length'),
        ],
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          required('validation.email-required'),
          minLength(5, 'validation.min-length'),
          email('validation.email-invalid'),
        ],
      }),
      phone: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          required('validation.phone-required'),
          minLength(9, 'validation.min-length'),
          maxLength(15, 'validation.max-length'),
        ],
      }),
      description: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          required('validation.description-required'),
          minLength(5, 'validation.min-length'),
          maxLength(300, 'validation.max-length'),
        ],
      }),
    });
  }

  markAllFieldsAsDirty(form: FormGroup) {
    Object.keys(form?.controls).forEach((control) => {
      form.get(control)?.markAsDirty();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoadingSubject.next(true);
      const formValue = this.form.getRawValue();
      const message: UserMessage = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phone: Number(formValue.phone),
        description: formValue.description,
      };
      this.contactService.sendMessage(message).subscribe(
        () => {
          setTimeout(() => {
            this.snackbarService.open('validation.message-sent', 'success');
            this.form.reset();
            this.isLoadingSubject.next(false);
          }, 500);
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            setTimeout(() => {
              this.snackbarService.open('errors.message-failed', 'warn');
              this.isLoadingSubject.next(false);
            }, 500);
          }
        }
      );
    } else {
      this.snackbarService.open('validation.complete-fields', 'warn');
      this.markAllFieldsAsDirty(this.form);
    }
  }
}
