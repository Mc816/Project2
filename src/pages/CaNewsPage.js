import { useParams } from "react-router-dom";
export default function CaNewsPage(props) {
  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.caNewsPage.find((t) => {
    return titleParm === t.title;
  });
  console.log(newTitle);
  const loaded = () => {
    return (
      <div className="pages-container2">
        <h1 className="h1-text">{newTitle.title}</h1>
        <img src={newTitle.image} alt="pictures" className="page-image" />
        <p className="description">{newTitle.description}</p>
        <p className="content">{newTitle.content}</p>
      </div>
    );
  };

  const loading = () => {
    return <h1> No News to Display</h1>;
  };

  return props.caNewsPage ? loaded() : loading();
}
