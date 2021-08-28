import { React } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import LinkInput from './link-input';
import LinkComponent from './link-component';

function LinkContainer() {
  const bookmarkObj = useSelector((state) => state.bookmark.bookmarks);
  // const bookmarkList = Object.entries(props.bookmarks);
  const bookmarkList = Object.entries(bookmarkObj);
  const listItems = [];

  for (let x = 0; x < bookmarkList.length; x += 1) {
    listItems.push(
      <LinkComponent
        linkName={bookmarkList[x][0]}
        linkURL={bookmarkList[x][1]}
        key={uuidv4()}
      />,
    );
  }

  return (
    <div className="link-container">
      <LinkInput />
      <div className="link-container-links">
        {listItems}
      </div>
    </div>
  );
}

export default LinkContainer;
