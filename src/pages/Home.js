import { useEffect, useState } from "react";
import Blog from "../components/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleClick = (id) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    });
  };

  if (blogs.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            blogId={blog.id}
            title={blog.title}
            body={blog.body}
            tags={blog.tags}
            reactions={blog.reactions}
            handleClick={() => handleClick(blog.id)}
          />
        );
      })}
    </div>
  );
};

export default Home;
