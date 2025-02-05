import "./App.scss";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Chart from "./components/Chart/Chart";
import Bots from "./components/Bots/Bots";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

export default function App() {
  const [data, setData] = useState({});

  const [timeRange, setTimeRange] = useState(
    localStorage.getItem("time_range")
      ? localStorage.getItem("time_range")
      : "24h"
  );

  const [kindBot, setKindBot] = useState(
    localStorage.getItem("kind_bot")
      ? localStorage.getItem("kind_bot")
      : "yellow_bot"
  );

  async function getData(time_range, kind_bot) {
    localStorage.setItem("time_range", time_range);

    setTimeRange(time_range);

    localStorage.setItem("kind_bot", kind_bot);

    setKindBot(kind_bot);

    try {
      const response = await fetch("/data.min.json");

      const body = await response.json();

      setData(body);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(
      localStorage.getItem("time_range")
        ? localStorage.getItem("time_range")
        : "24h",
      localStorage.getItem("kind_bot")
        ? localStorage.getItem("kind_bot")
        : "yellow_bot"
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        getData,
        timeRange,
        setTimeRange,
        kindBot,
        setKindBot,
      }}
    >
      <div className="App">
        <Header />
        <Info />
        <Chart />
        <Bots />
        <FilterPanel />
      </div>
    </AppContext.Provider>
  );
}
