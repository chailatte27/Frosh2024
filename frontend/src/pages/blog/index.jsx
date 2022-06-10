import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const loadPosts = async () => {
    try {
      const data = (await axios.get("http://localhost:4000/post")).data;
      setPosts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <div>
      {error && (
        <Typography variant="h2">Could not connect to backend</Typography>
      )}
      <Typography variant="p">{JSON.stringify(posts, null, "\t")}</Typography>
    </div>
  );
}
