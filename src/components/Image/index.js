import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from 'components/Spinner';

class DynamicImage extends Component {
  static propTypes = {
    url: PropTypes.string,
    fill: PropTypes.bool,
    className: PropTypes.string,
    alt: PropTypes.string,
  }

  static defaultProps = {
    fill: false,
    alt: 'Dynamically sized image with no alt set',
  }

  initialState = {
    isLoading: true,
    naturalHeight: null,
    naturalWidth: null,
    wasError: false,
  }

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = this.initialState;
  }

  componentWillReceiveProps(nextProps) {
    const { url } = this.state;

    if (nextProps.url !== url) {
      this.setState(this.initialState);
    }
  }

  isTallerThanWider = () => this.state.naturalHeight > this.state.naturalWidth
  findImageDimensions = (imageEl) => ([
    imageEl.naturalHeight,
    imageEl.naturalWidth,
  ]) 

  handleImageLoaded = (event) => {
    const naturalDimensions = this.findImageDimensions(event.target);
  
    this.setState({
      naturalHeight: naturalDimensions[0],
      naturalWidth: naturalDimensions[1],
      isLoading: false,
    })
  }

  handleImageError = () => {
    this.setState({
      wasError: true,
    });
  }

  render() {
    const { className, url, fill, alt } = this.props;
    const { isTallerThanWider, isLoading, wasError } = this.state;
    console.log(this.state);

    return (
      <DecorativeContainer className={className}>
        <CenteringContainer>
          {isLoading && <Spinner />}
          {wasError && <span>Error</span>}
          <img
            ref={this.imageRef}
            src={url}
            onLoad={this.handleImageLoaded}   
            onError={this.handleImageError}
            style={{
              height: (isTallerThanWider || fill) ? '100%' : 'auto',
              width: (isTallerThanWider || fill) ? 'auto' : '100%',
              display: (isLoading) ? 'none' : null,
            }}
            alt={alt}
          />
        </CenteringContainer>
      </DecorativeContainer>
    );
  }
}

const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DecorativeContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default DynamicImage;
