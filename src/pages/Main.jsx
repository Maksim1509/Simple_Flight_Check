import React from 'react';
import * as icons from '../components/icons/Icons';
import Calendar from '../components/Calendar/Calendar';
import FlightList from '../components/FlightList/FlightList';
import Favorites from '../components/Favorites/Favorites';
import Logout from '../components/Logout/Logout';
import Carousel from '../components/Carousel/Carousel';
import './main-page.scss';

const Main = () => (
  <div className="main-page">
    <div className="main-page-content">
      <div className="main-page-logout">
        <Logout />
      </div>
      <header className="header">
        <div className="header-route">
          Вылеты
          {icons.vector}
          SVO - JFK
        </div>
        <Calendar />
      </header>
      <main>
        <Carousel />
        <Favorites />
        <section className="flights-container">
          <FlightList />
        </section>
      </main>
    </div>
  </div>
);

export default Main;
