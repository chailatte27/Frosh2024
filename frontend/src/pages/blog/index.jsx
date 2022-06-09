import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    const data = (await axios.get("http://localhost:4000/post")).data;
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    loadPosts();
  }, []);
  return <div>{JSON.stringify(posts)}</div>;
}
