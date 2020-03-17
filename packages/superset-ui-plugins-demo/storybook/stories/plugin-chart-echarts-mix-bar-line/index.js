import MixBarLinePlugin from '../../../../superset-ui-plugin-chart-echarts-mix-line-bar/src';
import Stories from './Stories';

new MixBarLinePlugin().configure({ key: 'echarts_mix_bar_line' }).register();

export default {
  examples: [...Stories],
};
