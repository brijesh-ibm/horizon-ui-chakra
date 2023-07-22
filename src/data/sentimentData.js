function getSentimentHeader() {
  const sourceHeader = ["Positive", "Negetive"];
  return sourceHeader;
}
export function getSentimentChartData(id) {
  let sourceChartData = [5, 20];
  if (id == 1) {
    sourceChartData = [5, 20];
  } else if (id == 2) {
    sourceChartData = [50, 10];
  } else if (id == 3) {
    sourceChartData = [5, 50];
  }
  return sourceChartData;
}
export const getSentimentChartOptions = {
  labels: getSentimentHeader(),
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "100px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: true,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};
