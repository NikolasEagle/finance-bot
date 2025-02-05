import styles from "./Chart.module.scss";

import { AppContext } from "../../App";

import { useContext, useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const convertNum = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export default function Chart() {
  const [names, setnames] = useState({});

  const context = useContext(AppContext);

  const { timeRange, setTimeRange } = context;

  useEffect(() => {
    let date = new Date();

    let obj = {};

    setTimeRange(localStorage.getItem("time_range"));

    if (timeRange === "24h") {
      for (let i = 24; i >= 0; i--) {
        const iterDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours() - i
        );

        console.log(iterDate.getHours());

        obj[`${convertNum(iterDate.getHours())}:00`] = Math.random(0.6, 1);
      }
    } else if (
      timeRange === "7d" ||
      timeRange === "30d" ||
      timeRange === "60d" ||
      timeRange === "90d"
    ) {
      for (let i = Number(timeRange.replace("d", "")); i >= 0; i--) {
        const iterDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() - i,
          date.getHours()
        );

        obj[
          `${convertNum(iterDate.getDate())}.${convertNum(
            iterDate.getMonth() + 1
          )}`
        ] = Math.random(0.6, 1);
      }
    }

    console.log(obj);

    setnames(obj);
  }, [timeRange]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    width: "100%",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 5,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const labels = [];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: names,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className={styles.Chart}>
        <Line data={data} options={options} />
      </div>
    </>
  );
}
