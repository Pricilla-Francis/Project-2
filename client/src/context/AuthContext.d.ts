import React from 'react';
interface User {
    id: number;
    username: string;
    email: string;
}
interface SignupData {
    username: string;
    email: string;
    password: string;
}
interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (data: SignupData) => Promise<void>;
}
export declare const AuthProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useAuth: () => AuthContextType;
export {};
