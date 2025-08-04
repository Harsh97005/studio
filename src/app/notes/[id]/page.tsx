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

export default function NotePage() {
  const params = useParams();
  const { id } = params;

  const note = notes.find((n) => n.id === id);

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

      <div className="printable-area">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              {note.title}
            </h1>
            {subject && <Badge className="text-base py-1 px-3">{subject.name}</Badge>}
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{formattedDate}</p>
        </header>

        <Separator className="my-8"/>

        <article
          className="prose prose-lg dark:prose-invert max-w-none"
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
