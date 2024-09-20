import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import DefaultLayout from './layout/DefaultLayout';
import CreateQuiz from './pages/Create-Quiz/page';
import SignIn from './pages/Authentication/SignIn';
import QuizListing from './pages/Quiz-Listing/page';
import UpdateQuiz from './pages/Update/[id]/page';
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
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin " />
            <SignIn />
          </>
        }
      />
      <Route
        path="/quiz-listing"
        element={
          <>
            <PageTitle title="Listing Of Quiz " />
            <PrivateRoute>
            <DefaultLayout>
              <QuizListing />
            </DefaultLayout>
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/update-quiz/:id"
        element={
          <>
            <PageTitle title="Update Quiz" />
            <PrivateRoute>
            <DefaultLayout>
              <UpdateQuiz />
            </DefaultLayout>
            </PrivateRoute>
          </>
        }
      />
    </Routes>
  );
}

export default App;
