var chartDomWidowhood = document.getElementById('rate-widowhood-compare');
var widowhoodChart = echarts.init(chartDomWidowhood);

// The JSON data
const yearsWidowhood = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021", "2022"];
const maleWidowhoodRate = [2.76, 2.62, 2.65, 2.69, 2.55, 2.48, 2.53, 2.45, 2.50];
const femaleWidowhoodRate = [6.40, 6.45, 6.63, 6.66, 6.76, 6.94, 7.09, 6.99, 7.14];

var widowhoodOption = {
    title: {
      text: '男女丧偶占比对比'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['男性丧偶占比', '女性丧偶占比'],
      top: 'bottom'
    },
    xAxis: {
      type: 'category',
      data: yearsWidowhood
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      }
    },
    series: [
      {
        name: '男性丧偶占比',
        type: 'line',
        data: maleWidowhoodRate,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      },
      {
        name: '女性丧偶占比',
        type: 'line',
        data: femaleWidowhoodRate,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      }
    ]
};

widowhoodChart.setOption(widowhoodOption);
