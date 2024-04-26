import { useNavigate } from "react-router-dom";
import Button from "./UI/button/Button";

const Post = ({ post, removePost }) => {
  const { title, body, id } = post;
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post_content">
        <h3 className="title">
          {id}. {title}
        </h3>
        <p className="body">{body}</p>
      </div>
      <div className="post_btns">
      <Button onClick={() => router(`/posts/${id}`)} style={{ marginTop: 40, marginRight: 5, float: 'right'  }}>
        Открыть
      </Button>
      <Button onClick={() => removePost(id)} style={{ marginTop: 40}}>
        Удалить
      </Button>
      </div>
    </div>
  );
};

export default Post;
