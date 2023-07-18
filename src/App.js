import React from 'react';
import './App.css';
import { Header } from './features/header/header.js';
import { Banner } from './features/banner/banner';
import { Trend } from './features/trend/trend.js';
import { Footer } from './features/footer/footer';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <div className='APP'>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <Trend />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </Provider>
  );
}

export default App;
