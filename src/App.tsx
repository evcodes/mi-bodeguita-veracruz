import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import awsconfig from "./aws-exports";
import AppContainer from "./components/AppContainer";
import Map from './components/Facility/Map'
import { Route, Routes } from "react-router";
import HomeMenu from "./components/HomeMenu";

Amplify.configure(awsconfig);

function App() {

  return (
    <div className = "app-container">
      <HomeMenu/>


    <Routes>
      <Route path = "/" element = {<AppContainer/>}/>
      <Route path = "/mapa" element = {<Map/>}/>
      <Route path = "/comunicacion" element = {<Map/>}/>
      <Route path = "/documentos" element = {<Map/>}/>
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
