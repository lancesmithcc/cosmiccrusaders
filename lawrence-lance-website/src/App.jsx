import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import CaretakersOfParadise from './components/CaretakersOfParadise';
import AngelsApprentice from './components/AngelsApprentice';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

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
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;