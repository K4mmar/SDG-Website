export interface NavItem {
  label: string;
  href: string;
}

export interface Ensemble {
  id: string;
  name: string;
  description: string;
  image: string;
  schedule: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}