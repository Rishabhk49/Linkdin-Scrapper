(async () => {
  console.log('Scraping LinkedIn profile:', window.location.href);

  const name = document.querySelector('.text-heading-xlarge')?.innerText || 'N/A';
  const about = document.querySelector('.pv-about-section')?.innerText || 'N/A';
  const bio = document.querySelector('.pv-text-details__left-panel')?.innerText || 'N/A';
  const location = document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText || 'N/A';
  const followerCount = parseInt(document.querySelector('.pv-recent-activity-section__follower-count')?.innerText.replace(/\D/g, '')) || 0;
  const connectionCount = parseInt(document.querySelector('.t-black--light')?.innerText.replace(/\D/g, '')) || 0;
  const bioLine = document.querySelector('.text-body-medium')?.innerText || 'N/A';

  const profileData = {
    name,
    about,
    bio,
    location,
    followerCount,
    connectionCount,
    bioLine,
    url: window.location.href,
  };

  console.log('Scraped profile data:', profileData);
  return profileData;
})();
// (async () => {
//   console.log('Scraping LinkedIn profile:', window.location.href);

//   // Fetch the name
//   const name = document.querySelector('.text-heading-xlarge')?.innerText || 'N/A';

//   // Fetch the About section
//   const about = document.querySelector('.pv-about-section')?.innerText || 'N/A';

//   // Fetch the bio
//   const bio = document.querySelector('.pv-text-details__left-panel')?.innerText || 'N/A';

//   // Fetch location
//   const location = document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText || 'N/A';

//   // Fetch connection count
//   const connectionCountText = document.querySelector('.pv-text-details__left-panel span.t-bold')?.innerText || 'N/A';
//   const connectionCount = connectionCountText.includes('500+') ? 500 : parseInt(connectionCountText.replace(/\D/g, ''));

//   // Fetch follower count
//   const followerCountText = document.querySelector('.pv-text-details__left-panel span.t-bold:nth-child(2)')?.innerText || 'N/A';
//   const followerCount = parseInt(followerCountText.replace(/\D/g, '')) || 0;

//   // Prepare the profile data object
//   const profileData = {
//       name,
//       about,
//       bio,
//       location,
//       followerCount,
//       connectionCount,
//       url: window.location.href,
//   };

//   console.log('Scraped profile data:', profileData);
//   return profileData;
// })();
