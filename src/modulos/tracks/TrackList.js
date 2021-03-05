import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'

import SearchTracks from './SearchTracks'
import TrackItem from './TrackItem'

export default class extends Component {
  state = {
    tracks: []
  }

  componentDidMount() {
    this.search()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.search()
    }
  }

  search = () => {
    const { search: query } = this.props.location

    fetch(`https://itunes.apple.com/search${query}`, { mode: 'cors' })
      .then(res => res.json())
      .then(({ results }) => this.setState({ tracks: results }))
  }

  render() {
    return (
      <Fragment>
        <SearchTracks />
        <Container>
          {this.state.tracks.map(track => (
            <TrackItem key={track.trackId} track={track} />
          ))}
        </Container>
      </Fragment>
    )
  }
}
