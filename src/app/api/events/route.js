import { NextResponse } from 'next/server';
import { addEvent, getEvents, logServerEvent } from '@/lib/dataStore';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    data: getEvents(),
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.eventName || !payload?.date || !payload?.venue) {
    return NextResponse.json(
      { status: 'error', message: 'eventName, date, and venue are required' },
      { status: 400 }
    );
  }

  const created = addEvent(payload);
  logServerEvent('event posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}
