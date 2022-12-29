import { userAgent } from "next/server";
import { createContext } from "react";

export const UserContext = createContext({ user: null, username: null })