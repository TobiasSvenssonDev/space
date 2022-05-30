import NasaApodAPI from "./NasaApodAPI";
import 'react-tippy/dist/tippy.css';


function App() {

  return (
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" >Navbar</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page" >Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Link</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <NasaApodAPI />        
      </main>
    </div>
  );
}

export default App;
