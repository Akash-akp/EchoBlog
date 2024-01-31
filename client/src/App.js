import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import FormUI from './Pages/FormUI';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      {/* Browser Routes from react-router-dom for routing */}
      <BrowserRouter>
        <Header /> {/* Nav Bar */}

        {/* Routes listed */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/sign-in' element={<FormUI />} />
          <Route path='/sign-up' element={<FormUI />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
        <Footer /> {/* Footer Section */}
      </BrowserRouter>
    </div>
  );
}

export default App;
