    var divorceRateChart = echarts.init(document.getElementById('divorce-rate'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '中国离婚率（2000-2021年）'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: [
                '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', 
                '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', 
                '2020', '2021'
            ]
        },
        yAxis: {
            type: 'value',
            name: '离婚率 (‰)'
        },
        series: [{
            data: [
                0.96, 0.98, 0.90, 1.05, 1.28, 1.37, 1.46, 1.59, 1.71, 1.85, 
                2.00, 2.13, 2.29, 2.58, 2.67, 2.80, 3.01, 3.20, 3.20, 3.40, 
                3.10, 2.00
            ],
            type: 'line',
            smooth: true,
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    divorceRateChart.setOption(option);