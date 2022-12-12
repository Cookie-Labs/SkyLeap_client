import React from 'react';
import SearchLayout from '@components/articles/SearchLayout';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { APP_HEADER_H, APP_BOTTOM_H} from '@constants/styleConst';
// https://developers.kakao.com/console/app/836767/config/platform 도메인 변경 사이트

const SearchPage = () => {
  return (
    <SearchLayout>
      <Map
        center={{ lat: 37.45521946671777, lng: 127.13388036866858  }}
        level={3}
        style={{ width: '100%', height: `calc(100vh - ${APP_HEADER_H} - ${APP_BOTTOM_H})` }}
      >
        <MapMarker
          position={{ lat: 37.45521946671777, lng: 127.13388036866858  }}
        >
          <div style={{fontWeight: '700', color: 'red', padding: '0 0 0 50px'}}>cocone</div>
        </MapMarker>
      </Map>
    </SearchLayout>
  );
};

export default SearchPage;
