import { Link } from "react-router-dom";
//import TechPage from "./TechPage";
export default function CurrentNewsList(props) {
  return (
    <div className="full-container1">
      <div>
        <h1 className="title">US News</h1>
      </div>
      <div className="container">
        {props.usNewsList.length &&
          props.usNewsList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link
                  to={`/usNewsPage/${info.title}`}
                  className="link-container"
                >
                  <div>
                    <h2 className="title-text">{info.title}</h2>
                    <img
                      src={info.image}
                      alt="many different pictures"
                      className="image"
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
