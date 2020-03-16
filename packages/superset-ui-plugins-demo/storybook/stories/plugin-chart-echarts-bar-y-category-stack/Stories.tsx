/* eslint-disable no-magic-numbers, sort-keys */
import React from "react";
import { SuperChart } from "@superset-ui/chart";

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="echarts_bar_y_category_stack"
        width={400}
        height={400}
        queryData={{}}
        formData={{}}
      />
    ),
    storyName: "Basic",
    storyPath: "plugin-chart-echarts-bar-y-category-stack|BarYCategoryStackPlugin"
  }
];
