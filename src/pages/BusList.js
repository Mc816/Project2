export default function BusList(props) {
  return (
    <div>
      <div>
        <h1>hi</h1>
      </div>
      {props.busList.map((info) => {
        return (
          <>
            <div>
              <h2>{info.title}</h2>
              <img src={info.urlToImage} alt="image" />
            </div>
          </>
        );
      })}
    </div>
  );
}

/*
<img src={info.urlToImage} alt="image" />
*/
