import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { publicRoutes } from "Routes";
import NotFound from "Screens/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
            key={index}
          />
        ))}
        <Route exact component={NotFound} key="404" />
      </Switch>
    </Router>
  );
}

export default App;
