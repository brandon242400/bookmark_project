import React from 'react';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFaviconURL } from '../helpers/faviconGrabber';
import { removeBookmark } from '../redux/reducers/bookmarkSlice';

function LinkComponent(props) {
  const [loadImage, setLoadImage] = React.useState(true);
  const { linkName, linkURL } = props;
  const dispatch = useDispatch();

  function handleDeleteClick(e) {
    e.preventDefault();
    dispatch(removeBookmark({ name: props.linkName, URL: props.linkURL }));
  }

  let faviconImage = null;

  if (loadImage) {
    faviconImage = (
      <img
        onError={() => {
          // eslint-disable-next-line no-console
          console.log(`Error: ${linkURL}`);
          setLoadImage(false);
        }}
        src={getFaviconURL(props.linkURL)}
        alt="nothing"
      />
    );
  }

  return (
    <div
      className="bookmark-item"
    >
      {faviconImage}
      <p className="bookmark-item-link">
        <Link
          href={linkURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          {linkName}
        </Link>
      </p>
      {/* eslint-disable-next-line */}
      <a 
        className="bookmark-item-delete"
        href="#"
        onClick={handleDeleteClick}
      >
        X
      </a>
    </div>
  );
}

LinkComponent.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default LinkComponent;
