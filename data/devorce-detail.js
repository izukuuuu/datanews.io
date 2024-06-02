var dom = document.getElementById('devorce-detail');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '中国离婚数据统计（2009-2021年）'
    },
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['离婚办理案件', '离婚办理服务民政部门合计（件）', '判决离婚（件）', '调解离婚（件）'],
        bottom: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '离婚办理案件',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [2468075, 2677517, 2873963, 3103837, 3500111, 3636754, 3841407, 4158211, 4373824, 4460849, 4700635, 4338998, 2839266]
        },
        {
            name: '离婚办理服务民政部门合计（件）',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [1801738, 2009881, 2207346, 2423393, 2815369, 2957295, 3148779, 3486257, 3704498, 3812249, 4047193, 3736487, 2141205]
        },
        {
            name: '判决离婚（件）',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(55, 162, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(116, 21, 219)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [199045, 185488, 168516, 161202, 170531, 186220, 212258, 218735, 207567, 204869, 207722, 187405, 180820]
        },
        {
            name: '调解离婚（件）',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 0, 135)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 0, 157)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [467292, 482148, 498101, 519242, 514211, 493239, 480370, 453219, 461759, 443731, 445720, 415106, 517241]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);