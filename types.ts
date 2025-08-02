export enum Page {
  HOME = 'Accueil',
  BLOG = 'Blog',
  HISTORY = 'Histoire',
  CALENDAR = 'Calendrier',
  INFO = 'Infos Pratiques',
  CONTACT = 'Contact',
  LOGIN = 'Connexion',
  ADMIN = 'Administration'
}

export interface User {
  id: string;
  username: string;
  password_plaintext: string; // NOTE: In a real app, never store plaintext passwords. This is for demo purposes only.
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
}

export interface ClubEvent {
  id: number;
  title: string;
  date: string; // Format: YYYY-MM-DD for easier parsing and sorting
  time: string;
  location: string;
  description: string;
  type: 'match' | 'event' | 'training';
}

export interface LicenseInfo {
    id: number;
    category: string;
    price: string;
    description: string;
}

export interface TimelineEvent {
    id: number;
    year: string;
    title: string;
    content: string;
    imageUrl: string;
    reverse?: boolean;
}

export interface TrainingSlot {
    id: number;
    category: string;
    day: string;
    time: string;
}

export interface ThemeSettings {
  primaryColor: string;
  textColor: string;
  headingColor: string;
  fontFamily: string;
  backgroundType: 'color' | 'image';
  backgroundColor: string;
  backgroundImage: string;
  backgroundSize: string;
}

export interface SiteSettings {
  clubName: string;
  logoSvg: string;
  logoHeight: number;
  heroTitlePrefix: string;
  heroTitleSuffix: string;
  heroSubtitle: string;
  contactEmail: string;
  contactImage1: string;
  contactImage2: string;
  theme: ThemeSettings;
}

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

export interface SearchResult {
  text: string;
  sources: GroundingChunk[];
}