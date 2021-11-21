import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={MainLayout} />
      </Switch>
      <LoadingMask />
    </div>
  );
}

export default App;
