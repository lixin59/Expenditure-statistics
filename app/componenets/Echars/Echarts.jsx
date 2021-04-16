
import React, { Component } from 'react';

import * as echarts from 'echarts';//引入主模块
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    constructor(props){
        super(props);
        this.state={
            param:props
        }
    }
    
    componentDidMount() {
        const {xdata,ydata,name} = this.props;

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { 
                text: '支出金额数据展示',
                x: 'center',//标题居中 
            },
            tooltip: {},
            toolbox: {
                show: true,
                orient: 'horizontal',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    }, //区域缩放，区域缩放还原
                    dataView: { 
                        readOnly: false
                    }, //数据视图
                    magicType: {
                        type: ['line', 'bar']
                    },  //切换为折线图，切换为柱状图
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            xAxis: {
                // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                data:xdata
            },
            yAxis: {},
            series: [{
                // name: '销量',
                name:name,
                type: 'bar',
                // data: [5, 20, 36, 10, 10, 20]
                data:ydata
            }]
        });
    }
    componentWillReceiveProps=(nextProps)=>{
        console.log('将要更新');
        
        this.setState({
            param:nextProps
    })
    }
    componentDidUpdate(){
        console.log('更新中');
        const {xdata,ydata,name} = this.props;
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { 
                text: '支出金额数据展示',
                x: 'center',//标题居中
            },
            tooltip: {},
            toolbox: {
                show: true,
                orient: 'horizontal',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    }, //区域缩放，区域缩放还原
                    dataView: { 
                        readOnly: false
                    }, //数据视图
                    magicType: {
                        type: ['line', 'bar']
                    },  //切换为折线图，切换为柱状图
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            xAxis: {
                data:xdata
            },
            yAxis: {},
            series: [{
                name:name,
                type: 'bar',
                data:ydata
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 1400, height: 600 }}></div>
        );
    }
}

export default EchartsTest;