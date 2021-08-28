import { React } from 'react';
import LinkInput from './link-input';
import LinkComponent from './link-component';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
// import {  } from '../redux/reducers/bookmarkSlice';


function LinkContainer(props) {
  const bookmarkObj = useSelector(state => state.bookmark.bookmarks);
  // const bookmarkList = Object.entries(props.bookmarks);
  const bookmarkList = Object.entries(bookmarkObj);
  let listItems = [];

  for (let x=0; x<bookmarkList.length; x++) {
    listItems.push(
      <LinkComponent 
        linkName={bookmarkList[x][0]} 
        linkURL={bookmarkList[x][1]} 
        key={uuidv4()}
        removeBookmark={props.removeBookmark}
      />
    );
  }

  return (
    <div className='link-container'>
      <LinkInput 
        // addBookmark={props.addBookmark} 
        // clearSavedData={props.clearSavedData}
      />
      <div className='link-container-links'>
        {listItems}
      </div>
    </div>
  );
}

export default LinkContainer;