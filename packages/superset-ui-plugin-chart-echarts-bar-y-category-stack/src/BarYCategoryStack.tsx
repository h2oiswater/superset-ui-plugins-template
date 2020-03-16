/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from "react";
import ReactEcharts from "echarts-for-react";

export type BarYCategoryStackProps = { height: number; width: number };

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "value"
  },
  yAxis: {
    type: "category",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  series: [
    {
      name: "直接访问",
      type: "bar",
      stack: "总量",
      label: {
        show: true,
        position: "insideRight"
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: "邮件营销",
      type: "bar",
      stack: "总量",
      label: {
        show: true,
        position: "insideRight"
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "联盟广告",
      type: "bar",
      stack: "总量",
      label: {
        show: true,
        position: "insideRight"
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "视频广告",
      type: "bar",
      stack: "总量",
      label: {
        show: true,
        position: "insideRight"
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: "搜索引擎",
      type: "bar",
      stack: "总量",
      label: {
        show: true,
        position: "insideRight"
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};

export default class BarYCategoryStack extends React.PureComponent<
  BarYCategoryStackProps
> {
  static defaultProps = { width: 400, height: 400 };

  render() {
    const { height, width } = this.props;
    return <ReactEcharts option={option} opts={{ width, height }} />;
  }
}
