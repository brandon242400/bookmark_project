import React from 'react';
import Link from '@material-ui/core/Link';
import { getFaviconURL } from '../helpers/faviconGrabber';
import { useDispatch } from 'react-redux';
import { removeBookmark } from '../redux/reducers/bookmarkSlice';

function LinkComponent(props) {
  const [loadImage, setLoadImage] = React.useState(true);
  const dispatch = useDispatch();

  function handleDeleteClick(e) {
    e.preventDefault();
    dispatch(removeBookmark({name: props.linkName, URL: props.linkURL}));
  }

  let faviconImage = null;
  
  if (loadImage) {
    faviconImage = <img 
      onError={() => {
        // console.log('Error: ' + getFavicon());
        setLoadImage(false);
      }}
      src={getFaviconURL(props.linkURL)} 
      alt='nothing'
    ></img>;
  }

  return (
    <div 
      className='bookmark-item'
    >
      {faviconImage}
      <p className='bookmark-item-link'>
        <Link
          href={props.linkURL} 
          target='_blank'
          rel='noreferrer noopener'
        >
          {props.linkName}
        </Link>
      </p>
      {/* eslint-disable-next-line */}
      <a 
        className='bookmark-item-delete'
        href='#' 
        onClick={handleDeleteClick}
      >
        X
      </a>
    </div>
  );
}

export default LinkComponent;