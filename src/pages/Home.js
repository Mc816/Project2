import { Link } from "react-router-dom";

/*function newRoute() {
  <Link to="/buslist">
    <div className="span1" onClick={newRoute}>
      Business News SnapShot
    </div>
  </Link>;
}
*/
export default function Home() {
  /*function newRoute() {
    <Link to="/buslist">
      <div className="span1" onClick={newRoute}>
        Business News SnapShot
      </div>
    </Link>;
  }
  */

  return (
    <>
      <Link to="/buslist">
        <div className="bushome">Bussiness News SnapShot</div>
      </Link>

      <Link to="/techlist">
        <div className="techhome">Tech News SnapShot</div>
      </Link>

      <Link to="/toplist">
        <div className="techhome">Top List</div>
      </Link>
    </>
  );
}
