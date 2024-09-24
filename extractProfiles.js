(() => {
    console.log('Extracting profile URLs from My Network page');
  
    // Locate all the profile links in the "People You May Know" section
    const profileLinkElements = document.querySelectorAll('a[href*="/in/"]');
  
    // Extract the href attribute from the anchor tags
    const profileLinks = [...profileLinkElements].map(el => el.href);
  
    // Log the extracted links for debugging
    console.log('Profile links extracted:', profileLinks);
  
    // Return only the first 3 profile links (you can adjust the limit)
    return profileLinks.slice(0, 3); // Returning 3 links to scrape
  })();
  