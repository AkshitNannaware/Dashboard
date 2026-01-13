import { NextResponse } from 'next/server';
import { addPayment, getPayments, logServerEvent } from '@/lib/dataStore';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'all';

  return NextResponse.json({
    status: 'ok',
    data: getPayments(status),
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.invoiceNumber || !payload?.amount || !payload?.dueDate) {
    return NextResponse.json(
      { status: 'error', message: 'invoiceNumber, amount, and dueDate are required' },
      { status: 400 }
    );
  }

  const created = addPayment(payload);
  logServerEvent('payment posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}
