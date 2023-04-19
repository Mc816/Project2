import { useParams } from "react-router-dom";
export default function MoreNewsPage(props) {
  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.moreNewsPage.find((t) => {
    return titleParm === t.title;
  });
  console.log(newTitle);
  const loaded = () => {
    return (
      <>
        <h1>{newTitle.title}</h1>
        <img src={newTitle.image} alt="pictures" />
        <p>{newTitle.description}</p>
        <p>{newTitle.content}</p>
        <a href={newTitle.source.url}>Click to Different Site</a>
      </>
    );
  };

  const loading = () => {
    return <h1> No News to Display</h1>;
  };

  return props.moreNewsPage ? loaded() : loading();
}
