import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from 'src/components/atoms'

const LoadingWrapper = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #222;
  opacity: 0.7;
  z-index: 100;
`
const LoadingInner = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Loading = (): JSX.Element => {
  return (
    <LoadingWrapper>
      <LoadingInner>
        <CircularProgress />
      </LoadingInner>
    </LoadingWrapper>
  )
}
