import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SeriesList } from '../pages/CharacterSeriesList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/series/:id/:name" exact component={SeriesList} />
  </Switch>
)

export default Routes;