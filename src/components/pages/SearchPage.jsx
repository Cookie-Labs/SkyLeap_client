import React from 'react';
import styled from 'styled-components';
import Layout from '@components/articles/Layout';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
// https://developers.kakao.com/console/app/836767/config/platform 도메인 변경 사이트

const MarkerContent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-self: center;
`

const SearchPage = () => {
  return (
    <Layout>
      <Map
        center={{ lat: 37.450335635829795, lng: 127.13015347950571 }}
        level={3}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker
          position={{ lat: 37.450335635829795, lng: 127.13015347950571 }}
        >
          <MarkerContent>cocasdf</MarkerContent>
        </MapMarker>
      </Map>
    </Layout>
  );
};

export default SearchPage;
