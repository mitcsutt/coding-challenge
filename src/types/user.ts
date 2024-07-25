export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
  phone: string;
  username: string;
  website: string;
  company: string;
  profilePicture: string;
  // When role === "manager", No managerId
  // When role === "basic", managerId: number
  role: "manager" | "basic";
  managerId?: number;
}
