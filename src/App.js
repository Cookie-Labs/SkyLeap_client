import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import GlobalStyle from '@styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/do-hyeon';
import '@fontsource/shrikhand'; // title TODO: refactoring 필요
import '@fontsource/roboto-condensed'; // subtitle
import Page404 from '@pages/page404/Page404';
import NFTRafflesPage from '@pages/NFTRafflesPage/NFTRafflesPage';
import RaffleDetailPage from '@pages/raffleDetailPage/RaffleDetailPage';
import RealAssetsRafflesPage from '@pages/realAssetsRafflesPage/RealAssetsRafflesPage';
import RealAssetsDetailPage from '@pages/realAssetsDetailPage/RealAssetsDetailPage';
import CreateNewRafflePage from '@pages/createNewRafflePage/CreateNewRafflePage';
import MyPage from '@pages/myPage/MyPage';
import CreateNewNFTPage from '@pages/createNewNFTPage/CreateNewNFTPage';
import MobilePage from './MobilePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <MobileView>
        <MobilePage />
      </MobileView>
      <BrowserView>
        <Routes>
          <Route path="/" element={<NFTRafflesPage />} />
          <Route path="/raffleDetail" element={<RaffleDetailPage />} />
          <Route
            path="/realAssetsRaffles"
            element={<RealAssetsRafflesPage />}
          />
          <Route path="/realAssetsDetail" element={<RealAssetsDetailPage />} />
          <Route path="/createRaffle" element={<CreateNewRafflePage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/createNFT" element={<CreateNewNFTPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserView>
    </>
  );
}

export default App;
