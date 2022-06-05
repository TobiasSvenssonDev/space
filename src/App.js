import NasaApodAPI from "./NasaApodAPI";
import 'react-tippy/dist/tippy.css';

function App() {

  return (<>
    <header className="header">
      <h1 >APOD</h1>
      <p >Delivering the last seven days of Nasa: Astronomy Picture Of the Day</p>
    </header>
    <main className="main">
      <NasaApodAPI />
    </main>
    <footer className="footer">
    ©Tobias Svensson
    </footer>
  </>
  );
}

export default App;
