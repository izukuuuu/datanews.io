var chartDom = document.getElementById('rate-divorce-compare');
var incomeChartRural = echarts.init(chartDom);

// The JSON data
const years = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021", "2022"];
const male_divorce_rate = [1.50, 1.65, 1.59, 1.76, 1.82, 1.90, 2.07, 2.09, 2.22];
const female_divorce_rate = [1.13, 1.24, 1.26, 1.41, 1.51, 1.61, 1.68, 1.78, 1.77];

var option = {
    title: {
      text: '男女离婚占比对比'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['男性离婚占比', '女性离婚占比'],
      top: 'bottom'
    },
    xAxis: {
      type: 'category',
      data: years
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      },
      max: 8
    },
    series: [
      {
        name: '男性离婚占比',
        type: 'line',
        data: male_divorce_rate,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      },
      {
        name: '女性离婚占比',
        type: 'line',
        data: female_divorce_rate,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      }
    ]
};

incomeChartRural.setOption(option);
