import React, { Component, useEffect } from "react";
import Chart from "react-apexcharts";

function ColumnChartFun({ option, data, h, w }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     chartData: [],
  //     chartOptions: {},
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     chartData: this.props.chartData,
  //     chartOptions: this.props.chartOptions,
  //   });
  // }
  useEffect(async () => {
    console.log("ColumnChartFun", option, data);
  });
  return (
    <Chart
      options={option}
      series={data}
      type="bar"
      width="100%"
      height="100%"
    />
  );
}

export default ColumnChartFun;
