/*
 * @Author: aweleey.li@qunar.com 
 * @Date: 2018-09-02 12:33:09 
 * @Last Modified by: aweleey.li@qunar.com
 * @Last Modified time: 2018-09-04 16:08:13
 */

import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Loadable from 'react-loadable'
import Loading from '../component/Loading'
import Hello from '../component/Hello'
import NotFound from '../component/NotFound'
const TestAntd = Loadable({
    loader: () => import('../component/Hello/TestAntd'),
    loading: Loading
})
const TestRouter = Loadable({
    loader: () => import('../component/Hello/TestRouter'),
    loading: Loading
})
const TestApi = Loadable({
    loader: () => import('../component/Hello/TestApi'),
    loading: Loading
})
const TestI18N = Loadable({
    loader: () => import('../component/Hello/TestI18N'),
    loading: Loading
})

const getRouter = () => <Router>
    <div>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/router">TestRouter</Link></li>
            <li><Link to="/antd">TestAntd</Link></li>
            <li><Link to="/testapi">TestApi</Link></li>
            <li><Link to="/i18n">i18n</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/antd" component={TestAntd}/>
            <Route exact path="/router" component={TestRouter}/>
            <Route exact path="/testapi" component={TestApi}/>
            <Route exact path="/i18n" component={TestI18N}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
</Router>

export default getRouter