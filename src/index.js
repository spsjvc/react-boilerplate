import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'tailwindcss/dist/base.css'

import { routes } from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
