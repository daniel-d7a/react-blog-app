const Tags = ({ tagsList }) => {
  return (
    <div className="tags">
      <ul>
        {tagsList.map((tag) => (
          <li key={Math.random()}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;