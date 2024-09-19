import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import CreateQuiz from './pages/Create-Quiz/page';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title="eCommerce Dashboard" />
            <PrivateRoute>
            <DefaultLayout>
              <ECommerce />
            </DefaultLayout>
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/create-quiz"
        element={
          <>
            <PageTitle title="Create Quiz" />
            <PrivateRoute>
            <DefaultLayout>
              <CreateQuiz />
            </DefaultLayout>
            </PrivateRoute>
            
          </>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <>
            <PageTitle title="Form Elements " />
            <DefaultLayout>
              <FormElements />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <>
            <PageTitle title="Form Layout " />
            <FormLayout />
          </>
        }
      />

      <Route
        path="/settings"
        element={
          <>
            <PageTitle title="Settings " />
            <Settings />
          </>
        }
      />

      <Route
        path="/ui/alerts"
        element={
          <>
            <PageTitle title="Alerts " />
            <Alerts />
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            <PageTitle title="Buttons " />
            <Buttons />
          </>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin " />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup " />
            <SignUp />
          </>
        }
      />
    </Routes>
  );
}

export default App;
