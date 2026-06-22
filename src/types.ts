export type ViewState = 'home' | 'iron-and-ember' | 'rare-void' | 'spectrum' | 'contact';

export interface ProjectTeaser {
  id: ViewState;
  title: string;
  category: string;
  year?: string;
  description: string;
  imageSrc: string;
}

export interface CaseStudy {
  id: ViewState;
  title: string;
  heroCategory: string;
  tagline: string;
  heroImage: string;
  deliverables: string[];
  headline: string;
  narrative: string;
  tags: string[];
  showcaseImage: string;
  showcaseLabelUrl: string;
  showcaseSubtitle: string;
  philosophyTitle: string;
  philosophyText: string;
  philosophyImage: string;
  quote: string;
  quoteAuthor?: string;
  gallery: {
    title: string;
    subtitle: string;
    imageSrc: string;
  }[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  brief: string;
  files: File[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}
