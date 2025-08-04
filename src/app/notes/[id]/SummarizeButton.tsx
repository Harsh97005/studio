'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Sparkles } from 'lucide-react';
import { summarizeNoteAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SummarizeButtonProps {
  noteContent: string;
}

export function SummarizeButton({ noteContent }: SummarizeButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [summary, setSummary] = React.useState('');
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const handleSummarize = async () => {
    startTransition(async () => {
      try {
        const result = await summarizeNoteAction(noteContent);
        if (result.summary) {
          setSummary(result.summary);
          setIsOpen(true);
        } else {
          toast({
            variant: 'destructive',
            title: 'Summarization Failed',
            description: 'Could not generate a summary for this note.',
          });
        }
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'An Error Occurred',
          description: 'Something went wrong while summarizing the note.',
        });
      }
    });
  };

  return (
    <>
      <Button onClick={handleSummarize} disabled={isPending} className="bg-accent hover:bg-accent/90 text-accent-foreground">
        {isPending ? (
          <>
            <Sparkles className="mr-2 h-4 w-4 animate-spin" />
            Summarizing...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Summarize with AI
          </>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl flex items-center gap-2">
              <Sparkles className="text-accent" />
              AI Summary
            </DialogTitle>
            <DialogDescription>
              Here is an AI-generated summary of the note.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] my-4">
            <div className="p-1 rounded-md">
              <p className="text-sm leading-relaxed">{summary}</p>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
