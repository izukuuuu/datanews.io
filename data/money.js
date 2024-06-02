var dom = document.getElementById('money');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var app = {};
var option;

const pathSymbols = {
    money: 'path://M9.9,0.1C4.5,0.1,0.1,4.5,0.1,9.9C0.1,15.4,4.5,19.8,9.9,19.8c5.4,0,9.8-4.4,9.8-9.8C19.8,4.5,15.4,0.1,9.9,0.1z M9.9,17.8c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C17.8,14.2,14.2,17.8,9.9,17.8z M11.4,10.3c0,0.3-0.2,0.5-0.4,0.7c-0.4,0.3-0.9,0.6-1.3,0.7v0.5c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5v-0.5c-0.5-0.1-0.9-0.3-1.3-0.7c-0.3-0.2-0.4-0.4-0.4-0.7c0-0.3,0.2-0.5,0.4-0.7c0.4-0.3,0.9-0.6,1.3-0.7V8.4c-0.5-0.1-0.9-0.3-1.3-0.7C8.2,7.5,8,7.3,8,7c0-0.3,0.2-0.5,0.4-0.7C8.8,6,9.2,5.7,9.7,5.6V5.1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v0.5c0.5,0.1,0.9,0.3,1.3,0.7C12.8,6.5,13,6.7,13,7c0,0.3-0.2,0.5-0.4,0.7c-0.4,0.3-0.9,0.6-1.3,0.7v0.5c0.5,0.1,0.9,0.3,1.3,0.7C11.3,9.8,11.4,10,11.4,10.3z'
};

const labelSetting = {
    show: true,
    position: 'top',
    fontSize: 16,
    formatter: '{c}%'
};

option = {
    title: {
        text: '十城市单亲母亲月收入分布'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%'
    },
    xAxis: {
        type: 'category',
        data: ['2000元及以下', '2001-4000元', '4001-6000元', '6001-10000元', '10000元以上'],
        axisLabel: {
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        max: 40,
        axisLabel: {
            formatter: '{value}%'
        }
    },
    series: [{
        type: 'pictorialBar',
        data: [
            { value: 34.3, symbol: pathSymbols.money },
            { value: 29.2, symbol: pathSymbols.money },
            { value: 25.4, symbol: pathSymbols.money },
            { value: 17.8, symbol: pathSymbols.money },
            { value: 6.2, symbol: pathSymbols.money }
        ],
        symbolRepeat: 'fixed',
        symbolMargin: '10%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: 40,
        itemStyle: {
            color: '#c23531'
        },
        label: labelSetting
    }]
};

myChart.setOption(option);