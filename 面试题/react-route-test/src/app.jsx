import { render } from 'react-dom'
import routes from './routes/index.jsx'
import React from 'react'
import { Button } from 'antd'

const a = <Button type="primary">Primary</Button>

render(routes,document.getElementById('root'))