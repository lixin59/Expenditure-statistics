import React from 'react';
import Echarts from '../../componenets/Echars/Echarts'
import { connect } from 'react-redux';
import actions from '../../store/actions'
import store from '../../store'

import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




function ShowDatas() {
    const initData= ()=>{
        const newData = store.getState();
        let yd = [];
        let xd = [];
        let n = ''
        newData.forEach((val, index, arr) => {
            yd.push(val.data.money);
            xd.push(val.data.date.year)
            n = '所有支出';
        });
        return {
            ydata:yd,
            xdata:xd,
            name:n
        }
    }
    const [age, setAge] = React.useState('');
    const [starDate, setSDate] = React.useState('');
    const [endDate, setEDate] = React.useState('');
    const [data, setData] = React.useState(initData());
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const SdateChange = (event) => {
        setSDate(event.target.value);
    };
    const EdateChange = (event) => {
        setEDate(event.target.value);
    };
    const show = (e) =>{
        const showData = store.getState();
        let ydatas = [];
        let xdatas = [];
        let names = ''
        if (age == 0){
            showData.forEach((val, index, arr) => {
                ydatas.push(val.data.money);
                xdatas.push(val.data.date.time)
                names = '所有支出';
            });
            setData({
                ydata:ydatas,
                xdata:xdatas,
                name:names
            });
            console.log(data);
        }else if (age == 1){
            showData.forEach((val, index, arr) => {
                if (val.data.ExpenditureType==1){
                    ydatas.push(val.data.money);
                    xdatas.push(val.data.date.year)
                    names = '吃饭支出';
                }
            });
            setData({
                ydata:ydatas,
                xdata:xdatas,
                name:names
            });
        }
        else if (age == 2){
            showData.forEach((val, index, arr) => {
                if (val.data.ExpenditureType==2){
                    ydatas.push(val.data.money);
                    xdatas.push(val.data.date.year)
                    names = '购物支出';
                }
            });
            setData({
                ydata:ydatas,
                xdata:xdatas,
                name:names
            });
        }
        else if (age == 3){
            showData.forEach((val, index, arr) => {
                if (val.data.ExpenditureType==3){
                    ydatas.push(val.data.money);
                    xdatas.push(val.data.date.year)
                    names = '交通支出';
                }
            });
            setData({
                ydata:ydatas,
                xdata:xdatas,
                name:names
            });
        }
        console.log(xdatas);
        
    };
    
    return (
        <div>
            <Card style={{ 
                width: '99%', 
                height: '100%', 
                margin: 'auto', 
                padding:20,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Card style={{
                    width:'80%', 
                    margin: 30, 
                    display:'flex',
                    justifyContent:'center'
                    }}>
                    <TextField
                        id="date"
                        label="开始日期"
                        type="date"
                        defaultValue="2021-01-20"
                        value={starDate}
                        onChange={SdateChange}
                        style={{
                            marginLeft: 60,
                            marginRight: 20,
                            marginTop: 20,
                            marginBottom: 20,
                            width: 200
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="结束日期"
                        type="date"
                        defaultValue="2021-01-20T00:00"
                        value={endDate}
                        onChange={EdateChange}
                        style={{
                            marginLeft: 40,
                            marginRight: 20,
                            marginTop: 20,
                            marginBottom: 20,
                            width: 200
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl variant="outlined" 
                    style={{ 
                        marginTop: 20,
                        marginRight: 20,
                        marginLeft:40,
                        minWidth: 120, 
                    }} >
                        <InputLabel id="demo-simple-select-filled-label">支出类型</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="请选择类型"
                        >
                            <MenuItem value="">
                                <em>请选择类型</em>
                            </MenuItem>
                            <MenuItem value={0}>所有</MenuItem>
                            <MenuItem value={1}>吃饭</MenuItem>
                            <MenuItem value={2}>购物</MenuItem>
                            <MenuItem value={3}>交通</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={show}
                        style={{ 
                            height: 55, 
                            width: 100, 
                            marginTop: 20, 
                            marginBottom: 10, 
                            marginLeft:40,
                            fontSize: 18 }}
                    >查看</Button>
                </Card>
                <Card style={{
                    width:'80%',
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Echarts {...data}></Echarts>
                </Card>
            </Card>
        </div>);
}

let mapStateToProps = state => state;
export default connect(
    mapStateToProps,//把仓库的状态映射为组件的属性对象
    actions
)(ShowDatas)