import { Container } from "react-bootstrap";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome.js";
import { Row, Col } from "react-bootstrap";
import AdminLogin from "./screens/admin/adminlogin";
import adminHome from "./screens/admin/adminHome";
import applynew from "./screens/customers/applynew";
import CustLogin from "./screens/customers/Custlogin";
import CustHome from "./screens/customers/CustHome";
import CustRegs from "./screens/customers/CustomerRegister.js";
import Approve from "./screens/admin/Approve";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const marginTop = {
    marginTop: "30px",
  };
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12} style={marginTop}></Col>
          <Switch>
            <Route path="/adminlogin" exact component={AdminLogin} />

            
            <Route path="/approve" exact component={Approve}/>
            <Route path="/adminhome" exact component={adminHome} />
            <Route path="/applynew" exact component={applynew}/>
            <Route path="/" exact component={Welcome} />
            <Route path="/custlogin" exact component={CustLogin} />
            <Route path="/custRegister" exact component={CustRegs} />
            <Route path="/custhome" exact component={CustHome} />
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
