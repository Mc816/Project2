import { Link } from "react-router-dom";

export default function MoreNewsList(props) {
  return (
    <div className="full-container2">
      <div>
        <h1 className="title">News In Canada</h1>
      </div>
      <div className="morenewslist-container">
        {props.moreNewsList.length &&
          props.moreNewsList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link
                  to={`/morenewspage/${info.title}`}
                  className="link-container"
                >
                  <div>
                    <h2 className="title-text">{info.title}</h2>
                    <img
                      src={info.image}
                      alt="image1"
                      className="morenews-image"
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
