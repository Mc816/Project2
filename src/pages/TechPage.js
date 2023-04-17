import { useParams } from "react-router-dom";
//import { useState, useEffect } from "react";
//import axios from "axios";

export default function TechPage(props) {
  //const { title } = useParams();

  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.techList.find((t) => {
    return titleParm === t.title;
    console.log(newTitle);
  });

  return (
    <>
      <h1>{newTitle.title}</h1>
      <p>{newTitle.content}</p>
    </>
  );
}
/*
  const { title } = useParams();
  */

/*
const parm = useParams();
const urlSign = parm.url;

  //console.log(titleName);
  const url1 = `https://newsapi.org/v2/${title}?sources=techcrunch&apiKey=abf161aee5984c1a8ed10a27af44a901`;

  const [page, setPage] = useState([]);

  console.log(title);
const currentSign = props.techList.find((list) => {
  return urlSign === list.url;
});
*/

/*
 const fetch = async () => {
    try {
      const response = await axios.get(url1);
      console.log(response.data);
      setPage(response.url);
      //setTechInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  //fetch();
  useEffect(() => {
    fetch();
    // fetch();
    // fetch();
  }, []);
*/
