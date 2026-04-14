'use client';

import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Resource List</h1>
        <Suspense fallback={<div className="text-2xl font-bold">Loading...</div>}>
        </Suspense>
    </main>
  );
}
