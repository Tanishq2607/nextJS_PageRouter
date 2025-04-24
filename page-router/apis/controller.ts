import { USER_API } from "../constants/api";
import { User } from "../types/user";

export const fetchAllUsers = async (): Promise<User[]> => {
  const res = await fetch(USER_API);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};


export const fetchUserById = async (id: string | string[]): Promise<User | null> => {
  const res = await fetch(`${USER_API}/${id}`);
  if (!res.ok) return null;
  return res.json();
};
 

