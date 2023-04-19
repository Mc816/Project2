import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navcontainer">
      <Link to="/" className="link">
        <div className="text">Home</div>
      </Link>
      <Link to="/morenewslist" className="link">
        <div className="text">More News</div>
      </Link>
      <Link to="/currentNewslist" className="link">
        <div className="text">Current News</div>
      </Link>
      <Link to="/toplist" className="link">
        <div className="text">Top News Stories</div>
      </Link>
    </div>
  );
}
