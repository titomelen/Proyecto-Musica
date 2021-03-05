import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListaCancion from './TrackList'
import DetalleCancion from './TrackDetails'

export default () => (
  <Switch>
    <Route path="/tracks/:id" component={DetalleCancion} />
    <Route path="/tracks" component={ListaCancion} />
  </Switch>
)
