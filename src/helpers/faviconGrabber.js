/** Returns Favicon URL if one exists. Otherwise returns false */
const getFaviconURL = (link) => {
  let newLink = link;
  if (link.includes('.')) {
    if (link.indexOf('.') === link.lastIndexOf('.')) {
      newLink = `www.${link}`;
    }
  }
  if (!link.includes('https://') && !link.includes('http://')) {
    newLink = `https://${link}`;
  }

  try {
    const lastPeriod = link.lastIndexOf('.');
    const endOfLink = link.indexOf('/', lastPeriod);
    if (endOfLink !== -1) {
      return `${link.substr(0, endOfLink)}/favicon.ico`;
    }
    return `${newLink}/favicon.ico`;
  } catch (e) {
    return '';
  }
};

/** Formats some incomplete URLs. i.e. google.com ---> https://www.google.com */
const getFormattedURL = (link) => {
  let newLink = link;
  if (link.includes('.')) {
    if (link.indexOf('.') === link.lastIndexOf('.')) {
      newLink = `www.${link}`;
    }
  }
  if (!link.includes('https://') && !link.includes('http://')) {
    newLink = `https://${newLink}`;
  }
  return newLink;
};

export { getFaviconURL, getFormattedURL };
