export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SOFTWARE = 'SOFTWARE',
  CIVIL = 'CIVIL',
  RURAL = 'RURAL',
  REAL_ESTATE = 'REAL_ESTATE',
  CONSULTING = 'CONSULTING',
  MEDIA = 'MEDIA',
  DOWNLOADS = 'DOWNLOADS',
  CONTACT = 'CONTACT'
}

export interface ServiceMetric {
  name: string;
  value: number;
  label: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stats?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}