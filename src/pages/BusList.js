import { Link } from "react-router-dom";

export default function BusList(props) {
  return (
    <div>
      {props.busList.length &&
        props.busList.map((info) => {
          console.log(info);
          return (
            <div>
              <h1>Current Tech</h1>
              <Link to={`/buspage/${info.title}`}>
                <div>
                  <h2>{info.title}</h2>
                  <img src={info.image_url} alt="image1" />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

/*
<img src={info.urlToImage} alt="image" />
*/
