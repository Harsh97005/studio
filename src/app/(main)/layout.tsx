// This is a placeholder for authentication logic.
// In a real app, you would check for a valid user session.
// For now, we'll simulate a logged-in user.
const FAKE_USER_LOGGED_IN = true; 

import { redirect } from 'next/navigation';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!FAKE_USER_LOGGED_IN) {
    redirect('/login');
  }

  return <>{children}</>;
}
