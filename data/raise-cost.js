var raiseCost = echarts.init(document.getElementById('raise-cost'));

var option = {
  title: {
    text: '全国0-17岁孩子的平均养育成本'
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return `${params.seriesName} <br/>${params.name} : ${params.value}% (${params.data.cost} 元)`;
    }
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['怀孕期间', '分娩和坐月子', '0-2岁', '3-5岁', '6-14岁', '15-17岁'],
    top: 'bottom'
  },
  series: [
    {
      name: '养育成本',
      type: 'funnel',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'ascending',
      gap: 2,
      label: {
        show: true,
        position: 'inside',
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 1.86, name: '怀孕期间', cost: 10000 },
        { value: 2.79, name: '分娩和坐月子', cost: 15000 },
        { value: 13.67, name: '0-2岁', cost: 73614 },
        { value: 20.36, name: '3-5岁', cost: 109614 },
        { value: 45.15, name: '6-14岁', cost: 243063 },
        { value: 16.17, name: '15-17岁', cost: 87021 }
      ]
    }
  ]
};

raiseCost.setOption(option);