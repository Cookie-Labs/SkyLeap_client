import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Anchor from '@atoms/Anchor';
import roadmapImg from '@assets/image/landing_roadmap.svg';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #e6e6e6;
`;

const RoadmapImg = styled('img')`
  width: 80vw;
`;

const RoadmapArea = forwardRef((props, ref) => {
  return (
    <Container>
      <Anchor ref={ref} />
      <RoadmapImg src={roadmapImg} alt="landing_roadmap" />
    </Container>
  );
});

export default RoadmapArea;
