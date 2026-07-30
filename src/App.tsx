import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Support } from './pages/Support';
import { UserAgreement } from './pages/UserAgreement';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="support" element={<Support />} />
          <Route path="user-agreement" element={<UserAgreement />} />
          <Route path="terms" element={<Navigate to="/user-agreement" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
