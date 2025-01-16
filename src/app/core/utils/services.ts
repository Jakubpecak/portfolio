import { ServiceDetail } from '../models/service-detail';

export const frontendList: string[] = [
  'services.modal.frontend.text-1',
  'services.modal.frontend.text-2',
  'services.modal.frontend.text-3',
  'services.modal.frontend.text-4',
];
export const designList: string[] = [
  'services.modal.design.text-1',
  'services.modal.design.text-2',
  'services.modal.design.text-3',
  'services.modal.design.text-4',
];
export const brandList: string[] = [
  'services.modal.brand.text-1',
  'services.modal.brand.text-2',
  'services.modal.brand.text-3',
  'services.modal.brand.text-4',
];
export const serviceDialogDetails: ServiceDetail[] = [
  {
    modalTitle: 'services.modal.frontend.title',
    title: 'services.frontend',
    icon: 'fas fa-code',
    list: frontendList,
  },
  {
    modalTitle: 'services.modal.design.title',
    title: 'services.design',
    icon: 'fas fa-swatchbook',
    list: designList,
  },
  {
    modalTitle: 'services.modal.brand.title',
    title: 'services.branding',
    icon: 'fas fa-pen',
    list: brandList,
  },
];
