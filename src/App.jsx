import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import NotFound from './components/common/NotFound';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:countryName" element={<CountryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;