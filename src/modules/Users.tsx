import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchUsers } from "../api/users";
import Card from "./users/UserCard";
import Grid from "../components/Grid";

interface UsersProps {
  search: string;
}

const Users: React.FC<UsersProps> = ({ search }) => {
  const { isPending, data } = useQuery({
    queryKey: ["userList"],
    queryFn: () => fetchUsers({ search }),
  });

  if (isPending || !data) {
    return <span>Loading</span>;
  }

  return (
    <Grid>
      {data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default Users;
