import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { useState } from "react";

const Reactions = ({ reactions, blogId }) => {
  const [count, setCount] = useState(reactions.counter);

  const getBlog = async () => {

    const res = await fetch(`http://localhost:3001/posts/${blogId}`)
    const data = await res.json();

    return data;
  };

  const changeCount = (blog, newCount, change) => {
    if (blog.reactions.state === change) return false;
    let state;

    if (blog.reactions.state !== "default") {
      state = "default";
    } else {
      state = change;
    }
    fetch(`http://localhost:3001/posts/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        ...blog,
        reactions: {
          counter: newCount,
          state,
        },
      }),
    });
    return true;
  };

  const handleReactionUp = async() => {
    const blog = await getBlog();
    const didChange = changeCount(blog, count + 1, "up");
    if (didChange) {
      setCount(count + 1);
    }
  };
  const handleReactionDown = async() => {
    const blog = await getBlog();
    const didChange = changeCount(blog, count - 1, "down");
    if (didChange) {
      setCount(count - 1);
    }
  };

  return (
    <div className="reactions">
      <VscChevronDown onClick={handleReactionDown} />
      <span>{count}</span>
      <VscChevronUp onClick={handleReactionUp} />
    </div>
  );
};

export default Reactions;
