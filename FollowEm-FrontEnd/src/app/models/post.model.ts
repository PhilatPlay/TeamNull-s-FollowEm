import { User } from "./user.model";

//TODO fix
export interface Post {
    id: number;
    user_id: number;
    title: string;
    content: string;
    user: User;
}