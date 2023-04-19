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
import { endPoint1, endPoint2, endPoint3 } from "./data";
//import data from "../data";

//f966a17d28b5a346ea629ed086e21e18
export default function App() {
  const apiKey1 = process.env.REACT_APP_API_KEY;

  const [techInfo, setTechInfo] = useState(endPoint2);
  const [busInfo, setBusInfo] = useState(endPoint1);
  const [topInfo, setTopInfo] = useState(endPoint3);

  const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey1}`;

  const url2 = `https://gnews.io/api/v4/search?q=example&apikey=${apiKey1}`;

  const url3 = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${apiKey1}`;

  const fetch = async () => {
    try {
      //Set back when I am done
      //const response = await axios.get(url);
      //const response2 = await axios.get(url2);
      //const response3 = await axios.get(url3);
      //console.log(response.data);
      //Set back when ready to deploy and when completed
      //setTechInfo(response.data.articles);
      //setBusInfo(response2.data.articles);
      console.log(busInfo);
      //setTopInfo(response3.data.articles);
    } catch (err) {
      console.error(err);
    }
  };
  //fetch();
  useEffect(() => {
    fetch();
    //fetch();
    //fetch();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buslist" element={<BusList busList={busInfo} />} />
        <Route path="/techlist" element={<TechList techList={techInfo} />} />
        <Route path="/toplist" element={<TopList topList={topInfo} />} />
        <Route
          path="/techpage/:title"
          element={<TechPage techList={techInfo} />}
        />
        <Route path="/buspage/:title" element={<BusPage busList={busInfo} />} />
        <Route path="/toppage/:title" element={<TopPage topPage={topInfo} />} />
      </Routes>
    </div>
  );
}
