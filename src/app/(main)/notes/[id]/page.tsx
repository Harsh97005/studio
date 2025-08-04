'use client';

import { notFound, useParams } from 'next/navigation';
import { notes, subjects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { SummarizeButton } from './SummarizeButton';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

export default function NotePage() {
  const params = useParams();
  const { id } = params;

  const note = notes.find((n) => n.id === id);

  React.useEffect(() => {
    if (note) {
      const visitedNotesJSON = localStorage.getItem('visitedNotes');
      const visitedNotes = visitedNotesJSON ? JSON.parse(visitedNotesJSON) : [];
      if (!visitedNotes.includes(note.id)) {
        visitedNotes.unshift(note.id);
        localStorage.setItem('visitedNotes', JSON.stringify(visitedNotes.slice(0, 10)));
      }
    }
  }, [note]);


  if (!note) {
    notFound();
  }

  const subject = subjects.find((s) => s.id === note.subjectId);
  const formattedDate = format(parseISO(note.createdAt), 'MMMM d, yyyy');

  const handleExport = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-body">
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none;
          }
        }
      `}</style>

      <div className="no-print mb-6">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Notes
          </Link>
        </Button>
      </div>

      <div className="printable-area bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border/60">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary leading-tight">
              {note.title}
            </h1>
            {subject && <Badge variant="secondary" className="text-base py-1 px-3 shrink-0 mt-1">{subject.name}</Badge>}
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{formattedDate} by <span className="font-semibold text-foreground">Anonymous</span></p>
        </header>

        <Separator className="my-8 bg-border/50"/>

        <article
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-body"
          dangerouslySetInnerHTML={{ __html: note.content.replace(/\n/g, '<br />') }}
        />
      </div>

      <div className="no-print mt-12 flex flex-wrap gap-4">
        <SummarizeButton noteContent={note.content} />
        <Button variant="outline" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export to PDF
        </Button>
      </div>
    </div>
  );
}
