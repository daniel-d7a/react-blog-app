import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Reactions from "../components/Reactions";
import Tags from "../components/Tags";
import { AiOutlineEdit } from "react-icons/ai";

const SingleBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const navigate = useNavigate();

  if (!blog) {
    return <div>loading...</div>;
  }

  const handleClick = () => {
    navigate(`/edit/${blog.id}`);
  };

  return (
    <div className="mainBlog">
      <h1>{blog.title}</h1>
      <div className="edit" onClick={handleClick}>
        <span>Edit</span>
        <AiOutlineEdit />
      </div>
      <Tags tagsList={blog.tags} />
      <p>{blog.body}</p>
      <Reactions reactions={blog.reactions} blogId={blog.id} />
    </div>
  );
};

export default SingleBlog;
