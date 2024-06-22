(function() {
    var chartDom = document.getElementById('raise-num');
    var chartInstance = echarts.init(chartDom);
    var option = {
      title: {
        text: '单亲母亲抚养孩子数量统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '抚养孩子数量',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          startAngle: 180,
          endAngle: 360,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 84.6, name: '1 个孩子' },
            { value: 13.9, name: '2 个孩子' },
            { value: 1.5, name: '超过 3 个孩子' }
          ]
        }
      ]
    };
    chartInstance.setOption(option);
})();