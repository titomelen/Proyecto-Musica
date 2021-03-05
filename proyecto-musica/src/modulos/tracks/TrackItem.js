import React, { Fragment } from 'react'
import { Media } from 'reactstrap'
import { Link } from 'react-router-dom'

export default ({ track }) => (
  <Fragment>
    <Media className="my-3">
      <Media left className="mr-3">
        <Media object src={track.artworkUrl100} alt={track.trackName} />
      </Media>
      <Media body>
        <Media heading>
          <Link to={`/tracks/${track.trackId}`}>{track.trackName}</Link>
        </Media>
        {track.artistName}
      </Media>
    </Media>
  </Fragment>
)
