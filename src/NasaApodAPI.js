import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apod from './Apod.js';

const baseURL = 'https://api.nasa.gov/planetary/apod'

export default function NasaApodAPI() {

    const [apods, setApods] = useState(null);
    console.log(apods);
    const apiKey = 'A3sumYKTb72gWZ2K9RcwfMo73LRjtIJy9fO579RE';
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - 7);

    const lastWeek = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    console.log(lastWeek)

    useEffect(() => {
        axios.get(baseURL, {
            params: {
              'api_key': apiKey,
              'start_date': lastWeek
            }}).then((response) => {
            console.log(response.data);
            setApods(response.data);
        });
    }, []);

    if (!apods) return null;
// {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
  return (
    <div>NasaApodAPI
        <div>
            {apods.map(apod => <Apod key={apod.date} item={apod} />)}
        </div>
    </div>
  )
}
