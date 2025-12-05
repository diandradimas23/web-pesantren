export type UserRole = 'admin' | 'teacher' | 'parent' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  parentId: string;
  avatar?: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: 'academic' | 'event' | 'general';
}

export interface AdmissionForm {
  studentName: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  parentName: string;
  email: string;
  phone: string;
  address: string;
  previousSchool?: string;
  message?: string;
}
