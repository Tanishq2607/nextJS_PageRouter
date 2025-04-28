import { User } from "../types/user";
import { API_URLS } from "../constants/api";

  export const fetchAllUsers = async (): Promise<User[]> => {
    const res = await fetch(API_URLS.USER_API);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  };


  export const fetchUserById = async (id: string | string[]): Promise<User | null> => {
    const res = await fetch(`${API_URLS.USER_API}/${id}`);
    if (!res.ok) return null;
    return res.json();
  };
  

