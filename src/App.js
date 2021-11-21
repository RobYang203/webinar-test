import LoadingMask from 'components/LoadingMask';
import BlankLayout from 'layouts/BlankLayout';
import MainLayout from 'layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Switch>
          <Route path='/app' component={MainLayout} />
          <Route path='/' component={BlankLayout} />
        </Switch>
      </MainLayout>
      <LoadingMask />
    </div>
  );
}

export default App;
