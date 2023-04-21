import { useParams } from "react-router-dom";

export default function UsNewsPage(props) {
  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.usNewsPage.find((t) => {
    return titleParm === t.title;
  });
  console.log(newTitle);
  const loaded = () => {
    return (
      <div className="pages-container1">
        <h1 className="h1-text">{newTitle.title}</h1>
        <img src={newTitle.image} alt="many images" className="page-image" />
        <p className="description">{newTitle.description}</p>
        <p className="content">{newTitle.content}</p>
      </div>
    );
  };

  const loading = () => {
    return <h1> No News to Display</h1>;
  };

  return props.usNewsPage ? loaded() : loading();
}
