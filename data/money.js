var chartDom = document.getElementById('money-chart');
var myChart = echarts.init(chartDom);
var option;

const pathSymbols = {
    money:
        'path://M632-477q29 0 48.5-20.2T700-545q0-27.6-19.5-47.8-19.5-20.2-48-20.2T584-592.8q-20 20.2-20 47.8 0 27.6 20.2 47.8Q604.4-477 632-477Zm-364-61h252v-119H268v119ZM121-81Q85-205 48.5-327.36 12-449.72 12-580q0-108.09 75.78-183.55Q163.56-839 271-839h231q34.29-38 80.88-59 46.59-21 97.12-21 40 0 69 27.12 29 27.13 29 66.88 0 8-1.5 16.5T773-792q-2 8-4 14.5t-4 13.33L829-699h117v346l-128 40-69 232H464v-80h-56v80H121Zm103-136h56v-80h311v80h55l62-203 102-30v-113h-38L632-703q0-17.7 2-36.35 2-18.65 6-36.65-24 11-41.5 30T569-703H271q-50.61 0-86.81 35.54Q148-631.93 148-580q0 93.62 25.5 182.81T224-217Zm256-280Z'
};
const labelSetting = {
    show: true,
    position: 'right',
    offset: [10, 0],
    fontSize: 16,
    color: 'pink',
    formatter: '{c}%'
};
option = {
    title: {
        text: '单亲妈妈月收入情况'
    },
    legend: {
        data: ['月收入']
    },
    grid: {
        bottom: '10%',
        containLabel: true
    },
    yAxis: {
        data: [
            '30001元及以上',
            '10001-30000元',
            '4001-10000元',
            '2001-4000元',
            '2000元及以下'
        ],
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            margin: 30,
            fontSize: 14
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        }
    },
    xAxis: {
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
    },
    series: [
        {
            name: '月收入',
            type: 'pictorialBar',
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ['80%', '60%'],
            barCategoryGap: '40%',
            itemStyle: {
                color: 'pink'
            },
            data: [
                {
                    value: 1.3,
                    symbol: pathSymbols.money
                },
                {
                    value: 4.9,
                    symbol: pathSymbols.money
                },
                {
                    value: 30.2,
                    symbol: pathSymbols.money
                },
                {
                    value: 29.2,
                    symbol: pathSymbols.money
                },
                {
                    value: 34.3,
                    symbol: pathSymbols.money
                }
            ]
        }
    ]
};

option && myChart.setOption(option);
