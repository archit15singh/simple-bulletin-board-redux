const Post = ({ id, createdOn, title, author, content, handleDeletePost, handleLikeButton, likeButtonsData }) => {
  return (
    <div className="post__body">
      <h5>{id}</h5>
      <h1>{title}</h1>
      <h2>{content}</h2>
      <h3>
        <span>by</span>
        {author}
      </h3>
      <h4>{createdOn}</h4>
      <button type="button" onClick={(event) => handleDeletePost(event, id)}>
        delete
      </button>
      {likeButtonsData.map((buttonData, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={(event) => handleLikeButton(event, buttonData, id)}
          >
            {buttonData.name}
            {buttonData.count}
          </button>
        );
      })}
    </div>
  );
};

export default Post;
