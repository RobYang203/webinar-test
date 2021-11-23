import { checkUserLoginAction } from 'actions/creators/auth';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLoginAction());
  }, []);

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
