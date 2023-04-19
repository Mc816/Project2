import { Link } from "react-router-dom";

export default function MoreNewsList(props) {
  return (
    <>
      <div>
        <h1>Current Tech</h1>
      </div>
      <div className="current-container">
        {props.moreNewsList.length &&
          props.moreNewsList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link to={`/morenewspage/${info.title}`}>
                  <div>
                    <h2>{info.title}</h2>
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
    </>
  );
}

/*
<img src={info.urlToImage} alt="image" />
*/
