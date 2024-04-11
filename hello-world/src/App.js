import './App.css';
import './styles.css';
import Gallery from './Gallery';
import Portrait from './Portrait';
import { useState } from 'react';


function App() {
  const [galleryView, setGalleryView] = useState(true);
  const [idNum, setIdNum] = useState(-1);

  function switchView(event) {
    setGalleryView(!galleryView);
    setIdNum(event.currentTarget.id);
  }

  if (galleryView) {
    return (
      <div className="App">
        <Gallery onclick={switchView}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Portrait onclick={switchView} idNum={idNum}/>
      </div>
    );
  }
  
}

export default App;
