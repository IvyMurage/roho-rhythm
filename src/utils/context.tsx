import { createContext } from "react";

type AuthContextType = {
    accessToken: string
}

export const AuthContext = createContext<AuthContextType | null>(null)