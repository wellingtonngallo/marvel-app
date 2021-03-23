import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SeriesList } from '../pages/SeriesList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/series/:id" exact component={SeriesList} />
  </Switch>
)

export default Routes;