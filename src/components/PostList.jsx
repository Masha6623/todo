import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./Post";

const PostList = ({ posts, removePost }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Посты не найдены...</h2>;
  }

  return (
    <div className="post_list">
      <h1 className="mainTitle">Список постов:</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
          key={post.id}
          timeout={400}
          classNames='post'
          >
            <Post post={post} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
