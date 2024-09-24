chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startScraping') {
    // Hardcoded LinkedIn profile links (at least 3 links)
    const profileLinks = [
      "https://www.linkedin.com/in/ashish-tiwari-390714277/",
      "https://www.linkedin.com/in/mitanshi-b297a116a/",
      "https://www.linkedin.com/in/sradvpradeeprai/"
    ];

    profileLinks.forEach((link, index) => {
      setTimeout(() => {
        // Open each LinkedIn profile in a new tab (in background)
        chrome.tabs.create({ url: link, active: false }, (tab) => {
          // Inject the content script into the opened LinkedIn profile page
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.js']
          }, (results) => {
            // After scraping, send the scraped data to the backend
            const profileData = results[0].result;
            fetch('http://127.0.0.1:3000/api/profile', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(profileData)
            })
              .then(response => response.json())
              .then(result => console.log('Profile saved:', result))
              .catch(error => console.error('Error saving profile:', error));
          });
        });
      }, index * 5000); // Delay between opening profiles to avoid overwhelming the browser
    });

    sendResponse({ status: 'Scraping started' });
  }
});
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'startScraping') {
//     // Example array of LinkedIn profile links
//     const profileLinks = [
//       "https://linkedin.com/in/johndoe",
//       "https://www.linkedin.com/404/",
//       "https://www.linkedin.com/404/",
//       "https://www.linkedin.com/in/ashish-tiwari-390714277/",
//       "https://www.linkedin.com/in/mitanshi-b297a116a/",
//       "https://www.linkedin.com/in/sradvpradeeprai/",
//       "https://www.linkedin.com/in/ashish-tiwari-390714277/",
//       "https://www.linkedin.com/in/mitanshi-b297a116a/",
//       "https://www.linkedin.com/in/sradvpradeeprai/"
//     ];

//     // Step 1: Use reduce to filter out 404s and remove duplicates
//     const uniqueValidProfileLinks = profileLinks.reduce((acc, link) => {
//       // Skip 404 links and duplicates
//       if (!link.includes('404') && !acc.includes(link)) {
//         acc.push(link); // Add to the list if it's valid and unique
//       }
//       return acc;
//     }, []);

//     console.log('Filtered unique valid profile links:', uniqueValidProfileLinks);

//     // Step 2: Loop through each unique valid profile link and scrape data
//     uniqueValidProfileLinks.forEach((link, index) => {
//       setTimeout(() => {
//         // Open each LinkedIn profile in a new tab (in background)
//         chrome.tabs.create({ url: link, active: false }, (tab) => {
//           // Inject the content script into the opened LinkedIn profile page
//           chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ['contentScript.js']
//           }, (results) => {
//             // After scraping, send the scraped data to the backend
//             const profileData = results[0]?.result || null;
//             if (profileData) {
//               fetch('http://127.0.0.1:3000/api/profile', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(profileData)
//               })
//                 .then(response => response.json())
//                 .then(result => console.log('Profile saved:', result))
//                 .catch(error => console.error('Error saving profile:', error));
//             }
//           });
//         });
//       }, index * 5000); // Delay between opening profiles to avoid overwhelming the browser
//     });

//     sendResponse({ status: 'Scraping started' });
//   }
// });
