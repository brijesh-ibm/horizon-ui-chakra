function getSourceHeader() {
  const sourceHeader = [
    "Amazon",
    "Flipkart",
    "Facebook",
    "Instagram",
    "Twitter",
    "Quora",
  ];
  return sourceHeader;
}
export function getSourceChartData(id) {
  let sourceChartData = [10, 10, 10, 10, 10, 10];
  if (id == 1) {
    sourceChartData = [10, 10, 10, 10, 10, 10];
  } else if (id == 2) {
    sourceChartData = [1, 5, 20, 30, 5, 50];
  } else if (id == 3) {
    sourceChartData = [10, 5, 20, 30, 40, 70];
  }
  return sourceChartData;
}
export const getSourceChartOptions = {
  labels: getSourceHeader(),
  colors: ["#4318FF", "#6AD2FF", "#40B5AD", "#0047AB", "#5D3FD3", "#9FE2BF"],
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
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#40B5AD", "#0047AB", "#5D3FD3", "#9FE2BF"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};
