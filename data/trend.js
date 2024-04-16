var dom = document.getElementById('container-trend');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [157845, 174806, 192358, 214345, 243735, 274809, 307501, 333072, 273792, 255720, 253177],
        type: 'line'
    }],
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>在校生数：' + params[0].value;
        }
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
