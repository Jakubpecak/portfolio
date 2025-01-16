export interface QualificationItem {
  title: string;
  subtitle: string;
  time: string;
}

export interface Qualification {
  type: 'work' | 'education';
  label: string;
  icon: string;
  items: QualificationItem[];
}
