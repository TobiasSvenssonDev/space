import React, { useState } from 'react';
import axios from 'axios';

export default function NasaApodAPI() {
  //const [apods, setApod] = useState(getApod)

  const resApod = useState()
  
  async function getApod() {


    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'A3sumYKTb72gWZ2K9RcwfMo73LRjtIJy9fO579RE';
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - 7);

    const lastWeek = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const dataCleaned = []
    await axios.get(url, {
      params: {
        'api_key': apiKey,
        'start_date': lastWeek
      }
    })
      .then(function (response) {

        let res = {
          'title': response.data.title,
          'imgUrl': response.data.url,
          'hdImgUrl': response.data.hdurl,
          'imgText': response.data.explanation,
          'date': response.data.date,
          'copyright': response.data.copyright
        }
        useState(dataCleaned.push(res));
        console.log("SUCCESS");

        return response.data

      })
      .catch(function (error) {
        console.log(error + " FEL");
      });
  }

  return (
    <div><h1>APOD API</h1>
      <div>
        <button className="btn btn-lg btn-success" onClick={getApod}>Get started</button>
      </div>
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img src={resApod.imgUrl} className="card-img-top" alt='Picture of space' />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>

    </div>
  )
}
