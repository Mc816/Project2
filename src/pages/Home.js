import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="/buslist">
        <div className="bushome">More News</div>
      </Link>

      <Link to="/techlist">
        <div className="techhome">Current News</div>
      </Link>

      <Link to="/toplist">
        <div className="tophome">Top News</div>
      </Link>
    </div>
  );
}
