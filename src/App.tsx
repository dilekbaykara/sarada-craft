import './App.css';
import pic6 from "/Users/dilekbaykara/repos/sarada-craft/src/photos/pic-6.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         SARADA CRAFT
        </p>
       <div className='menu-bar'> SHOP ABOUT STOCKISTS</div>
      </header>
      <div className="description">
      Dedicated to making handcrafted old world soaps, salves, scrubs, and herbal supplements
      </div>
      <div className='photo-carousel'></div>
      <img src={pic6} alt="Image" />
    </div>

  );
}

export default App;
