// This file is fine, no bugs in here
import { User } from "../types/user";

const mockUsers = Array.from({ length: 9 }, (_, id) => ({
  id: id + 1,
  name: `User ${id + 1}`,
  age: Math.floor(Math.random() * 60) + 18,
  email: `user${id + 1}@example.com`,
  address: `123 Street Name, City ${id + 1}`,
  phone: `555-010${id + 1}`,
  username: `user${id + 1}`,
  website: `https://user${id + 1}.example.com`,
  company: `Company ${id + 1}`,
  profilePicture: `https://i.pravatar.cc/${id + 1}`,
}));

interface FetchUsersParams {
  search: string;
}

export function fetchUsers({ search }: FetchUsersParams): Promise<User[]> {
  return new Promise<Response>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: async () =>
          mockUsers.filter((user) => !search || user.name.includes(search)),
      } as Response);
    }, 1000);
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  });
}

interface FetchUserParams {
  id: number;
}

export function fetchUser({ id }: FetchUserParams): Promise<User> {
  return new Promise<Response>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: async () => mockUsers.find((user) => user.id === id),
      } as Response);
    }, 1000);
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  });
}
