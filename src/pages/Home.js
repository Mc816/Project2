import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="/buslist">
        <div className="bushome">Bussiness News SnapShot</div>
      </Link>

      <Link to="/techlist">
        <div className="techhome">Tech News SnapShot</div>
      </Link>

      <Link to="/toplist">
        <div className="tophome">Top List</div>
      </Link>
    </div>
  );
}
