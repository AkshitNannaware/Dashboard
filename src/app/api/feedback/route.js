import { NextResponse } from 'next/server';
import { addFeedback, getFeedback, logServerEvent, resolveFeedback } from '@/lib/dataStore';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    data: getFeedback(),
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.event || !payload?.rating || !payload?.comment) {
    return NextResponse.json(
      { status: 'error', message: 'event, rating, and comment are required' },
      { status: 400 }
    );
  }

  const created = addFeedback(payload);
  logServerEvent('feedback posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}

export async function PATCH(request) {
  const payload = await request.json();
  if (!payload?.id) {
    return NextResponse.json(
      { status: 'error', message: 'id is required to update feedback' },
      { status: 400 }
    );
  }

  const updated = resolveFeedback(Number(payload.id));
  if (!updated) {
    return NextResponse.json(
      { status: 'error', message: 'feedback not found' },
      { status: 404 }
    );
  }

  logServerEvent('feedback resolved', updated);
  return NextResponse.json({ status: 'ok', data: updated });
}
