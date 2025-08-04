'use server';

import { summarizeNotes } from '@/ai/flows/summarize-notes';

/**
 * Summarizes the provided note content using an AI model.
 * Decides whether a summary is useful based on the content length.
 * @param notesContent The text content of the note to summarize.
 * @returns An object containing the summary or an informational message.
 */
export async function summarizeNoteAction(notesContent: string) {
  // A simple rule to decide if a summary is useful.
  // We won't summarize very short notes.
  if (notesContent.trim().split(/\s+/).length < 50) {
    return { summary: 'This note is too short to provide a meaningful summary. Key points should be easy to identify directly from the text.' };
  }

  try {
    const result = await summarizeNotes({ notesContent });
    return result;
  } catch (error) {
    console.error('AI summarization failed:', error);
    // In a real application, you might want to return a more specific error object.
    return { summary: 'An error occurred while trying to generate the summary.' };
  }
}
