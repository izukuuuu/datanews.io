(function() {
    var chartDom = document.getElementById('marital-status');
    var chartInstance = echarts.init(chartDom);
    var option = {
      title: {
        text: '单亲母亲个人婚姻状态统计',
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
          name: '婚姻状态',
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
            position: 'outside'
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
            { value: 315, name: '离婚' },
            { value: 75, name: '丧偶' },
            { value: 21, name: '未婚' }
          ]
        }
      ]
    };
    chartInstance.setOption(option);
})();