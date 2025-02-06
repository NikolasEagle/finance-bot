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

  const { timeRange, kindBot } = context;

  const { bots } = context.data;

  useEffect(() => {
    let date = new Date();

    let dates = {};

    if (timeRange === "24h") {
      for (let i = 24; i >= 0; i--) {
        const iterDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours() - i + 1
        );

        if (i !== 0) {
          dates[`${convertNum(iterDate.getHours())}:00`] = Math.random();
        } else {
          bots &&
            bots.map((bot) => {
              if (bot.name === kindBot) {
                dates[`${convertNum(iterDate.getHours())}:00`] =
                  dates[Object.keys(dates)[Object.keys(dates).length - 1]] *
                  (1 - bot[timeRange] / 100);
              }
            });
        }
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

        if (i !== 0) {
          dates[
            `${convertNum(iterDate.getDate())}.${convertNum(
              iterDate.getMonth() + 1
            )}`
          ] = Math.random();
        } else {
          bots &&
            bots.map((bot) => {
              if (bot.name === kindBot) {
                dates[
                  `${convertNum(iterDate.getDate())}.${convertNum(
                    iterDate.getMonth() + 1
                  )}`
                ] =
                  dates[Object.keys(dates)[Object.keys(dates).length - 1]] *
                  (1 - bot[timeRange] / 100);
              }
            });
        }
      }
    } else {
      const months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      for (let i = 12; i >= 0; i--) {
        const iterDate = new Date(
          date.getFullYear(),
          date.getMonth() - i + 1,
          date.getDate(),
          date.getHours()
        );

        if (i !== 0) {
          dates[months[iterDate.getMonth()]] = Math.random();
        } else {
          bots &&
            bots.map((bot) => {
              if (bot.name === kindBot) {
                dates[months[iterDate.getMonth()]] =
                  dates[Object.keys(dates)[0]] * (1 - bot[timeRange] / 100);
              }
            });
        }
      }
    }
    setnames(dates);
  }, [timeRange, kindBot]);

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
