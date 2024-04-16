function TJ_GJC() {
    var myChart = echarts3.init(document.getElementById('q-country'));
    var keywords = [{ value: 14, name: 'Malaysia' },
    { value: 8, name: 'Indonesia' },
    { value: 7, name: 'Japan' },
    { value: 7, name: 'Pakistan' },
    { value: 6, name: 'Viet Nam' },
    { value: 5, name: 'Laos' },
    { value: 4, name: 'Bangladesh' },
    { value: 3, name: 'Mongolia' },
    { value: 3, name: 'Algeria' },
    { value: 3, name: 'India' },
    { value: 3, name: 'Korea' },
    { value: 3, name: 'Georgia' },
    { value: 3, name: 'Turkmenistan' },
    { value: 2, name: 'Gabon' },
    { value: 2, name: 'El Salvador' },
    { value: 2, name: 'Cuba' },
    { value: 2, name: 'Bhutan' },
    { value: 2, name: 'Singapore' },
    { value: 1, name: 'Fiji' },
    { value: 1, name: 'Syria' },
    { value: 1, name: 'Ghana' },
    { value: 1, name: 'Germany' },
    { value: 1, name: 'east Timor' },
    { value: 1, name: 'Armenia' },
    { value: 1, name: 'France' },
    { value: 1, name: 'Iraq' },
    { value: 1, name: 'Benin' },
    { value: 1, name: 'Jordan' },
    { value: 1, name: 'Greece' },
    { value: 1, name: 'Italy' }]

    var option = {
        series: [{
            type: 'wordCloud',
           //maskImage: maskImage,
            sizeRange: [15, 80],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 8,
            shape: 'pentagon',
            width: '100%',
            height: '100%',
             textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    },
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: keywords
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

}