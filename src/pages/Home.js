import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="/morenewslist" className="current-link-text">
        <div className="bushome">More News</div>
      </Link>

      <Link to="/currentNewslist" className="current-link-text">
        <div className="techhome">Current News</div>
      </Link>

      <Link to="/toplist" className="current-link-text">
        <div className="tophome">Top News</div>
      </Link>
    </div>
  );
}
