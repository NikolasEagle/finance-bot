import styles from "./Chart.module.scss";

import { AppContext } from "../../App";

import { useContext } from "react";

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

export default function Chart() {
  const context = useContext(AppContext);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
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
        data: context.data.bots && context.data.bots[0],
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
