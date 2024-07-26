// This file is fine, no bugs in here
import { User } from "../types/user";
import Fuse from 'fuse.js'

const fuseOptions = {
	keys: [
		"name",
		"email",
    "phone"
	]
};

interface FetchUsersParams {
  search: string;
}

const endpoint = "https://cd40d1b5-36ed-467a-843a-a9eca07ced34.mock.pstmn.io"

export async function fetchUsers({ search }: FetchUsersParams): Promise<User[]> {
  return fetch(`${endpoint}/users`).then(async (response) => {
    if (response.ok) {
      const result = await response.json()
      if(search){
        const fuse = new Fuse(result, fuseOptions);
  
        return fuse.search<User>(search).map((result) => result.item);
      }
      return result
    } else {
      throw new Error("Network response was not ok");
    }
  })
}

interface FetchUserParams {
  id: number;
}

export async function fetchUser({ id }: FetchUserParams): Promise<User> {
  return fetch(`${endpoint}/users/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  });
}
