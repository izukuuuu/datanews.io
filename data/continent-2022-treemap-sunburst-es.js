var myChart = echarts.init(document.getElementById('container-treemap'));

$.getJSON(
  './data/continent-2022.json',
  function (data) {
    // 定义大洲名称的西班牙语映射
    const continentMappings = {
      '亚洲': 'Asia',
      '非洲': 'África',
      '欧洲': 'Europa',
      '北美洲': 'América del Norte',
      '南美洲': 'América del Sur',
      '大洋洲': 'Oceanía'
    };

    // 获取 CSS 样式中定义的颜色变量
    const rootStyles = getComputedStyle(document.documentElement);
    const colorMap = {
      'Asia': rootStyles.getPropertyValue('--color-asia'),
      'África': rootStyles.getPropertyValue('--color-africa'),
      'Europa': rootStyles.getPropertyValue('--color-europe'),
      'América del Norte': rootStyles.getPropertyValue('--color-north-america'),
      'América del Sur': rootStyles.getPropertyValue('--color-south-america'),
      'Oceanía': rootStyles.getPropertyValue('--color-oceania')
    };

    // 将大洲名称替换为西班牙语
    data.forEach(item => {
      if (continentMappings.hasOwnProperty(item.continent)) {
        item.continent = continentMappings[item.continent];
      }
    });

    const treemapOption = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          type: 'treemap',
          id: 'echarts-package-size',
          animationDurationUpdate: 1000,
          roam: false,
          nodeClick: undefined,
          data: data.map(item => {
            return {
              name: item.continent,
              value: item.population,
              itemStyle: {
                color: colorMap[item.continent] // 设置颜色
              }
            };
          }),
          universalTransition: true,
          label: {
            show: true,
            fontSize: '16'
          },
          breadcrumb: {
            show: false
          }
        }
      ]
    };

    const sunburstOption = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          type: 'sunburst',
          id: 'echarts-package-size',
          radius: ['20%', '90%'],
          animationDurationUpdate: 1000,
          nodeClick: undefined,
          data: data.map(item => {
            return {
              name: item.continent,
              value: item.population,
              itemStyle: {
                color: colorMap[item.continent] // 设置颜色
              }
            };
          }),
          universalTransition: true,
          itemStyle: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,.5)'
          },
          label: {
            show: true,
            color: '#ffffff'
          }
        }
      ]
    };

    let currentOption = treemapOption;
    myChart.setOption(currentOption);
    setInterval(function () {
      currentOption =
        currentOption === treemapOption ? sunburstOption : treemapOption;
      myChart.setOption(currentOption);
    }, 6000);
  }
);
