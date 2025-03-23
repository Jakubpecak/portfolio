export interface Message {
  label: string;
  controlName: string;
  type: string;
}

export interface UserMessage {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  description: string;
}
