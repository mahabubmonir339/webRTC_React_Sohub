import './App.css'
import Footer from './page-1/Shared/Footer';
import Navbar from './page-1/Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './page-1/Home/Home';
import Click_To_Call_Button from './page-1/Click_To_Call_Button';
import About from './page-1/About/About';
import CreateWidget from './page-1/CreateWidget';
import Widget_Integration from './page-1/Widget_Integration';
import Backup from './page-1/Backup';
import Ruf from './page-1/Ruf';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path="click_to_call_button" element={<Click_To_Call_Button />} />
          <Route path="/" element={<Click_To_Call_Button />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="create_widget" element={<CreateWidget />} />
          <Route path="widget_integration" element={<Widget_Integration />} />
          <Route path="backup" element={<Backup />} />
          <Route path="ruf" element={<Ruf />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App;
