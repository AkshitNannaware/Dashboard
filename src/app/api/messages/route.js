import { NextResponse } from 'next/server';
import { addMessage, getMessages, logServerEvent } from '@/lib/dataStore';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    data: getMessages(),
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.from || !payload?.subject || !payload?.message) {
    return NextResponse.json(
      { status: 'error', message: 'from, subject, and message are required' },
      { status: 400 }
    );
  }

  const created = addMessage(payload);
  logServerEvent('message posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}
