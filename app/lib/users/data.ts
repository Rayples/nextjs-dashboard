import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

export async function fetchUsers() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const users = await prisma.user.findMany();

    // console.log('Data fetch completed after 3 seconds.');

    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}