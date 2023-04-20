import { Link } from "react-router-dom";

export default function TopList(props) {
  return (
    <div className="full-container3">
      <div>
        <h1 className="title">Australia</h1>
      </div>
      <div className="toplist-container">
        {props.topList.length &&
          props.topList.map((topInfo) => {
            //console.log(info);
            return (
              <div>
                <Link
                  to={`/toppage/${topInfo.title}`}
                  className="link-container"
                >
                  <div>
                    <h2 className="title-text">{topInfo.title}</h2>
                    <img
                      src={topInfo.image}
                      alt="image2"
                      className="topList-image"
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
