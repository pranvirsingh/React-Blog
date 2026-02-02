import { createContext, useEffect, useState } from "react";
import useWindowSize from "../Hooks/useWindowSize";


const context = createContext({});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
    const {width, height} = useWindowSize()
  return (
    <context.Provider value={{ posts, setPosts, width, height }}>{children}</context.Provider>
  );
};

export default context;
