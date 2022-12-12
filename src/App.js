import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import MainPage from '@pages/MainPage';
import SearchPage from '@pages/SearchPage';
import SearchPage2 from '@pages/SearchPage2';
import HospitalDetailPage from '@pages/HospitalDetailPage';
import CommunityPage from '@pages/CommunityPage';
import CalendarPage from '@pages/CalendarPage';
import MyPage from '@pages/MyPage';
import StorePage from '@pages/StorePage';
import NotificationPage from '@pages/NotificationPage';
import CartPage from '@pages/CartPage';
import SettingsPage from '@pages/SettingsPage';
import LoginPage from '@components/pages/LoginPage';
import '@fontsource/gowun-dodum';
import '@fontsource/shrikhand'; // title TODO: refactoring 필요
import '@fontsource/roboto-condensed'; // subtitle

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search2" element={<SearchPage2 />} />
        <Route path="/detail" element={<HospitalDetailPage/>}/>
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
