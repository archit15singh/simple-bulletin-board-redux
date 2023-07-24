const Post = ({id, createdOn, title, author, content, handleDeletePost}) => {
    return (
        <div className="post__body">
            <h5>{id}</h5>
            <h1>{title}</h1>
            <h2>{content}</h2>
            <h3><span>by</span>{author}</h3>
            <h4>{createdOn}</h4>
            <button type="button" onClick={(event) => handleDeletePost(event, id)}>delete</button>
        </div>
    )
}

export default Post;
