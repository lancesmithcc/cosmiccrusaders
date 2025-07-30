import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import CaretakersOfParadise from './components/CaretakersOfParadise';
import AngelsApprentice from './components/AngelsApprentice';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/caretakers-of-paradise",
    element: (
      <div className="App">
        <Header />
        <main>
          <CaretakersOfParadise />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/angels-apprentice",
    element: (
      <div className="App">
        <Header />
        <main>
          <AngelsApprentice />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="App">
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div className="App">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;