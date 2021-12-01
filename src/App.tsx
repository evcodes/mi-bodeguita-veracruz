import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import awsconfig from "./aws-exports";
import AppContainer from "./components/AppContainer";

Amplify.configure(awsconfig);

function App() {

  return (
    <div>
      <AppContainer />
    </div>
  );
}

export default withAuthenticator(App);
