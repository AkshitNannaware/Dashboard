import { NextResponse } from 'next/server';
import { addDocument, getDocuments, logServerEvent } from '@/lib/dataStore';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'all';

  return NextResponse.json({
    status: 'ok',
    data: getDocuments(category),
  });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload?.name || !payload?.category) {
    return NextResponse.json(
      { status: 'error', message: 'name and category are required' },
      { status: 400 }
    );
  }

  const created = addDocument(payload);
  logServerEvent('document posted', created);

  return NextResponse.json(
    { status: 'created', data: created },
    { status: 201 }
  );
}
