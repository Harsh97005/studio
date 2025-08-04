import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Note } from '@/lib/types';
import { format, parseISO } from 'date-fns';

interface NoteCardProps {
  note: Note;
  subjectName: string;
}

export function NoteCard({ note, subjectName }: NoteCardProps) {
  const formattedDate = format(parseISO(note.createdAt), 'MMMM d, yyyy');

  return (
    <Link href={`/notes/${note.id}`} className="block group">
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary group-hover:-translate-y-1">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-headline mb-2 group-hover:text-primary">{note.title}</CardTitle>
            <Badge variant="outline">{subjectName}</Badge>
          </div>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {note.content.replace(/#/g, '').trim().substring(0, 150)}...
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
