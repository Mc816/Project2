import { useParams } from "react-router-dom";
export default function BusPage(props) {
  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.busList.find((t) => {
    return titleParm === t.title;
  });
  console.log(newTitle);

  return (
    <>
      <h1>{newTitle.title}</h1>
      <img src={newTitle.image_url} alt="pictures" />
      <p>{newTitle.description}</p>
      <p>{newTitle.content}</p>
      <a href={newTitle.source.url}>Click to Different Site</a>
    </>
  );
}
