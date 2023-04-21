import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="heading">Top-Headlines</h1>
      </div>
      <div className="home">
        <Link to="/caNewslist" className="current-link-text">
          <div className="cahome">Canada News</div>
        </Link>

        <Link to="/usNewslist" className="current-link-text">
          <div className="ushome"> US News</div>
        </Link>

        <Link to="/auNewslist" className="current-link-text">
          <div className="auhome">Australia News</div>
        </Link>
      </div>
    </div>
  );
}
