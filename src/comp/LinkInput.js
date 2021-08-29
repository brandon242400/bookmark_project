import { React, useState, createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/reducers/bookmarkSlice';
import { getFormattedURL } from '../helpers/faviconGrabber';

function LinkInput() {
  const [inputName, setInputName] = useState('');
  const [inputLink, setInputLink] = useState('');
  const dispatch = useDispatch();
  const inputRef = createRef();

  function handleNameInputChange(e) {
    const { value } = e.target;
    setInputName(value);
  }

  function handleLinkInputChange(e) {
    const { value } = e.target;
    setInputLink(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputName || !inputLink) {
      setInputName('Please fill both parameters');
      setInputLink('');
      inputRef.current.focus();
      return;
    }
    console.log(getFormattedURL(inputLink));
    dispatch(addBookmark(inputName, getFormattedURL(inputLink)));
    setInputName('');
    setInputLink('');
    inputRef.current.focus();
  }

  return (
    <div className="link-input-container">
      <form onSubmit={handleSubmit}>
        <input
          className="link-input"
          type="text"
          value={inputName}
          onChange={handleNameInputChange}
          ref={inputRef}
          placeholder="Name"
        />
        <br />
        <input
          className="link-input"
          type="text"
          value={inputLink}
          onChange={handleLinkInputChange}
          placeholder="URL"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default LinkInput;
