import './App.css';

// import Component
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superhero from './components/Superhero';
// End Import Component
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='MyBG'>
        <NavigationBar/>
        <Intro/>
        
      </div>
      {/* End Intro */}

      <div className='trending'>
        <Trending />
      </div>
      <div className='superhero'>
        <Superhero />
      </div>
    </div>
  );
}

export default App;
