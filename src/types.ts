export type UserRole = 'student' | 'counselor' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  interests?: string[];
  skills?: string[];
  bio?: string;
  createdAt: string;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  skillsRequired: string[];
  resources: Resource[];
  salaryRange?: string;
  demand?: string;
}

export interface Resource {
  id: string;
  title: string;
  content: string;
  type: 'article' | 'video' | 'link';
  url?: string;
  category: string;
  authorId: string;
}

export interface CounselingSession {
  id: string;
  studentId: string;
  counselorId: string;
  scheduledAt: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  meetingLink?: string;
}
