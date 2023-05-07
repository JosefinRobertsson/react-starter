/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Datacontainer = styled.div`
flex-grow: 1;
background-color: lightcyan;
overflow: scroll;
overflow-x: hidden;
@media screen and (min-width: px) {
  height: 20%;
}
`

const BASE_URL = 'https://project-express-api-j2mriozkda-lz.a.run.app';

const Endpoints = () => {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [endpoint, setEndpoint] = useState('');
  const [displayParams, setDisplayParams] = useState('');
  const paramsRef = useRef('');

  useEffect(() => {
    setLoading(true);
    setDisplayParams('');
    paramsRef.current = '';
    fetch(`${BASE_URL}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setMusicData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, paramsRef]);

  if (loading) {
    return (
      <p>loading...</p>
    )
  }

  const handleEndpointClick = (endpointChoice) => {
    setEndpoint(endpointChoice);
    paramsRef.current = '';
  };
  const handleParamsSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const currentParam = paramsRef.current;
    fetch(`${BASE_URL}/${endpoint}${paramsRef.current}`)
      .then((res) => res.json())
      .then((data) => {
        setMusicData(data);
        paramsRef.current = '';
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setDisplayParams(currentParam)
      });
  };

  const handleParamsChange = (event) => {
    paramsRef.current = `/${event.target.value}`;
  };

  return (
    <>
      <h3>Endpoints and documentation for the TopMusicData API:</h3>
      <ul>
        <li>
          <button type="button" onClick={() => handleEndpointClick('dataset')}>
            /dataset
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleEndpointClick('genres')}>/genres</button>
        </li>
        <li>
          <button type="button" onClick={() => handleEndpointClick('songlist')}>
            /songlist
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleEndpointClick('songlist/single')}>
            /songlist/single
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleEndpointClick('songlist/sort')}>
            /songlist/sort
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleEndpointClick('songlist/top10')}>
            /songlist/top10
          </button>
        </li>
      </ul>
      {endpoint && (
        <>
          {endpoint === 'dataset' && <><h4>Available parameters for the dataset endpoint:</h4><p>id: a number 1-50</p></>}
          {endpoint === 'genres' && <><h4>Available parameters for the genres endpoint:</h4><p>genreName: type in a genrename and see what songs there are in your genre</p></>}
          {endpoint === 'songlist/single' && <><h4>Available parameters for the songlist/single endpoint:</h4><p>songname: type in a songname and see if it&apos;s in the top 50</p></>}
          {endpoint === 'songlist/sort' && <><h4>Available parameters for the songlist/sort endpoint:</h4><p>popularity and danceability</p></>}
          {endpoint === 'songlist/top10' && <><h4>Available parameters for the songlist/top10 endpoint:</h4><p>bpm, energy, danceability, loudness, liveness, valence, length, acousticness, speechiness, popularity</p></>}
          {['dataset', 'genres', 'songlist/single', 'songlist/sort', 'songlist/top10'].includes(endpoint) && (
            <form onSubmit={handleParamsSubmit}>
              <label htmlFor="params-input">Enter parameter: </label>
              <input id="params-input" type="text" defaultValue={paramsRef.current.replace('/', '')} onChange={handleParamsChange} />
              <button type="submit">Fetch data</button>
            </form>
          )}

          <p>Fetching data from: {`${BASE_URL}/${endpoint}${displayParams}`}</p>
          <Datacontainer>
            <pre>{JSON.stringify(musicData, null, 2)}</pre>
          </Datacontainer>
        </>
      )}
    </>
  );
};

export default Endpoints;