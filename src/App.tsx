import { AppLayout } from '@/layouts/app.tsx';
import { Home } from '@/pages/home.tsx';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
