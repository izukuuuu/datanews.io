var myChart = echarts.init(document.getElementById('container'));

$.getJSON(
  './data/continent-2022.json',
  function (data) {
    // 获取 CSS 样式中定义的颜色变量
    const rootStyles = getComputedStyle(document.documentElement);
    const colorMap = {
      亚洲: rootStyles.getPropertyValue('--color-asia'),
      非洲: rootStyles.getPropertyValue('--color-africa'),
      欧洲: rootStyles.getPropertyValue('--color-europe'),
      北美洲: rootStyles.getPropertyValue('--color-north-america'),
      南美洲: rootStyles.getPropertyValue('--color-south-america'),
      大洋洲: rootStyles.getPropertyValue('--color-oceania')
    };

    const treemapOption = {
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
            fontSize: 'auto'
          },
          breadcrumb: {
            show: false
          }
        }
      ]
    };

    const sunburstOption = {
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
    }, 3000);
  }
);