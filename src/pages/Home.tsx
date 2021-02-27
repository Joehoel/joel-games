import React from 'react';
import { useAuth } from '../firebase';

export function Home() {
  const [user, loading, error] = useAuth();

  if (loading) return <div>Loading...</div>;

  return user && <h1>Welcome {user.displayName}</h1>;
}
