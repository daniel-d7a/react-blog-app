import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";

const EditBlog = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);
  const [tags, setTags] = useState([]);
  const [reactions, setReactions] = useState(null);

  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
        setTags(
          data.tags.map((item) => {
            return {
              value: item,
              label: item,
            };
          })
        );
        setUserId(data.userId);
        setReactions(data.reactions);
      });
  }, []);

  const options = [
    { value: "french", label: "french" },
    { value: "history", label: "history" },
    { value: "magical", label: "magical" },
    { value: "english", label: "english" },
    { value: "fiction", label: "fiction" },
    { value: "crime", label: "crime" },
    { value: "american", label: "american" },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/posts/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId,
        tags: tags.map((tag) => tag.label),
        reactions,
      }),
    }).then(() => {
      navigate(`/blog/${params.id}`);
    });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      outline: "none",
      backgroundColor: "#222831",
      color: "#333333",
    }),
    container: (provided) => ({
      ...provided,
      outline: "none",
      border: "none",
      "&:focus": {
        border: "none",
        outline: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#566fa1",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      color: "#566fa1",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "#eeeeee",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#566fa1",
      color: "#eeeeee",
    }),
    multiValue: (provided) => ({
      ...provided,
      fontFamily: "Open Sans",
      backgroundColor: "#566fa1",
      color: "#eeeeee",
    }),
    option: (provided) => ({
      ...provided,
      "&:hover": {
        border: "3px solid #eeeeee",
      },
      border: "none",
      backgroundColor: "#566fa1",
      fontFamily: "Open Sans",
    }),
  };
  return (
    <form onSubmit={handleSubmit} className="blogForm">
      <label htmlFor="blogTitle"> Title </label>
      <input
        required
        id="blogTitle"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="blogBody"> Body </label>
      <textarea
        required
        id="blogBody"
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <label htmlFor="userId"> User ID </label>
      <input
        required
        id="userId"
        placeholder="userId"
        onChange={(e) => setUserId(Number(e.target.value))}
        value={userId}
        type="number"
      />
      <label htmlFor="blogTags"> Tags </label>
      <Select
        required
        isMulti
        options={options}
        name={"blogTags"}
        value={tags}
        onChange={setTags}
        styles={customStyles}
      />
      <button type="submit">Save Blog</button>
    </form>
  );
};

export default EditBlog;
