import { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    createPost(newPost)
    setPost({ title: "", body: "" });
  };

  return (
    <form className="form" onSubmit={addNewPost}>
      <h1 style={{textAlign: 'center', marginTop: 0}}>Создание поста:</h1>
      <Input
        value={post.title}
        placeholder="Название поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        placeholder="Описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button style={{width: 90}}>Добавить</Button>
    </form>
  );
};

export default PostForm;
