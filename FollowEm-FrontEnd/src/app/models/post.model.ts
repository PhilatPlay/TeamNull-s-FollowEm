import { User } from "./user.model";

//Stuck a user object in here to grab names and expertise for all posts
export interface Post {
    id: number;
    user_id: number;
    title: string;
    content: string;
    user: User;
}