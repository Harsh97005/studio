
// This is a placeholder for authentication logic.
// In a real app, you would check for a valid user session.
const FAKE_USER_LOGGED_IN = false; 

import { redirect } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (FAKE_USER_LOGGED_IN) {
    redirect('/');
  }

  return <>{children}</>;
}
