import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function PieChartFun({ data, option, h, w }) {
  // constructor(props) {
  //   super(props);
  //   console.log("PieChart", props);

  //   this.state = {
  //     chartData: [],
  //     chartOptions: {},
  //   };
  // }

  // componentDidMount() {
  //   // this.setState({
  //   //   chartData: this.props.chartData,
  //   //   chartOptions: this.props.chartOptions,
  //   // });
  //   // console.log("pi chart change", this.props.chartData);
  // }

  {
    return (
      <ReactApexChart
        options={option}
        series={data}
        type="pie"
        width={w}
        height={h}
      />
    );
  }
}

export default PieChartFun;
