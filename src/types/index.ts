// Core entity types
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  year: number;
  metrics?: {
    performance?: string;
    users?: string;
    impact?: string;
  };
  challenges?: string[];
  solutions?: string[];
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements?: string[];
  technologies?: string[];
  isCurrentRole?: boolean;
  location?: string;
};

export type Skill = {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
  relatedProjects?: string[]; // Project IDs
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  featured: boolean;
  readingTime: number; // in minutes
  imageUrl?: string;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  avatar: string;
  relationship: string;
  linkedinUrl?: string;
  featured: boolean;
};

export type ContactMessage = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
  status?: 'pending' | 'read' | 'replied';
};

// API Response types
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}>;

// UI Component types
export type SectionProps = {
  className?: string;
  id?: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

// Analytics types
export type PageView = {
  page: string;
  timestamp: Date;
  duration: number; // in seconds
  referrer?: string;
};

export type ClickEvent = {
  element: string;
  page: string;
  timestamp: Date;
};

export type UserEngagement = {
  pageViews: number;
  scrollDepth: number; // 0-100
  timeOnPage: number; // in seconds
  clickCount: number;
};
