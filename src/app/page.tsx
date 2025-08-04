

'use client';

import * as React from 'react';
import { Book, Search, Library } from 'lucide-react';

import { subjects as allSubjects, notes as allNotes } from '@/lib/data';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Input } from '@/components/ui/input';
import { NoteCard } from '@/components/NoteCard';
import { UserNav } from '@/components/UserNav';
import type { Note } from '@/lib/types';
import AppLayout from './(main)/layout';
import { useSearchParams } from 'next/navigation';
import { courses } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId') || 'btech';
  
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);

  const course = courses.find((c) => c.id === courseId);
  const subjects = allSubjects.filter(s => s.courseId === courseId);

  const filteredNotes = React.useMemo(() => {
    return allNotes
      .filter((note: Note) => {
        const subject = allSubjects.find(s => s.id === note.subjectId);
        return subject && subject.courseId === courseId;
      })
      .filter((note: Note) => {
        if (!selectedSubject) return true;
        return note.subjectId === selectedSubject;
      })
      .filter((note: Note) => {
        if (!searchTerm) return true;
        return note.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [searchTerm, selectedSubject, courseId]);

  const getSubjectName = (subjectId: string) => {
    return allSubjects.find((s) => s.id === subjectId)?.name || 'Uncategorized';
  };
  
  return (
    <AppLayout>
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg shadow-md shadow-primary/40">
              <Book className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold font-headline">NoteShare</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
             <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/courses">
                  <Library />
                  <span>Change Course</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSelectedSubject(null)} isActive={selectedSubject === null}>
                All Subjects
              </SidebarMenuButton>
            </SidebarMenuItem>
            {subjects.map((subject) => (
              <SidebarMenuItem key={subject.id}>
                <SidebarMenuButton onClick={() => setSelectedSubject(subject.id)} isActive={selectedSubject === subject.id}>
                  <subject.icon />
                  <span>{subject.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h2 className="text-xl font-semibold font-headline">
              {course?.name} - {selectedSubject ? getSubjectName(selectedSubject) : 'All Notes'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search notes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <UserNav />
          </div>
        </header>
        <main className="flex-1 p-6 bg-background">
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} subjectName={getSubjectName(note.subjectId)} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="bg-secondary/80 p-6 rounded-full border-4 border-dashed border-border">
                <Search className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold font-headline">No Notes Found</h3>
              <p className="mt-2 text-muted-foreground max-w-sm">
                There are no notes matching your current search term or selected subject for this course.
              </p>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
    </AppLayout>
  );
}
