import { React } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import LinkInput from './LinkInput';
import LinkComponent from './LinkComponent';

function LinkContainer() {
  const bookmarkObj = useSelector((state) => state.bookmark.bookmarks);
  // console.log(bookmarkObj);
  // const bookmarkList = Object.entries(bookmarkObj);
  // const listItems = [];

  // for (let x = 0; x < bookmarkList.length; x += 1) {
  //   listItems.push(
  //     <LinkComponent
  //       linkName={bookmarkList[x][0]}
  //       linkURL={bookmarkList[x][1]}
  //       key={uuidv4()}
  //     />,
  //   );
  // }

  const listItems = bookmarkObj.map((bookmark) => (
    <LinkComponent
      linkName={bookmark.linkName}
      linkURL={bookmark.linkURL}
      linkID={bookmark.linkID}
      key={bookmark.linkID}
    />
  ));

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
