import { ContactItem } from '../models/contact-item';

export const contactItems: ContactItem[] = [
  {
    name: 'contact.call',
    link: 'tel:517181523',
    icon: 'fas fa-phone',
    text: '517-181-523',
  },
  {
    name: 'contact.email',
    link: 'mailto:jakub.pecak@o2.pl',
    icon: 'fas fa-envelope',
    text: 'jakub.pecak@o2.pl',
  },
  {
    name: 'contact.location',
    link: 'https://www.google.com/maps/place/Rzesz%C3%B3w/@50.060434,21.9308698,11.31z/data=!4m6!3m5!1s0x473cfae3cc14d449:0xd2240d31b33eb2ed!8m2!3d50.0411867!4d21.9991196!16zL20vMGp4MnY?hl=pl-PL&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
    icon: 'fas fa-location-arrow',
    text: 'Rzeszów',
  },
];
