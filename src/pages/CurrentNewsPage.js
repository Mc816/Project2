import { useParams } from "react-router-dom";
//import { useState, useEffect } from "react";
//import axios from "axios";

export default function CurrentNewsPage(props) {
  const params = useParams();

  const titleParm = params.title;

  const newTitle = props.currentNewsPage.find((t) => {
    return titleParm === t.title;
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

  return props.currentNewsPage ? loaded() : loading();
}
