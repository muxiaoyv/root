import React from 'react'
import { Router, route, IndexRoute, browserHistory } from 'react-router'
import Home from '../views/Home/Home'
import Detail from '../views/Detail/Detail'

const routes = (
	<Router history={browserHistory}> 
		<route path = '/'component = {Home} />
		<route path = 'detail/:id' component = {Detail} /> 
	</Router>
)

export default routes