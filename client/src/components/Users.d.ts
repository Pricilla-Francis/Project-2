import React from 'react';
import type { UserData } from "../interfaces/UserData";
interface UserListProps {
    users: UserData[] | null;
}
declare const UserList: React.FC<UserListProps>;
export default UserList;
