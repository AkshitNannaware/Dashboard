import { NextResponse } from 'next/server';
import {
  addInventoryItem,
  getInventory,
  getInventoryEvents,
  logServerEvent,
} from '@/lib/dataStore';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get('eventId') || 'all';

  return NextResponse.json({
    status: 'ok',
    data: {
      events: getInventoryEvents(),
      items: getInventory(eventId),
    },
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.eventId || !payload?.eventName || !payload?.category || !payload?.items) {
    return NextResponse.json(
      { status: 'error', message: 'eventId, eventName, category, and items are required' },
      { status: 400 }
    );
  }

  const created = addInventoryItem(payload);
  logServerEvent('inventory posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}
