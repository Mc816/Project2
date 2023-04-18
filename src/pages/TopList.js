import { Link } from "react-router-dom";
//import TopPage from "./TopPage";

export default function TopList(props) {
  return (
    <div>
      {props.topList.length &&
        props.topList.map((topInfo) => {
          //console.log(info);
          return (
            <div>
              <h1>Current Tech</h1>
              <Link to={`/toppage/${topInfo.title}`}>
                <div>
                  <h2>{topInfo.title}</h2>
                  <img src={topInfo.image} alt="image2" />
                </div>
              </Link>
            </div>
          );
        })}
    </div>

    /*
    <div>
      <div>
        <h1>hi</h1>
      </div>
      {props.topList.map((topInfo) => {
        return (
          <>
            <Link to={`/toppage/:title"${topInfo.title}`}>
              <div>
                <h2>{topInfo.title}</h2>
                <img src={topInfo.image} alt="Multiple Images" />
              </div>
            </Link>
          </>
        );
      })}
    </div>
    */
  );
}
