import GlobalStyle from '@styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/do-hyeon';
import '@fontsource/shrikhand'; // title TODO: refactoring 필요
import '@fontsource/roboto-condensed'; // subtitle
// import Page404 from '@pages/page404/Page404';
import NFTRafflesPage from '@pages/NFTRafflesPage/NFTRafflesPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<NFTRafflesPage />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </>
  );
}

export default App;
