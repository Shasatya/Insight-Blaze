import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import "../styles/PostPage.css";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{postInfo.createdAt.slice(0, 10)}</time>
      <div className="author">By @{postInfo.author.username}</div>

      <div className="images">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />

      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit this post
          </Link>
        </div>
      )}
    </div>
  );
}
