import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navcontainer">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/buslist">
        <div>Business</div>
      </Link>
      <Link to="/techlist">
        <div>Tech</div>
      </Link>
      <Link to="/toplist">
        <div>Top News Stories</div>
      </Link>
    </div>
  );
}
