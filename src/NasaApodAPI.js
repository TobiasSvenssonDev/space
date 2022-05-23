import React, { useState } from 'react';
//import axios from 'axios';
import Apod from './Apod.js';

//const baseURL = 'https://api.nasa.gov/planetary/apod'

export default function NasaApodAPI() {

    const [apods, setApods] = useState([
      {
        "copyright": "Benjamin Barakat",
        "date": "2022-05-16",
        "explanation": "Real castles aren't this old.  And the background galaxy is even older. Looking a bit like an alien castle, the pictured rock spires are called hoodoos and are likely millions of years old. Rare, but found around the world, hoodoos form when dense rocks slow the erosion of softer rock underneath.  The pictured hoodoos survive in the French Alps and are named Demoiselles Coiffées -- which translates to English as \"Ladies with Hairdos\". The background galaxy is part of the central disk of our own Milky Way galaxy and contains stars that are typically billions of years old. The photogenic Cygnus sky region -- rich in dusty dark clouds and red glowing nebulas -- appears just above and behind the hoodoos. The featured image was taken in two stages: the foreground was captured during the evening blue hour, while the background was acquired from the same location later that night.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/CoiffeesMW_Barakat_6700.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Milky Way over French Alp Hoodoos",
        "url": "https://apod.nasa.gov/apod/image/2205/CoiffeesMW_Barakat_960.jpg"
      },
      {
        "copyright": "Capture: Greg Turgeon Processing: Kiko Fairbairn",
        "date": "2022-05-17",
        "explanation": "Astronomers turn detectives when trying to figure out the cause of startling sights like NGC 1316.  Investigations indicate that NGC 1316 is an enormous elliptical galaxy that started, about 100 million years ago, to devour a smaller spiral galaxy neighbor, NGC 1317, just on the upper right. Supporting evidence includes the dark dust lanes characteristic of a spiral galaxy, and faint swirls and shells of stars and gas visible in this wide and deep image. One thing that >remains unexplained is the unusually small globular star clusters, seen as faint dots on the image. Most elliptical galaxies have more and brighter globular clusters than NGC 1316.  Yet the observed globulars are too old to have been created by the recent spiral collision.  One hypothesis is that these globulars survive from an even earlier galaxy that was subsumed into NGC 1316. Another surprising attribute of NGC 1316, also known as Fornax A, is its giant lobes of gas that glow brightly in radio waves.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_1300.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "NGC 1316: After Galaxies Collide",
        "url": "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_960.jpg"
      },
      {
        "copyright": "Tomas Slovinsky",
        "date": "2022-05-18",
        "explanation": "Cloudy skies plagued some sky watchers on Sunday as May's Full Flower Moon slipped through Earth's shadow in a total lunar eclipse. In skies above Chile's Atacama desert this telephoto snapshot still captured an awesome spectacle though. Seen through thin high cirrus clouds just before totality began, a last sliver of sunlit crescent glistens like a hazy jewel atop the mostly shadowed lunar disk. This full moon was near perigee, the closest point in its elliptical orbit. It passed near the center of Earth's dark umbral shadow during the 90 minute long total eclipse phase. Faintly suffused with sunlight scattered by the atmosphere, the umbral shadow itself gave the eclipsed moon a reddened appearance and the very dramatic popular moniker of a Blood Moon.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Jewel on the Flower Moon",
        "url": "https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL1024.jpg"
      },
      {
        "copyright": "Michael Cain",
        "date": "2022-05-19",
        "explanation": "Recorded on May 15/16 this sequence of exposures follows the Full Moon during a total lunar eclipse as it arcs above treetops in the clearing skies of central Florida. A frame taken every 5 minutes by a digital camera shows the progression of the eclipse over three hours. The bright lunar disk grows dark and red as it glides through planet Earth's shadow. In fact, counting the central frames in the sequence measures the roughly 90 minute duration of the total phase of this eclipse. Around 270 BC, the Greek astronomer Aristarchus also measured the duration of total lunar eclipses, but probably without the benefit of digital watches and cameras. Still, using geometry he devised a simple and impressively accurate way to calculate the Moon's distance in terms of the radius of planet Earth, from the eclipse duration.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Digital Lunar Eclipse",
        "url": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg"
      },
      {
        "copyright": "Maxime Oudoux",
        "date": "2022-05-20",
        "explanation": "This serene sand and skyscape finds the Dune of Pilat on the coast of France still in Earth's shadow during the early morning hours of May 16. Extending into space, the planet's dark umbral shadow covered the Moon on that date. From that location the total phase of a lunar eclipse had begun before moonset. Still in sunlight though, the International Space Station crossed from the western horizon and Earth's largest artificial moon traced the bright flat arc through the sky over 400 km above. Simply constructed, the well-planned panoramic scene was captured over a 5 minutes in a series of consecutive images.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/eclipse-lune-2022.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A View from Earth's Shadow",
        "url": "https://apod.nasa.gov/apod/image/2205/eclipse-lune-2022c1024.jpg"
      },
      {
        "copyright": "Donald Waid",
        "date": "2022-05-21",
        "explanation": "Very faint planetary nebula Abell 7 is some 1,800 light-years distant, just south of Orion in planet Earth's skies in the constellation Lepus, The Hare. Surrounded by Milky Way stars and near the line-of-sight to distant background galaxies, its generally simple spherical shape, about 8 light-years in diameter, is outlined in this deep telescopic image. Within its confines are beautiful, more complex details enhanced by the use of narrowband filters. Emission from hydrogen is shown in reddish hues with oxygen emission mapped to green and blue colors, giving Abell 7 a natural appearance that would otherwise be much too faint to be appreciated by eye. A planetary nebula represents a very brief final phase in stellar evolution that our own Sun will experience 5 billion years hence, as the nebula's central, once sun-like star shrugs off its outer layers. Abell 7 itself is estimated to be 20,000 years old. Its central star is seen here as a fading white dwarf some 10 billion years old.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/Abell_7-2022-02-20-HOO-1600.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Planetary Nebula Abell 7",
        "url": "https://apod.nasa.gov/apod/image/2205/Abell_7-2022-02-20-HOO-1024.jpg"
      },
      {
        "date": "2022-05-22",
        "explanation": "Tsunamis this large don't happen on Earth.  During 2006, a large solar flare from an Earth-sized sunspot produced a tsunami-type shock wave that was spectacular even for the Sun.  Pictured here, the tsunami wave was captured moving out from active region AR 10930 by the Optical Solar Patrol Network (OSPAN) telescope in New Mexico, USA.  The resulting shock wave, known technically as a Moreton wave, compressed and heated up gasses including hydrogen in the photosphere of the Sun, causing a momentarily brighter glow.  The featured image was taken in a very specific red color emitted exclusively by hydrogen gas.  The rampaging tsunami took out some active filaments on the Sun, although many re-established themselves later.  The solar tsunami spread at nearly one million kilometers per hour, and circled the entire Sun in a matter of minutes.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/SunTsunami_nso_900.gif",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Large Tsunami Shock Wave on the Sun",
        "url": "https://apod.nasa.gov/apod/image/2205/SunTsunami_nso_900.gif"
      },
      {
        "date": "2022-05-23",
        "explanation": "This picture of Andromeda shows not only where stars are now, but where stars will soon be. Of course, the big, beautiful Andromeda Galaxy, M31, is a spiral galaxy -- and a mere 2.5 million light-years away.  Both space-based and ground-based observatories have been here combined to produce this intriguing composite image of Andromeda, at wavelengths both inside and outside normally visible light. The visible light shows where M31's stars are now -- as highlighted in white and blue hues and imaged by the Hubble, Subaru, and Mayall telescopes.  The infrared light shows where M31's future stars will soon form -- as highlighted in orange hues and imaged by NASA's Spitzer Space Telescope.  The infrared light tracks enormous lanes of dust, warmed by stars, sweeping along Andromeda's spiral arms.  This dust is a tracer of the galaxy's vast interstellar gas -- the raw material for future star formation.  These new stars will likely form over the next hundred million years, surely well before Andromeda merges with our Milky Way Galaxy in about 5 billion years.",
        "hdurl": "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_2000.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "The Once and Future Stars of Andromeda",
        "url": "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_960.jpg"
      }
    ]);
    console.log(apods);
//    const apiKey = 'A3sumYKTb72gWZ2K9RcwfMo73LRjtIJy9fO579RE';
//    const currentDate = new Date();

//    currentDate.setDate(currentDate.getDate() - 7);

//    const lastWeek = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
//    console.log(lastWeek)
/*
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
*/
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
