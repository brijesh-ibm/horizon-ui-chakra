import { getReviewsCountGroupedByEntityAndSentiment } from "data/originalSourceData";

function getSentimentHeader() {
  const categories = getReviewsCountGroupedByEntityAndSentiment("smartwatch");
  return Object.keys(categories);

  //   const categories = [
  //     "Battery",
  //     "Perfomance",
  //     "Quality",
  //     "Durability",
  //     "Category 1",
  //     "Category 2",
  //     "Category 3",
  //     "Category 4",
  //   ];
  //   return categories;
}
function getdata(productName) {
  const categories = getReviewsCountGroupedByEntityAndSentiment(productName);
  const keys = Object.keys(categories);
  const values = Object.values(categories);
  let positiveArray = [];
  let negetiveArray = [];
  values.map((item) => {
    positiveArray.push(item.positive);
    negetiveArray.push(item.negative);
  });
  return { positiveArray, negetiveArray };
}
export function getCategorySentimentChartDataConsumption(id) {
  let { positiveArray, negetiveArray } = getdata("smartwatch");

  let sourceChartData = [
    {
      name: "Positive",
      data: positiveArray,
    },
    {
      name: "Negetive",
      data: negetiveArray,
    },
  ];
  if (id == 1) {
    let { positiveArray, negetiveArray } = getdata("smartwatch");

    sourceChartData = [
      {
        name: "Positive",
        data: positiveArray,
      },
      {
        name: "Negetive",
        data: negetiveArray,
      },
    ];
  } else if (id == 2) {
    let { positiveArray, negetiveArray } = getdata("Wireless Earbudz");

    sourceChartData = [
      {
        name: "Positive",
        data: positiveArray,
      },
      {
        name: "Negetive",
        data: negetiveArray,
      },
    ];
  } else if (id == 3) {
    let { positiveArray, negetiveArray } = getdata("Portable Speaker");

    sourceChartData = [
      {
        name: "Positive",
        data: positiveArray,
      },
      {
        name: "Negetive",
        data: negetiveArray,
      },
    ];
  }
  return sourceChartData;
}

export const getCategorySentimentChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: true,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: getSentimentHeader(),
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: true,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: true,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "60px",
    },
  },
};
