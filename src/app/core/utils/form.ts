import { FormItem } from '../models/form-item';

export const formItems: FormItem[] = [
  {
    label: 'form.name',
    controlName: 'firstName',
    type: 'text',
  },
  {
    label: 'form.last-name',
    controlName: 'lastName',
    type: 'text',
  },
  {
    label: 'form.email',
    controlName: 'email',
    type: 'text',
  },
  {
    label: 'form.phone',
    controlName: 'phone',
    type: 'number',
  },
];
