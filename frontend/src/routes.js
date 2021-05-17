import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Lista from "./pages/Lista";

import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

export default function Routes() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/busca" exact component={Busca} />
        <Route path="/lista" exact component={Lista} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
