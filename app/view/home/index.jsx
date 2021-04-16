import React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions'
import store from '../../store'

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

function Addddd({ upData }) {
    const [age, setAge] = React.useState('');
    const [dates, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [money, setMoney] = React.useState('');
    const [remarks, setRemarks] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dateChange = (event) => {
        setDate(event.target.value)
    };
    const timeChange = (event) => {
        setTime(event.target.value)
    };
    const moneyChange = (event) => {
        setMoney(event.target.value);
    };
    const remarksChange = (event) => {
        setRemarks(event.target.value);
    };
    const saveData = (ddddd) => {
        let m = Number(money)
        const allData = {
            date: {
                year:dates,
                time:time
            },
            ExpenditureType: age,
            money: m,
            remarks: remarks
        }
        console.log('hhh', allData);
        upData(allData);
    };
    const getData = (d) => {
        const newData = store.getState();
        var sum = 0
        newData.forEach((val, index, arr) => {
            sum += val.data.money
        })
        console.log(newData, sum);
        return sum
    }
    return (

        <div className="bkc">
            <Card style={{ width: '99%', height: '100%', margin: 'auto' }}>
                <Card>
                    <CardContent style={{ textAlign: "center", fontSize: 30, fontWeight: 700 }}>今日消费{getData()}元</CardContent>
                </Card>
                <Card style={{ margin: 30, paddingLeft: 50 }}>
                    <form style={{ display: 'flex', flexWrap: 'wrap' }} noValidate>
                        <TextField
                            id="date"
                            label="支出日期"
                            type="date"
                            defaultValue="2021-01-20"
                            value={dates}
                            onChange={dateChange}
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 20,
                                width: 150
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="支出时间"
                            type="time"
                            defaultValue="00:00"
                            value={time}
                            onChange={timeChange}
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 20,
                                width: 150
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                        <FormControl variant="outlined" style={{ marginTop: 20, marginRight: 20, minWidth: 120, }} >
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
                                <MenuItem value={1}>吃饭</MenuItem>
                                <MenuItem value={2}>购物</MenuItem>
                                <MenuItem value={3}>交通</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField style={{ marginTop: 20, marginRight: 20, marginBottom: 10 }}
                            id="outlined-basic" label="请输入金额"
                            variant="outlined"
                            value={money}
                            onChange={moneyChange}
                        />
                        <TextField style={{ marginTop: 20, marginRight: 20, marginBottom: 10 }}
                            id="outlined-basic" label="添加备注"
                            variant="outlined"
                            value={remarks}
                            onChange={remarksChange} />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            // onClick={upData}
                            onClick={saveData}
                            style={{ height: 55, width: 100, marginTop: 20, marginBottom: 10, fontSize: 18 }}
                        >保 存</Button>
                    </form>
                </Card>
                <div className="bc"></div>
            </Card>
        </div>);
}

let mapStateToProps = state => state;
export default connect(
    mapStateToProps,//把仓库的状态映射为组件的属性对象
    actions
)(Addddd)