import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BusList from "./pages/BusList";
import BusPage from "./pages/BusPage";
import TechList from "./pages/TechList";
import TechPage from "./pages/TechPage";
import TopList from "./pages/TopList";
import TopPage from "./pages/TopPage";

export default function App() {
  const [techInfo, setTechInfo] = useState([]);
  const [busInfo, setBusInfo] = useState([]);
  const [topInfo, setTopInfo] = useState([]);

  const url =
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=f966a17d28b5a346ea629ed086e21e18";

  const url2 =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=abf161aee5984c1a8ed10a27af44a901";

  const url3 =
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=f966a17d28b5a346ea629ed086e21e18";
  const fetch = async () => {
    try {
      const response = await axios.get(url);
      const response2 = await axios.get(url2);
      const response3 = await axios.get(url3);
      //console.log(response.data);
      setTechInfo(response.data.articles);
      setBusInfo(response2.data.articles);
      setTopInfo(response3.data.articles);
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

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buslist" element={<BusList busList={busInfo} />} />
        <Route path="/techlist" element={<TechList techList={techInfo} />} />
        <Route path="/toplist" element={<TopList topList={topInfo} />} />
        <Route path="/techpage/:title" element={<TechPage />} />
        <Route path="/buspage/:symbol" element={<BusPage />} />
        <Route path="/toppage/:symbol" element={<TopPage />} />
      </Routes>
    </div>
  );
}
/*
      {techInfo.map((info) => {
        return <p>{info}</p>;
      })}
      */
