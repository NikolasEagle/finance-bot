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

  async function getData(time_range) {
    localStorage.setItem("time_range", time_range);

    setTimeRange(time_range);

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
        : "24h"
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ data, setData, getData, timeRange, setTimeRange }}
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
