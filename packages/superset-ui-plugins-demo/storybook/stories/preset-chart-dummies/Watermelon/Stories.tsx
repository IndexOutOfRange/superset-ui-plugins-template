/* eslint-disable no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import data from './data';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="watermelon"
        width={400}
        height={400}
        queryData={{ data }}
        formData={{
          colorScheme: 'd3Category10',
          donut: false,
          labelsOutside: true,
          numberFormat: '.3s',
          pieLabelType: 'key',
          showLabels: true,
          showLegend: true,
        }}
      />
    ),
    storyName: 'Basic',
    storyPath: 'preset-chart-dummies|WatermelonChartPlugin',
  },
];
