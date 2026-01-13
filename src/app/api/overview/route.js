import { NextResponse } from 'next/server';
import { getOverview } from '@/lib/dataStore';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    data: getOverview(),
  });
}
