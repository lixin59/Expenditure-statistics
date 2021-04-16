import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//router
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
//引入图标
import FavoriteIcon from '@material-ui/icons/Favorite';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home'
import DataIcon from '@material-ui/icons/DateRange'

import About from '../../view/about/index'
import Data from '../../view/data/index'
import Home from '../../view/home/index'

// let useStyles = makeStyles({
//     root: {
//         width: 500,
//     },
// });

export default function SimpleBottomNavigation() {
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                style={{backgroundColor:'#e4e4e4'}}
                // className={classes.root}
            >
            <BottomNavigationAction label="首页"  component={NavLink}  to='/home' icon={<HomeIcon />} />
            <BottomNavigationAction label="数据查询" component={NavLink} to='/data' icon={<EqualizerIcon />}/>
            <BottomNavigationAction label="关于我们" component={NavLink} to='/about' icon={<PermContactCalendarIcon />} />
            </BottomNavigation>
            <hr/>
            <div>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/about'component={About}/>
                </Switch>
            </div>
        </div>


    );
}