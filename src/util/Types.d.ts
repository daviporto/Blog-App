declare type Post = {
    content: string,
    user_id: number,
    created_at: string
    edited: boolean,
    id:number,
    updated_at:string,
    name:string //author

}

declare type User = {
    token:string,
    id:number,
    name:string,
    email:string,
    phone:string,
    password:string,
}


declare type Post = {
    content:string,
    authorName:string,
    authorId:number,
    edited:boolean,
}

declare type UserError = {
    email:string,
    passwod:string,
    phone:string,
    name:string,
    other:string
}

