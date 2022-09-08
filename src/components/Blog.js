import { Link } from "react-router-dom";
import Reactions from "./Reactions";
import Tags from "./Tags";
import { AiOutlineDelete } from "react-icons/ai";

const Blog = ({ title, body, tags, reactions, blogId, handleClick }) => {

  return (
    <div className="blog">
      <h2>
        <Link to={`/blog/${blogId}`}>{title}</Link>
      </h2>
      <span className="icon" onClick={handleClick}>
        <AiOutlineDelete />
      </span>
      <p>{body.slice(0, 100)}...</p>
      <Reactions reactions={reactions} blogId={blogId} />
      <Tags tagsList={tags} />
    </div>
  );
};

export default Blog;
