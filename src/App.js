import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const initialFormData = {
    postTitle: "",
    author: "",
    content: ""
  }
  
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event) => {
    const {name, value} = event.target
    
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    console.log(JSON.stringify(formData))
  }
  
  return (
    <div className='container'>
    
      <h1>add a new post</h1>
      
      <fieldset className='post__form'>
        <legend> add post </legend>
        <label htmlFor="postTitle">post title:</label>
        <input type="text" name="postTitle" value={formData.postTitle} id="postTitle" onChange={handleFormChange}/>
        
        <label htmlFor="author">author</label>
        <input type="text" name="author" value={formData.author} id="author" onChange={handleFormChange}/>
        
        <label htmlFor="content">content</label>
        <textarea name="content" value={formData.content} id="content" onChange={handleFormChange}/>

        <button type="button" onClick={handleSubmit}>Save Post</button>
      </fieldset>
      
      <section className='posts__list'>
        <h1>posts</h1>
      </section>
    
    </div>
  );
}

export default App;
