import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import MainPage from '@pages/MainPage';
import '@fontsource/shrikhand'; // title TODO: refactoring 필요
import '@fontsource/roboto-condensed'; // subtitle
import '@fontsource/do-hyeon';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
