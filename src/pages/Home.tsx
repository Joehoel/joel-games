import React from 'react';
import { useAuth } from '../firebase';

export default function Home() {
  const [user, loading, error] = useAuth();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    user && (
      <div className="home">
        <h1>Welcome {user.displayName}</h1>
      </div>
    )
  );
}
