import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Logout from './Components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;