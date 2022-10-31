import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerWrapper>Banner</BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  background: #1a2238;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 20px 0;
  border-radius: 7px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Banner