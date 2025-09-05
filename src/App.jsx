import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> if you have one */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
