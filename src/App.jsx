import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
// ... other imports

function App() {
  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {/* Other routes */}
  </Routes>
</BrowserRouter>

  );
}

export default App;
