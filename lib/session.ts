
import { auth } from "../app/api/auth/[...nextauth]/route";
import { authOptions } from "./auth";

export const getCurrentUser = async () => {
  const session =await auth()

  return session?.user || null;

};
