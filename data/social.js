document.addEventListener('DOMContentLoaded', function () {
    const rawData = {
        name: "root",
        children: [
            {
                name: "参与社群的妈妈",
                value: 148,
            },
            {
                name: "未参与社群的妈妈",
                value: 53,
                children: [
                    {
                        name: "没资源或者渠道接触",
                        value: 26,
                    },
                    {
                        name: "没有时间社交",
                        value: 23,
                    },
                    {
                        name: "自己可以应付生活与工作，没有这种需求",
                        value: 18,
                    }
                ]
            }
        ]
    };

    const myChart = echarts.init(document.getElementById('social'));

    const seriesData = [];
    let maxDepth = 0;

    function convert(source, basePath, depth) {
        if (!source) return;
        if (maxDepth > 5) return;
        maxDepth = Math.max(depth, maxDepth);
        seriesData.push({
            id: basePath,
            value: source.value || 0,
            depth: depth,
            index: seriesData.length,
            name: source.name
        });
        if (source.children) {
            source.children.forEach((child, index) => {
                convert(child, `${basePath}.${index}`, depth + 1);
            });
        }
    }

    convert(rawData, 'option', 0);

    const displayRoot = d3
        .stratify()
        .parentId(d => d.id.substring(0, d.id.lastIndexOf('.')))(seriesData)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);

    function overallLayout(params, api) {
        const context = params.context;
        d3.pack()
            .size([api.getWidth() - 2, api.getHeight() - 2])
            .padding(3)(displayRoot);
        context.nodes = {};
        displayRoot.descendants().forEach(node => {
            context.nodes[node.id] = node;
        });
    }

    function renderItem(params, api) {
        const context = params.context;
        if (!context.layout) {
            context.layout = true;
            overallLayout(params, api);
        }
        const nodePath = api.value('id');
        const node = context.nodes[nodePath];
        if (!node) return;
        const isLeaf = !node.children || !node.children.length;
        const nodeName = isLeaf ? node.data.name : '';
        return {
            type: 'circle',
            shape: {
                cx: node.x,
                cy: node.y,
                r: node.r
            },
            transition: ['shape'],
            z2: api.value('depth') * 2,
            textContent: {
                type: 'text',
                style: {
                    text: nodeName,
                    fontFamily: 'Arial',
                    fontSize: Math.max(node.r / 5, 10) // Smaller font size
                },
                emphasis: {
                    style: {
                        fontSize: Math.max(node.r / 5, 10)
                    }
                }
            },
            textConfig: {
                position: 'inside'
            },
            style: {
                fill: api.visual('color')
            },
            emphasis: {
                style: {
                    shadowBlur: 20,
                    shadowOffsetX: 3,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            }
        };
    }

    const option = {
        title: {
            text: '单亲母亲社群参与情况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return `${params.data.name}: ${params.data.value}`;
            }
        },
        dataset: {
            source: seriesData
        },
        visualMap: [
            {
                show: false,
                min: 0,
                max: maxDepth,
                dimension: 'depth',
                inRange: {
                    color: ['#F4E4E8', '#E8CAD3', '#DDB0BE', '#D194A9', '#C67893'] // Lighter Morandi pink colors
                }
            }
        ],
        hoverLayerThreshold: Infinity,
        series: {
            type: 'custom',
            renderItem: renderItem,
            progressive: 0,
            coordinateSystem: 'none',
            encode: {
                tooltip: 'value',
                itemName: 'name'
            }
        }
    };

    myChart.setOption(option);

    myChart.on('click', { seriesIndex: 0 }, function (params) {
        drillDown(params.data.id);
    });

    function drillDown(targetNodeId) {
        let targetNode = displayRoot;
        if (targetNodeId != null) {
            targetNode = displayRoot.descendants().find(node => node.data.id === targetNodeId);
        }
        targetNode.parent = null;
        myChart.setOption({
            dataset: {
                source: seriesData
            }
        });
    }

    myChart.getZr().on('click', function (event) {
        if (!event.target) {
            drillDown();
        }
    });
});
