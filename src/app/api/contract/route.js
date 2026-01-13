import { NextResponse } from 'next/server';
import { getContract } from '@/lib/dataStore';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    data: getContract(),
  });
}
