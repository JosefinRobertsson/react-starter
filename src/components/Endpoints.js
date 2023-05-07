import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://project-express-api-j2mriozkda-lz.a.run.app';

const Endpoints = () => {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [endpoint, setEndpoint] = useState('');
  const [params, setParams] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/${endpoint}${params}`)
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
  }, [endpoint, params]);

  if (loading) {
    return (
      <p>loading...</p>
    )
  }

  const handleEndpointClick = (endpointChoice) => {
    setEndpoint(endpointChoice);
    setParams('');
  };

  const handleParamsChange = (event) => {
    setParams(`/${event.target.value}`);
  };

  return (
    <>
      <p>Here are the endpoints for this API:</p>
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
      </ul>
      {endpoint && (
        <>
          <p>Enter any parameters (if applicable):</p>
          <input type="text" onChange={handleParamsChange} />
          <p>Fetching data from: {`${BASE_URL}/${endpoint}${params}`}</p>
          <pre>{JSON.stringify(musicData, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default Endpoints;