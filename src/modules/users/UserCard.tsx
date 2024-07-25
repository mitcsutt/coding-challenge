import React, { memo, useEffect } from "react";
import { fetchUser } from "../../api/users";
import { queryClient } from "../../config/queryClient";
import { User } from "../../types/user";
import { getRandomColor } from "../../utils/color";
import "./UserCard.css";

interface CardProps {
  user: User;
}

const UserCard: React.FC<CardProps> = memo(({ user }) => {
  useEffect(() => {
    // Don't change useEffect code, fix error with types only
    if (user.role === "basic") {
      queryClient.prefetchQuery({
        queryKey: ["user", user.managerId],
        // @ts-expect-error - Fix type error
        queryFn: () => fetchUser(user.managerId),
      });
    }
  }, []);

  return (
    <div style={{ borderColor: getRandomColor() }} className="card">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="card-image"
      />
      <h2>{user.name}</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
});

export default UserCard;
