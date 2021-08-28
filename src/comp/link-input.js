import { React, useState, createRef } from "react";
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/reducers/bookmarkSlice';
import { getFormattedURL } from '../helpers/faviconGrabber';
// import Button from "@material-ui/core/Button";

function LinkInput(props) {
  const [inputName, setInputName] = useState("");
  const [inputLink, setInputLink] = useState("");
  const dispatch = useDispatch();
  const inputRef = createRef();

  function handleNameInputChange(e) {
    const value = e.target.value;
    setInputName(value);
  }

  function handleLinkInputChange(e) {
    const value = e.target.value;
    setInputLink(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputName || !inputLink) {
      alert('Fill both the name and url of the site you want to bookmark');
      inputRef.current.focus();
      return;
    }
    dispatch(addBookmark({
      name: inputName,
      URL: getFormattedURL(inputLink)
    }));
    setInputName("");
    setInputLink("");
    inputRef.current.focus();
  }

  // function clearSavedData(e) {
  //   e.preventDefault();
  //   props.clearSavedData();
  // }

  return(
    <div className="link-input-container">
      <form onSubmit={handleSubmit}>
        <input 
          className="link-input"
          type='text'
          value={inputName}
          onChange={handleNameInputChange}
          ref={inputRef}
          autoFocus
          placeholder='Name'
        />
        <br/>
        <input 
          className="link-input"
          type='text'
          value={inputLink}
          onChange={handleLinkInputChange}
          placeholder='URL'
        />
        <br/>
        <input type='submit' value='submit' />
        {/* <input type='submit' value='clear' onClick={clearSavedData} /> */}
      </form>
    </div>
  );
}

export default LinkInput;