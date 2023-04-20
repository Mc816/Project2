import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CaNewsList from "./pages/CaNewsList";
import CaNewsPage from "./pages/CaNewsPage";
import UsNewsList from "./pages/UsNewsList";
import UsNewsPage from "./pages/UsNewsPage";
import AuNewsList from "./pages/AuNewsList";
import AuNewsPage from "./pages/AuNewsPage";
//import { endPoint1, endPoint2, endPoint3 } from "./data";
//import data from "../data";

//f966a17d28b5a346ea629ed086e21e18
//73b3afbb16a431cd2e1ad64012c301e1
export default function App() {
  const apiKey1 = process.env.REACT_APP_API_KEY;

  const [usNews, setUsNews] = useState([]);
  const [caNews, setCaNews] = useState([]);
  const [auNews, setAuNews] = useState([]);

  const fetch = async () => {
    try {
      //Set back when I am done
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey1}`
      );
      const response2 = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=ca&max=10&apikey=${apiKey1}`
      );
      const response3 = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=au&max=10&apikey=${apiKey1}`
      );
      //console.log(currentNews);
      //console.log(response.data);
      //Set back when ready to deploy and when completed
      setUsNews(response.data.articles);
      setCaNews(response2.data.articles);
      //console.log(busInfo);
      setAuNews(response3.data.articles);
    } catch (err) {
      console.error(err);
    }
  };
  //fetch();
  useEffect(() => {
    fetch();
    //fetch();
    //fetch();
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/caNewslist"
          element={<CaNewsList caNewsList={caNews} />}
        />
        <Route
          path="/usNewslist"
          element={<UsNewsList usNewsList={usNews} />}
        />
        <Route
          path="/auNewslist"
          element={<AuNewsList auNewsList={auNews} />}
        />
        <Route
          path="/usNewsPage/:title"
          element={<UsNewsPage usNewsPage={usNews} />}
        />
        <Route
          path="/caNewsPage/:title"
          element={<CaNewsPage caNewsPage={caNews} />}
        />
        <Route
          path="/auNewsPage/:title"
          element={<AuNewsPage auNewsPage={auNews} />}
        />
      </Routes>
    </div>
  );
}
