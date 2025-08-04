
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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
       <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Notes
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center mb-12">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src="https://placehold.co/100x100.png" alt="@student" data-ai-hint="user avatar" />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold font-headline capitalize">{user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recently Viewed Notes</CardTitle>
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
            <p className="text-muted-foreground text-center">You haven't viewed any notes yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
