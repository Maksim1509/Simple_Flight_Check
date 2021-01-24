import * as icons from '../components/icons/Icons';
import Calendar from '../components/Calendar';
import FlightList from '../components/FlightList';
import Favorites from '../components/Favorites';

const Main = () => (
  <div className="container">
    <div className="main-page">
      <header className='header'>
        <div className="header-route">
          Вылеты {icons.vector} SVO - JFK
        </div>
        <Calendar />
      </header>
      <main>
        <div className="carousel">
          <img className="carousel-img" src="./img1.png" alt="ny"/>
          <img className="carousel-img" src="./img2.png" alt="ny"/>
          <img className="carousel-img" src="./img3.png" alt="ny"/>
          <img className="carousel-img"src="./img1.png" alt="ny"/>
        </div>
        <Favorites />
        <section className="flights-container">
          <FlightList />
        </section>
      </main>
    </div>
  </div>
);

export default Main;
