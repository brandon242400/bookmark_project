/** Returns Favicon URL if one exists. Otherwise returns false */
const getFaviconURL = link => {
  if (link.includes('.')) {
    if (link.indexOf('.') === link.lastIndexOf('.')) {
      link = 'www.' + link;
    }
  }
  if (!link.includes('https://') && !link.includes('http://')) {
    link = 'https://' + link;
  }

  try {
    // const firstPeriod = link.indexOf('.');
    const lastPeriod = link.lastIndexOf('.');
    const endOfLink = link.indexOf('/', lastPeriod);
    if (endOfLink !== -1) {
      return link.substr(0, endOfLink) + '/favicon.ico';
    }
    return link += '/favicon.ico';
  } catch (e) {
    return false;
  }
}

const getFormattedURL = link => {
  link = getFaviconURL(link);
  link = link.substr(0, link.indexOf('/favicon.ico'));
  return link;
}

export { getFaviconURL, getFormattedURL };