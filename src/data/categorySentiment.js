function getSentimentHeader() {
  const categories = [
    "Battery",
    "Perfomance",
    "Quality",
    "Durability",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];
  return categories;
}

export function getCategorySentimentChartDataConsumption(id) {
  let sourceChartData = [
    {
      name: "Positive",
      data: [400, 370, 330, 390, 320, 370, 330, 390],
    },
    {
      name: "Negetive",
      data: [400, 370, 330, 390, 320, 370, 330, 390],
    },
  ];
  if (id == 1) {
    sourceChartData = [
      {
        name: "Positive",
        data: [400, 370, 330, 390, 320, 370, 330, 390],
      },
      {
        name: "Negetive",
        data: [400, 370, 330, 390, 320, 370, 330, 390],
      },
    ];
  } else if (id == 2) {
    sourceChartData = [
      {
        name: "Positive",
        data: [100, 270, 330, 490, 520, 670, 730, 890],
      },
      {
        name: "Negetive",
        data: [400, 370, 330, 390, 320, 370, 330, 390],
      },
    ];
  } else if (id == 3) {
    sourceChartData = [
      {
        name: "Positive",
        data: [800, 770, 630, 590, 420, 370, 230, 190],
      },
      {
        name: "Negetive",
        data: [400, 370, 330, 390, 320, 370, 330, 390],
      },
    ];
  }
  return sourceChartData;
}

export const getCategorySentimentChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
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
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
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
