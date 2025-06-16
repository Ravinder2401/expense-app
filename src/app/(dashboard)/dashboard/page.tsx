import { getCurrentUser } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import DashboardPage from './Dashboard';

export default async function Dashboard() {
  const user = await getCurrentUser();
  
  if (!user) redirect('/login');

  return (
    <>
      <DashboardPage user={user} />
    </>
  );
}
