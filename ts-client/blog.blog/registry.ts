import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgUpdatePost } from "./types/blog/blog/tx";
import { MsgDeletePost } from "./types/blog/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgUpdatePost", MsgUpdatePost],
    ["/blog.blog.MsgDeletePost", MsgDeletePost],
    
];

export { msgTypes }