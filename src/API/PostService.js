import axios from "axios";

export async function PostService(limit = 10, page = 1) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: limit,
        _page: page,
      },
    }
  );
  return response;
}

export async function getById(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response;
}

export async function getCommentsByPostId(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response;
}