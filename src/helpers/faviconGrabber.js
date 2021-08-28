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
    // const firstPeriod = link.indexOf('.');
    const lastPeriod = link.lastIndexOf('.');
    const endOfLink = link.indexOf('/', lastPeriod);
    if (endOfLink !== -1) {
      return `${link.substr(0, endOfLink)}/favicon.ico`;
    }
    return `${newLink}/favicon.ico`;
  } catch (e) {
    return false;
  }
};

const getFormattedURL = (link) => {
  let newLink = link;
  newLink = getFaviconURL(link);
  newLink = link.substr(0, link.indexOf('/favicon.ico'));
  return newLink;
};

export { getFaviconURL, getFormattedURL };
