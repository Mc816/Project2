import { Link } from "react-router-dom";
//import TechPage from "./TechPage";
export default function CurrentNewsList(props) {
  return (
    <>
      <div>
        <h1 className="title">More News</h1>;
      </div>
      <div className="current-container">
        {props.currentNewsList.length &&
          props.currentNewsList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link to={`/currentnewspage/${info.title}`}>
                  <div>
                    <h2 className="text-current">{info.title}</h2>
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
    </>
  );
}
