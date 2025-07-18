import { NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return NextResponse.json({ email: user.email }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
