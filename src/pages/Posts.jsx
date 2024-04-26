import { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import { getPageCount } from "../utils/pages";
import Button from "../components/UI/button/Button";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <div className="createPostBtn">
        <Button onClick={() => setModal(true)} style={{ width: 300 }}>
          Создать пост
        </Button>
      </div>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
      )}
      <Pagination 
        totalPages={totalPages} 
        changePage={changePage} 
        page={page}
      />
    </div>
  );
}

export default Posts;