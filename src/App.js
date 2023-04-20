import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MoreNewsList from "./pages/MoreNewsList";
import MoreNewsPage from "./pages/MoreNewsPage";
import CurrentNewsList from "./pages/CurrentNewsList";
import CurrentNewsPage from "./pages/CurrentNewsPage";
import TopList from "./pages/TopList";
import TopPage from "./pages/TopPage";
//import { endPoint1, endPoint2, endPoint3 } from "./data";
//import data from "../data";

//f966a17d28b5a346ea629ed086e21e18
//73b3afbb16a431cd2e1ad64012c301e1
export default function App() {
  const apiKey1 = process.env.REACT_APP_API_KEY;

  const [currentNews, setCurrentNews] = useState([]);
  const [moreNews, setMoreNews] = useState([]);
  const [topInfo, setTopInfo] = useState([]);

  const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey1}`;

  const url2 = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=ca&max=10&apikey=${apiKey1}`;

  const url3 = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=au&max=10&apikey=${apiKey1}`;

  const fetch = async () => {
    try {
      //Set back when I am done
      const response = await axios.get(url);
      const response2 = await axios.get(url2);
      const response3 = await axios.get(url3);
      //console.log(response.data);
      //Set back when ready to deploy and when completed
      setCurrentNews(response.data.articles);
      setMoreNews(response2.data.articles);
      //console.log(busInfo);
      setTopInfo(response3.data.articles);
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
          path="/morenewslist"
          element={<MoreNewsList moreNewsList={moreNews} />}
        />
        <Route
          path="/currentNewslist"
          element={<CurrentNewsList currentNewsList={currentNews} />}
        />
        <Route path="/toplist" element={<TopList topList={topInfo} />} />
        <Route
          path="/currentnewspage/:title"
          element={<CurrentNewsPage currentNewsPage={currentNews} />}
        />
        <Route
          path="/morenewspage/:title"
          element={<MoreNewsPage moreNewsPage={moreNews} />}
        />
        <Route path="/toppage/:title" element={<TopPage topPage={topInfo} />} />
      </Routes>
    </div>
  );
}
