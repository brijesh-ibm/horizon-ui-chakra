import { getReviewsCountGroupedBySource } from "./originalSourceData";

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
  //   console.log("123", Object.keys(value));
  //   console.log("1232", Object.values(value));
  let sourceChartData = [10, 10, 10, 10, 10, 10];
  if (id == 1) {
    const data = getReviewsCountGroupedBySource("smartwatch");
    console.log("Object.keys(data)", Object.values(data));
    sourceChartData = Object.values(data);
    //sourceChartData = [10, 10, 10, 10, 10, 10];
  } else if (id == 2) {
    const data = getReviewsCountGroupedBySource("Wireless Earbudz");
    sourceChartData = Object.values(data);

    //sourceChartData = [1, 5, 20, 30, 5, 50];
  } else if (id == 3) {
    const data = getReviewsCountGroupedBySource("Portable Speaker");
    sourceChartData = Object.values(data);

    //sourceChartData = [10, 5, 20, 30, 40, 70];
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
