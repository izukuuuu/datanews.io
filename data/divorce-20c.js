window.onload = function() {
    var chart20c = echarts.init(document.getElementById('divorce-20c'));

    var option = {
        title: {
            text: '单亲家庭比例及类型（1982年和1990年）',
            left: 'center',
            top: '2%'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        angleAxis: {
            startAngle: 90
        },
        radiusAxis: {
            type: 'category',
            data: ['1982年', '1990年'],
            z: 10
        },
        polar: {
            center: ['50%', '55%'],
            radius: ['40%', '70%']
        },
        series: [
            {
                type: 'bar',
                data: [9.26, 5.28],
                coordinateSystem: 'polar',
                name: '分居式单亲家庭',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#7D9DC6'
                },
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{c}%',
                    color: '#000'
                }
            },
            {
                type: 'bar',
                data: [2.95, 1.78],
                coordinateSystem: 'polar',
                name: '丧偶式单亲家庭',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#ECA23F'
                },
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{c}%',
                    color: '#000'
                }
            },
            {
                type: 'bar',
                data: [0.38, 0.53],
                coordinateSystem: 'polar',
                name: '离婚式单亲家庭',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#BD748F'
                },
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{c}%',
                    color: '#000'
                }
            }
        ],
        legend: {
            show: true,
            data: ['分居式单亲家庭', '丧偶式单亲家庭', '离婚式单亲家庭'],
            top: 'bottom'
        }
    };

    chart20c.setOption(option);
}
