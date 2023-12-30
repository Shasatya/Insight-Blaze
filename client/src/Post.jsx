import { Link } from "react-router-dom";
import "./styles/Post.css";
export default function Post({
  title,
  summary,
  cover,
  createdAt,
  author,
  _id,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
            {author.username}
          <time>{createdAt.slice(0, 10)}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
