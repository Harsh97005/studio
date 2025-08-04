
'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { notes, subjects } from '@/lib/data';
import { NoteCard } from '@/components/NoteCard';
import type { Note } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProfilePage() {
  const [visitedNotes, setVisitedNotes] = React.useState<Note[]>([]);
  const [user, setUser] = React.useState({ name: 'Student', email: '' });

  React.useEffect(() => {
    const visitedNotesJSON = localStorage.getItem('visitedNotes');
    if (visitedNotesJSON) {
      const visitedNoteIds: string[] = JSON.parse(visitedNotesJSON);
      const notesData = visitedNoteIds.map(id => notes.find(n => n.id === id)).filter(Boolean) as Note[];
      setVisitedNotes(notesData);
    }
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) {
      setUser({ name: storedEmail.split('@')[0] || 'Student', email: storedEmail });
    }
  }, []);

  const getSubjectName = (subjectId: string) => {
    return subjects.find((s) => s.id === subjectId)?.name || 'Uncategorized';
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
       <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Notes
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center mb-12 text-center">
        <Avatar className="h-28 w-28 mb-4 border-4 border-primary shadow-lg">
          <AvatarImage src="https://placehold.co/100x100.png" alt="@student" data-ai-hint="user avatar" />
          <AvatarFallback className="text-4xl">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold font-headline capitalize">{user.name}</h1>
        <p className="text-muted-foreground text-lg">{user.email}</p>
      </div>

      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Recently Viewed Notes</CardTitle>
          <CardDescription>
            Here are the last 10 notes you have visited.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {visitedNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitedNotes.map((note) => (
                <NoteCard key={note.id} note={note} subjectName={getSubjectName(note.subjectId)} />
              ))}
            </div>
          ) : (
             <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">You haven't viewed any notes yet.</p>
                <Button asChild className="mt-4">
                    <Link href="/">Explore Notes</Link>
                </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
