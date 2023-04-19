import { Link } from "react-router-dom";

export default function BusList(props) {
  const loaded = () => {
    return (
      <div>
        <>
          <h1>Current Tech</h1>
        </>
        {props.busList.length &&
          props.busList.map((info) => {
            console.log(info);
            return (
              <div>
                <Link to={`/buspage/${info.title}`}>
                  <div>
                    <h2>{info.title}</h2>
                    <img src={info.image} alt="image1" />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    );
  };
  const loading = () => {
    return <h1> No News to Display</h1>;
  };

  return props.busList ? loaded() : loading();
}

/*
<img src={info.urlToImage} alt="image" />
*/
