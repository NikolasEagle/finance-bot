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

  async function getData(timeRange) {
    localStorage.setItem("time_range", timeRange);

    try {
      const response = await fetch("/data.min.json");

      const body = await response.json();

      setData(body);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData("24h");
  }, []);

  return (
    <AppContext.Provider value={{ data, setData, getData }}>
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
