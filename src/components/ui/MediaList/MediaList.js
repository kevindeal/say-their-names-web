import React from 'react';
import PropTypes from 'prop-types';
import Media from '../Media/Media';
import Container from '../../Container';
import StyledMediaList from './styles';

const MediaList = ({ mediaList }) => (
  <Container>
    <StyledMediaList>
      <h2>Media</h2>

      {mediaList.map((media) => (
        <Media key={media.url} media={media} />
      ))}
    </StyledMediaList>
  </Container>
);

export default MediaList;

MediaList.propTypes = {
  mediaList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  ).isRequired
};
