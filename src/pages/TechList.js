import { Link } from "react-router-dom";
import TechPage from "./TechPage";
export default function TechList(props) {
  return (
    <div>
      {props.techList.length &&
        props.techList.map((info) => {
          console.log(info);
          return (
            <div>
              <h1>Current Tech</h1>
              <Link to={`/techpage/${info.title}`}>
                <div>
                  <h2>{info.title}</h2>
                  <img src={info.url} alt="image" />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
