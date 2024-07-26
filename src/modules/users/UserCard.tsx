import React, { memo, useEffect, useState } from "react";
import { fetchUser } from "../../api/users";
import { User } from "../../types/user";
import "./UserCard.css";

interface CardProps {
  user: User;
}

const UserCard: React.FC<CardProps> = memo(({ user }) => {
  const [data, setData] = useState<User | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    if(user.role === 'basic') {
      setIsPending(true);
      // @ts-expect-error - We should be able to infer managerId exists as the role is basic
      fetchUser({ id: user.managerId }).then((user) => {
        setData(user);
      }).catch((error) => {
        setError(error);
      }).finally(() => setIsPending(false))
    }
  }, [user.managerId])

  return (
    <div className="card">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="card-image"
      />
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {
        user.role === 'basic' && (
          <p>
            <strong>Manager:</strong> {isPending ? 'Loading...' : error ? error.message : data ? data.name : 'N/A'}
          </p>
        )
      }
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
});

export default UserCard;
