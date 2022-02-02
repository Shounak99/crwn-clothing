import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './pages/shop/shop.component';
function App() {
  return (
    <div>
      <BrowserRouter>
 
       <Route exact  path='/' component={HomePage}></Route>
       <Route path='/shop' component={Shop}></Route>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
