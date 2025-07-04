'use client';
// <-- hooks can only be used in client components
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '../app/api/trpc/client';
export function ClientGreeting() {
  const trpc = useTRPC();
  const {data}= useQuery(trpc.hello.queryOptions({ text: ' Sankha Subhra Moitra' }));
  if (!data) return <div>Loading...</div>;
  return <div>{data.greeting}</div>;
}