export interface Course {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Subject {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  courseId: string;
}

export interface Note {
  id: string;
  title: string;
  subjectId: string;
  createdAt: string;
  content: string;
}
