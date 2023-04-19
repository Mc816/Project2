import { useParams } from "react-router-dom";

export default function TopPage(props) {
  const params = useParams();

  const titleParm2 = params.title;

  const newTitle = props.topPage.find((t) => {
    return titleParm2 === t.title;
  });
  console.log(newTitle);
  const loaded = () => {
    return (
      <>
        <h1>{newTitle.title}</h1>
        <img src={newTitle.image} alt="many images" />
        <p>{newTitle.description}</p>
        <p>{newTitle.content}</p>
        <a href={newTitle.source.url}>Click to Different Site</a>
      </>
    );
  };
  const loading = () => {
    return <h1> No News to Display</h1>;
  };
  //console.log(loading);
  return props.topPage ? loaded() : loading();
}
