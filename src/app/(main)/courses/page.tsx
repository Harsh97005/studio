
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Book, Code, PenTool, Briefcase, Building, GraduationCap, ChevronRight } from 'lucide-react';

const courses = [
  { name: 'B.Tech', icon: Code, description: 'Bachelor of Technology' },
  { name: 'BCA', icon: Code, description: 'Bachelor of Computer Applications' },
  { name: 'B.Des', icon: PenTool, description: 'Bachelor of Design' },
  { name: 'MCA', icon: Code, description: 'Master of Computer Applications' },
  { name: 'B.Com', icon: Briefcase, description: 'Bachelor of Commerce' },
  { name: 'BBA', icon: Building, description: 'Bachelor of Business Administration' },
  { name: 'MBA', icon: Building, description: 'Master of Business Administration' },
  { name: 'Diploma', icon: GraduationCap, description: 'Diploma Courses' },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
            <div className="bg-primary p-3 rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <Book className="h-8 w-8 text-primary-foreground" />
            </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Choose Your Course</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Select your field of study to explore relevant notes and materials shared by your peers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {courses.map((course) => (
          <Link href="/" key={course.name} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary group-hover:-translate-y-2 bg-card hover:bg-secondary/60 border border-border/60">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                    <course.icon className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <CardTitle className="text-lg font-headline transition-colors group-hover:text-primary">{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto transition-transform group-hover:translate-x-1" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
