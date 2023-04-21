import { useParams } from "react-router-dom";

export default function AuNewsPage(props) {
  const params = useParams();

  const titleParm2 = params.title;

  const newTitle = props.auNewsPage.find((t) => {
    return titleParm2 === t.title;
  });
  console.log(newTitle);
  const loaded = () => {
    return (
      <div className="pages-container3">
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
  //console.log(loading);
  return props.auNewsPage ? loaded() : loading();
}
