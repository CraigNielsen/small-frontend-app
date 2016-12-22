import React from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import Landing from './landing.jsx'
import NotFound from './notFound.jsx'

export default class ApplicationRouting extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <IndexRoute component={Landing} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}
