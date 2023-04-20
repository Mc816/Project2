import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navcontainer">
      <Link to="/" className="link">
        <div className="text">Home</div>
      </Link>
      <Link to="/caNewslist" className="link">
        <div className="text">Canada News</div>
      </Link>
      <Link to="/usNewslist" className="link">
        <div className="text">US News</div>
      </Link>
      <Link to="/auNewslist" className="link">
        <div className="text">Australia News</div>
      </Link>
    </div>
  );
}
