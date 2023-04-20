import { Link } from "react-router-dom";
//import TechPage from "./TechPage";
export default function CurrentNewsList(props) {
  return (
    <div className="full-container1">
      <div>
        <h1 className="title">US News</h1>
      </div>
      <div className="current-container">
        {props.currentNewsList.length &&
          props.currentNewsList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link
                  to={`/currentnewspage/${info.title}`}
                  className="link-container"
                >
                  <div>
                    <h2 className="title-text">{info.title}</h2>
                    <img
                      src={info.image}
                      alt="many different pictures"
                      className="current-image"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
