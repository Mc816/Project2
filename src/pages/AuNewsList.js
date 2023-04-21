import { Link } from "react-router-dom";

export default function AuNewsList(props) {
  return (
    <div className="full-container3">
      <div>
        <h1 className="title">Australia News</h1>
      </div>
      <div className="container">
        {props.auNewsList.length &&
          props.auNewsList.map((topInfo) => {
            //console.log(info);
            return (
              <div>
                <Link
                  to={`/auNewsPage/${topInfo.title}`}
                  className="link-container"
                >
                  <div>
                    <h2 className="title-text">{topInfo.title}</h2>
                    <img src={topInfo.image} alt="image2" className="image" />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
