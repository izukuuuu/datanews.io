// 饼图数据
var continentData = [
    { value: 29, name: '亚洲' },
    { value: 7, name: '非洲' },
    { value: 4, name: '欧洲' },
    { value: 1, name: '大洋洲' }
  ];
  
  // 初始化饼图
  var continentPie = echarts.init(document.getElementById('q-continent-pie'));
  
  // 饼图配置
  var continentPieOption = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '大洲占比',
        type: 'pie',
        radius: '50%',
        data: continentData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  
  // 渲染饼图
  continentPie.setOption(continentPieOption);
  