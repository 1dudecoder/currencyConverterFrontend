import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChartComponent = ({ chartData }) => {
  if (!chartData) {
    return <div>Loading...</div>; // You can replace this with your loading indicator or message
  }

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    grid: {
      show: false, // Hide background grid lines
    },
    xaxis: {
      labels: { show: false }, // Hide x-axis labels
    },
    yaxis: {
      labels: { show: false }, // Hide y-axis labels
      title: {
        text: "", // Remove y-axis title
      },
    },
    series: {
      stroke: {
        color: "transparent", // Make the lines connecting data points transparent
      },
    },
  };

  const series = [
    {
      name: "Price",
      data: chartData.map(({ price }) => price),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default ApexChartComponent;
