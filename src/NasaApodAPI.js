import React from 'react'
import axios from 'axios';

export default function NasaApodAPI() {
  //const [apods, setApod] = useState(getApod)
 

  async function getApod() {

    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'A3sumYKTb72gWZ2K9RcwfMo73LRjtIJy9fO579RE';
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate()-7);

    const lastWeek = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

    await axios.get(url, {
      params: {
        'api_key': apiKey,
        'start_date': lastWeek        
      }
    })
      .then(function (response) {
        console.log(response.data.hdurl + " SUCCESS ");
        response.data.map(item => {console.log(item.hdurl)})
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

    </div>
  )
}
