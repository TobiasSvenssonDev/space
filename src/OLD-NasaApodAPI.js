import React from 'react';
import axios from 'axios';

export default function NasaApodAPI() {
  //const [apods, setApod] = useState(getApod)

  //const resApod = useState()  
  const dataCleaned = []
  async function getApod() {


    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'A3sumYKTb72gWZ2K9RcwfMo73LRjtIJy9fO579RE';
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - 7);

    const lastWeek = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    

    await axios.get(url, {
      params: {
        'api_key': apiKey,
        'start_date': lastWeek
      }
    })
      .then(function (response) {
        response.data.map((res)=>
        
          dataCleaned.push(res = {
            'title': response.data.title,
            'imgUrl': response.data.url,
            'hdImgUrl': response.data.hdurl,
            'imgText': response.data.explanation,
            'date': response.data.date,
            'copyright': response.data.copyright
          }))
          
        
        //    useState(dataCleaned.push(res));
        console.log("SUCCESS");

      })
      .catch(function (error) {
        console.log(error + " FEL");
        return false
      });


  }
  
  const cardItem = dataCleaned.map((item) =>
    <div className='card'>
      <img className='card-img-top' src={item.imgUrl} alt={'Astronomy picture' + item.title} />
      <div className='card-body'>
        <h5 className='card-title'>{item.title}</h5>
        <p className='card-text'>{item.imgText}</p>
        <span className="btn btn-primary">Go somewhere</span>
      </div>
    </div>
  )

  return (
    <div><h1>APOD API</h1>
      <div>
        <button className="btn btn-lg btn-success" onClick={getApod}>Get started</button>
      </div>
      <div className="container">
        {cardItem}
      </div>

    </div>
  )
}
