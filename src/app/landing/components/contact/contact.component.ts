import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactItem } from '../../../core/models/contact-item';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { contactItems } from '../../../core/utils/contact';
import { email } from '../../../core/validators/email';
import { maxLength } from '../../../core/validators/max';
import { minLength } from '../../../core/validators/min';
import { required } from '../../../core/validators/required';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  contactItems: ContactItem[] = contactItems;
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          required('validation.name-required'),
          minLength(3, 'validation.min-length'),
          maxLength(20, 'validation.max-length'),
        ],
      ],
      lastName: [
        '',
        [
          required('validation.name-required'),
          minLength(3, 'validation.min-length'),
          maxLength(20, 'validation.max-length'),
        ],
      ],
      email: [
        '',
        [
          required('validation.email-required'),
          minLength(5, 'validation.min-length'),
          email('validation.email-invalid'),
        ],
      ],
      phone: [
        '',
        [
          required('validation.phone-required'),
          minLength(9, 'validation.min-length'),
          maxLength(15, 'validation.max-length'),
        ],
      ],
      description: [
        '',
        [
          required('validation.description-required'),
          minLength(5, 'validation.min-length'),
          maxLength(300, 'validation.max-length'),
        ],
      ],
    });
  }

  markAllFieldsAsDirty(form: FormGroup) {
    Object.keys(form?.controls).forEach((control) => {
      form.get(control)?.markAsDirty();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.snackbarService.open('validation.message-sent', 'success');
      this.form.reset();
    } else {
      this.snackbarService.open('validation.complete-fields', 'warn');
      this.markAllFieldsAsDirty(this.form);
    }
  }
}
