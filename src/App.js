import { checkUserLoginAction } from 'actions/creators/auth';
import { authEmailLoginResult } from 'apis/auth';
import { deleteFavouritedResult, insertFavouriteResult } from 'apis/favourited';
import { getPostsResult, insertPostResult } from 'apis/post';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLoginAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
