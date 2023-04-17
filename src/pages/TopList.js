export default function TopList(props) {
  return (
    <div>
      <div>
        <h1>hi</h1>
      </div>
      {props.topList.map((info) => {
        return (
          <>
            <div>
              <h2>{info.title}</h2>
              <img src={info.image} alt="Multiple Images" />
            </div>
          </>
        );
      })}
    </div>
  );
}
