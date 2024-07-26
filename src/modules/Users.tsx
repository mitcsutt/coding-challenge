import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/users";
import Card from "./users/UserCard";
import Grid from "../components/grid/Grid";
import { User } from "../types/user";

interface UsersProps {
  search: string;
}

const Users: React.FC<UsersProps> = ({ search }) => {
  const [data, setData] = useState<User[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setIsPending(true);
    fetchUsers({ search }).then((users) => {
      setData(users);
    }).catch((error) => {
      setError(error);
    }).finally(() => setIsPending(false))
  }, [search])


  if (isPending) {
    return <span>Loading</span>;
  }
  
  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <Grid>
      {data?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default Users;
