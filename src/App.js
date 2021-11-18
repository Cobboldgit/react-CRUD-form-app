
import "./App.css";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter, Route } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";

function App({getAllUsers}) {


  return (
    <BrowserRouter>
      <ProtectedRoute exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </BrowserRouter>
  )


}


export default App;
