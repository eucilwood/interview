import React, { useEffect } from "react";
import { Line, Pie, Bar,DualAxes } from "@antv/g2plot";
function Antv() {
  const lineData = {
    type: "Line",
    data: [
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 13 },
    ],
  };
  const dualAxisData = {
    type: "dualAxisData",
    data: [
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 13 },
    ],
    data2: [
        { year: "1993", age: 30 },
        { year: "1994", age: 29 },
        { year: "1995", age: 28 },
        { year: "1996", age: 27 },
        { year: "1997", age: 26 },
        { year: "1998", age: 25 },
        { year: "1999", age: 24 },
      ],
  };
  const pieData = {
    type: "Pie",
    data: [
      { type: "1991", value: 3 },
      { type: "1992", value: 4 },
    ],
  };
  const barData = {
    type: "Bar",
    data: [
      { 地区: "华东", 销售额: 4684506.442 },
      { 地区: "中南", 销售额: 4137415.0929999948 },
      { 地区: "东北", 销售额: 2681567.469000001 },
      { 地区: "华北", 销售额: 2447301.017000004 },
      { 地区: "西南", 销售额: 1303124.508000002 },
      { 地区: "西北", 销售额: 815039.5959999998 },
    ],
  };

  let i = 0;
  let chart = null;
//   渲染charts
  const renderAntv = (option) => {
    const { data, type } = option;
    if (i > 0) {
      chart.destroy();
    }
    i++;
    if (type === "Line") {
      chart = new Line(document.getElementById("container"), {
        data,
        xField: "year",
        yField: "value",
      });
    }
    if (type === "dualAxisData") {
        chart = new DualAxes(document.getElementById("container"), {
          data:[data,option.data2],
          xField: "year",
          yField: ["value",'age'],
        });
      }
    if (type === "Pie") {
      chart = new Pie(document.getElementById("container"), {
        forceFit: true,
        title: {
          visible: true,
          text: "多色饼图",
        },
        radius: 0.8,
        data,
        angleField: "value",
        colorField: "type",
        label: {
          visible: true,
          type: "inner",
        },
      });
    }
    if (type === "Bar") {
      chart = new Bar(document.getElementById("container"), {
        data,
        xField: "销售额",
        yField: "地区",
      });
    }
    chart.render();
  };
  useEffect(() => {
    renderAntv(lineData);
  }, []);
  return (
    <div>
      <div id="container"></div>
      <button
        onClick={() => {
          renderAntv(lineData);
        }}
      >
        请求line
      </button>
      <button
        onClick={() => {
          renderAntv(barData);
        }}
      >
        请求bar
      </button>
      <button
        onClick={() => {
          renderAntv(pieData);
        }}
      >
        请求pie
      </button>
      <button
        onClick={() => {
          renderAntv(dualAxisData);
        }}
      >
        请求dual-axis
      </button>
    </div>
  );
}
export default Antv;
