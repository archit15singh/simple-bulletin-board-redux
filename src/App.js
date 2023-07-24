import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./store/postSlice";
import { format } from "date-fns";
import Post from "./Post";

function App() {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  const initialFormData = {
    title: "",
    author: "",
    content: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    const randomId = Math.floor(Math.random() * 10 ** 16).toString();
    const formattedDate = format(Date.now(), "MMM dd, yyyy, HH:mm:ss");

    const newPost = {
      ...formData,
      id: randomId,
      createdOn: formattedDate,
    };

    dispatch(addPost(newPost));
    setFormData(initialFormData);
  };

  const handleDeletePost = (event, postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="container">
      <h1>add a new post</h1>

      <fieldset className="post__form">
        <legend> add post </legend>
        <label htmlFor="title">post title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={handleFormChange}
        />

        <label htmlFor="author">author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          id="author"
          onChange={handleFormChange}
        />

        <label htmlFor="content">content</label>
        <textarea
          name="content"
          value={formData.content}
          id="content"
          onChange={handleFormChange}
        />

        <button type="button" onClick={handleSubmit}>
          Save Post
        </button>
      </fieldset>

      <section className="posts__list">
        <h1>posts</h1>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            createdOn={post.createdOn}
            title={post.title}
            author={post.author}
            content={post.content}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
