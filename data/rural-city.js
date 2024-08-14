(function() {
    var chartDom = document.getElementById('rural-city-contrib');
    var ruralCity = echarts.init(chartDom);
    var option;

    // Processed data for the chart
    const rawData = [
        [0, 0, 2, 1, 2, 3, 10, 2, 8, 3, 2, 13, 3, 2, 3, 18, 5, 7, 21, 4, 3, 7, 4, 10, 20, 3],
        [1, 1, 20, 8, 9, 11, 32, 6, 18, 6, 3, 19, 5, 3, 4, 20, 6, 8, 21, 4, 3, 6, 3, 7, 12, 2],
        [0, 0, 0, 0, 2, 0, 3, 1, 0, 0, 1, 3, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0]
    ];
    const totalData = [];
    for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
    }
    const grid = {
        left: 100,
        right: 100,
        top: 50,
        bottom: 100
    };
    const gridWidth = ruralCity.getWidth() - grid.left - grid.right;
    const gridHeight = ruralCity.getHeight() - grid.top - grid.bottom;
    const categoryWidth = gridWidth / rawData[0].length;
    const barWidth = categoryWidth * 0.6;
    const barPadding = (categoryWidth - barWidth) / 2;
    const series = ['乡村', '城镇', '缺失'].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
            label: {
                show: true,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
                totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
    });
    const color = ['#5470c6', '#91cc75', '#fac858'];
    const elements = [];
    for (let j = 1, jlen = rawData[0].length; j < jlen; ++j) {
        const leftX = grid.left + categoryWidth * j - barPadding;
        const rightX = leftX + barPadding * 2;
        let leftY = grid.top + gridHeight;
        let rightY = leftY;
        for (let i = 0, len = series.length; i < len; ++i) {
            const points = [];
            const leftBarHeight = (rawData[i][j - 1] / totalData[j - 1]) * gridHeight;
            points.push([leftX, leftY]);
            points.push([leftX, leftY - leftBarHeight]);
            const rightBarHeight = (rawData[i][j] / totalData[j]) * gridHeight;
            points.push([rightX, rightY - rightBarHeight]);
            points.push([rightX, rightY]);
            points.push([leftX, leftY]);
            leftY -= leftBarHeight;
            rightY -= rightBarHeight;
            elements.push({
                type: 'polygon',
                shape: {
                    points
                },
                style: {
                    fill: color[i],
                    opacity: 0.25
                }
            });
        }
    }
    option = {
        title: {
            text: '单亲母亲分省份城镇/乡村分布',
            left: 'center'
        },
        legend: {
            selectedMode: false,
            top: 'bottom'
        },
        grid,
        yAxis: {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['新疆维吾尔自治区', '北京市', '黑龙江省', '吉林省', '湖南省', '上海市', '广东省', '安徽省', '河北省', '湖北省', '福建省', '辽宁省', '江苏省', '江西省', '浙江省', '河南省', '山东省', '山西省', '四川省', '陕西省', '天津市', '贵州省', '广西壮族自治区', '云南省', '甘肃省', '重庆市'],
            axisLabel: {
                rotate: 45,
                interval: 0 // 确保所有标签都显示，不会因为重叠而省略
            }
        },
        series,
        graphic: {
            elements
        }
    };
    option && ruralCity.setOption(option);
})();