export interface Subject {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Note {
  id: string;
  title: string;
  subjectId: string;
  createdAt: string;
  content: string;
}
