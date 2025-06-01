import { NextRequest, NextResponse } from 'next/server';
import { fetchUsers } from '@/app/lib/users/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const users = await fetchUsers();
  return NextResponse.json(users);
}