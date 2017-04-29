import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Heading } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 70px;
`

const StyledImage = styled.img`
  height: ${props => props.size}
  margin-top: 30px;
`

const Banner = ({ image, size }) => (
  <Wrapper>
    <Heading header="Gaming & Utility MicroApps" />
    <StyledImage src={image} size={size} />
  </Wrapper>
)

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Banner.defaultProps = {
  size: '400px',
}

export default Banner
