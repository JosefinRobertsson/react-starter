/* eslint-disable max-len */
import React from 'react';

const Documentation = () => {
  return (
    <>
      <p>topMusicData is an API that allows the user to fetch data about a sample of 50 popular Spotify songs.</p>
      <p>*/dataset</p>
      <p>shows the entire unfiltered data
              accept the following query params:
              id: fetches a single song with the specified id. Available id:s are 1-50
      </p>

      <p>*/ genres</p>
      <p>returns all genres
              accepts the following query params:
              genreName: returns all the songs in a specified genre
      </p>

      <p>*/songlist</p>
      <p>returns all tracknames
              accepts the following query params:
              songname: returns all available data on a specific song
      </p>

      <p>*/songlist/sort</p>
      <p>accepts the following query params:
              sortBy: sorts the data on either danceability or popularity and returns a few specifics about each song.
      </p>

      <p>*/songlist/top10</p>
      <p>accepts the following request params:
          bpm, energy, danceability, loudness, liveness, valence, length, acousticness, speechiness, popularity
          Returns a list of the 10 songs that score highest in the requested category
      </p>
    </>
  )
}

export default Documentation;