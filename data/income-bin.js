var chartDom = document.getElementById('income-bin');
var incomeBin = echarts.init(chartDom);
var option;

// 数据
var data = [
    {value: 16, name: '(0, 10000]'},
    {value: 25, name: '(10000, 20000]'},
    {value: 31, name: '(20000, 30000]'},
    {value: 25, name: '(30000, 40000]'},
    {value: 8, name: '(40000, 50000]'},
    {value: 10, name: '(50000, 60000]'},
    {value: 4, name: '(60000, 70000]'},
    {value: 5, name: '(70000, 80000]'},
    {value: 0, name: '(80000, 90000]'},
    {value: 4, name: '(90000, 100000]'},
    {value: 2, name: '(100000, 110000]'},
    {value: 1, name: '(110000, 120000]'},
    {value: 0, name: '(120000, 130000]'},
    {value: 0, name: '(130000, 140000]'},
    {value: 0, name: '(140000, 150000]'},
    {value: 0, name: '(150000, 160000]'},
    {value: 0, name: '(160000, 170000]'},
    {value: 1, name: '(170000, 180000]'},
    {value: 0, name: '(180000, 190000]'},
    {value: 1, name: '(190000, 200000]'}
];

// 南丁格尔玫瑰图配置
option = {
    title: {
        text: '过去12个月所有工作（主要工作+一般工作）的税后工资性收入分布',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: '收入分布',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: data
        }
    ]
};

// 初始化展示南丁格尔玫瑰图
incomeBin.setOption(option);