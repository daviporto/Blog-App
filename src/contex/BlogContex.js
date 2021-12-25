import React from "react";

const BlogContex = React.createContext()

export const BlogProvider = ({children}) =>{
    return <BlogContex.Provider>{children}</BlogContex.Provider>
}