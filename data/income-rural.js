var chartDom = document.getElementById('income-rural');
var incomeChartRural = echarts.init(chartDom);

// The JSON data
var data = {
    "categories": [
        "(0, 10000]",
        "(10000, 20000]",
        "(20000, 30000]",
        "(30000, 40000]",
        "(40000, 50000]",
        "(50000, 60000]",
        "(60000, 70000]",
        "(70000, 80000]",
        "(80000, 90000]",
        "(90000, 100000]",
        "(100000, 110000]",
        "(110000, 120000]",
        "(120000, 130000]",
        "(130000, 140000]",
        "(140000, 150000]",
        "(150000, 160000]",
        "(160000, 170000]",
        "(170000, 180000]",
        "(180000, 190000]",
        "(190000, 200000]"
    ],
    "data": [
        {
            "name": "城镇",
            "values": [5, 13, 16, 15, 5, 5, 3, 2, 0, 3, 2, 1, 0, 0, 0, 0, 0, 1, 0, 1]
        },
        {
            "name": "乡村",
            "values": [11, 12, 15, 10, 3, 5, 1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};

var currentSeries = 0;
var options = [
    {
        color: ['#C26B61', '#5A788D'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['城镇', '乡村']
        },
        xAxis: {
            type: 'category',
            data: data.categories
        },
        yAxis: {
            type: 'value',
            max: 18
        },
        series: [
            {
                name: '城镇',
                type: 'bar',
                data: data.data[0].values,
                animation: true
            },
            {
                name: '乡村',
                type: 'bar',
                data: data.data[1].values,
                animation: true
            }
        ]
    },
    {
        color: ['#5A788D'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['乡村']
        },
        xAxis: {
            type: 'category',
            data: data.categories
        },
        yAxis: {
            type: 'value',
            max: 18
        },
        series: [
            {
                name: '乡村',
                type: 'bar',
                data: data.data[1].values,
                animation: true
            }
        ]
    }
];

function updateChart() {
    currentSeries = (currentSeries + 1) % options.length;
    incomeChartRural.setOption(options[currentSeries], true);
}

setInterval(updateChart, 3000); // Change chart every 3 seconds

// Initialize with the first option
incomeChartRural.setOption(options[currentSeries]);