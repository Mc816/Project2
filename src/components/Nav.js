import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navcontainer">
      <Link to="/" className="link">
        <div className="text">Home</div>
      </Link>
      <Link to="/buslist" className="link">
        <div className="text">Business</div>
      </Link>
      <Link to="/techlist" className="link">
        <div className="text">Tech</div>
      </Link>
      <Link to="/toplist" className="link">
        <div className="text">Top News Stories</div>
      </Link>
    </div>
  );
}
