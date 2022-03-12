import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Home from './layouts/Home';
import  Movies from './layouts/Movies';
function App() {

  return <div className="App">

        <BrowserRouter>

        <Routes>
        <Route  path="/" exact  element={<Home />} >       
        </Route>
         <Route path="/movies" exact element={< Movies />}>
        </Route>   
        <Route path="/series" exact element={< Movies />}>
        </Route>  
        <Route path="*" exact element={<Home />}>
        </Route>  
        </Routes>
        </BrowserRouter>


    </div>;
}

export default App;



