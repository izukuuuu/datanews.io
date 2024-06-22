(function () {
    // 初始化图表
    var myChart = echarts.init(document.getElementById('child-birth-year'));

    // 基于提供的出生年份数据
    const data = [
        { value: 29, name: '(1990,1995]' },
        { value: 67, name: '(1995,2000]' },
        { value: 73, name: '(2000,2005]' },
        { value: 98, name: '(2005-2010]' },
        { value: 116, name: '(2010-2015]' },
        { value: 24, name: '(2015-2020]' },
    ];

    const defaultPalette = [
        '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', 
        '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'
    ];

    const radius = ['30%', '80%'];
    const pieOption = {
        title: {
            text: '单亲母亲一胎孩子出生年份分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '出生年份范围',
                type: 'pie',
                id: 'distribution',
                radius: radius,
                label: {
                    show: true,
                    formatter: '{b}: {c} ({d}%)'
                },
                universalTransition: true,
                animationDurationUpdate: 1000,
                data: data
            }
        ]
    };

    const parliamentOption = (function () {
        let sum = data.reduce(function (sum, cur) {
            return sum + cur.value;
        }, 0);
        let angles = [];
        let startAngle = -Math.PI / 2;
        let curAngle = startAngle;
        data.forEach(function (item) {
            angles.push(curAngle);
            curAngle += (item.value / sum) * Math.PI * 2;
        });
        angles.push(startAngle + Math.PI * 2);
        function parliamentLayout(startAngle, endAngle, totalAngle, r0, r1, size) {
            let rowsCount = Math.ceil((r1 - r0) / size);
            let points = [];
            let r = r0;
            for (let i = 0; i < rowsCount; i++) {
                // 重新计算大小
                let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
                let newSize = (totalAngle * r) / totalRingSeatsNumber;
                for (
                    let k = Math.floor((startAngle * r) / newSize) * newSize;
                    k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
                    k += newSize
                ) {
                    let angle = k / r;
                    let x = Math.cos(angle) * r;
                    let y = Math.sin(angle) * r;
                    points.push([x, y]);
                }
                r += size;
            }
            return points;
        }
        return {
            title: {
                text: '单亲母亲一胎孩子出生年份分布',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: {
                name: '出生年份范围',
                type: 'custom',
                id: 'distribution',
                data: data,
                coordinateSystem: undefined,
                universalTransition: true,
                animationDurationUpdate: 1000,
                renderItem: function (params, api) {
                    var idx = params.dataIndex;
                    var viewSize = Math.min(api.getWidth(), api.getHeight());
                    var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
                    var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
                    var cx = api.getWidth() * 0.5;
                    var cy = api.getHeight() * 0.5;
                    var size = viewSize / 50;
                    var points = parliamentLayout(
                        angles[idx],
                        angles[idx + 1],
                        Math.PI * 2,
                        r0,
                        r1,
                        size + 3
                    );
                    return {
                        type: 'group',
                        children: points.map(function (pt) {
                            return {
                                type: 'circle',
                                autoBatch: true,
                                shape: {
                                    cx: cx + pt[0],
                                    cy: cy + pt[1],
                                    r: size / 2
                                },
                                style: {
                                    fill: defaultPalette[idx % defaultPalette.length]
                                }
                            };
                        })
                    };
                }
            }
        };
    })();

    let currentOption = pieOption;
    setInterval(function () {
        currentOption = currentOption === pieOption ? parliamentOption : pieOption;
        myChart.setOption(currentOption);
    }, 8000);
})();