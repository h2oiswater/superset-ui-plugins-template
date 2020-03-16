import BarYCategoryStackPlugin from '../../../../superset-ui-plugin-chart-echarts-bar-y-category-stack/src';
import Stories from './Stories';

new BarYCategoryStackPlugin().configure({ key: 'echarts_bar_y_category_stack' }).register();

export default {
  examples: [...Stories],
};
