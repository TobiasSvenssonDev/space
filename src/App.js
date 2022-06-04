import NasaApodAPI from "./NasaApodAPI";
import 'react-tippy/dist/tippy.css';

function App() {

  return (<>
    <header className="header">
      <h1 id="brand">NASA APOD</h1>
    </header>
    <main className="main">
      <NasaApodAPI />
    </main>
    <footer className="footer">
      SIDFOT
    </footer>
  </>
  );
}

export default App;
