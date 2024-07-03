// src/UserProfile.js
import React, { useEffect, useState } from 'react';

function UserProfile({ fetchUserData }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData().then(data => setUser(data));
  }, [fetchUserData]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
