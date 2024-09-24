document.getElementById('startScraping').addEventListener('click', () => {
  console.log('Start Scraping button clicked');
  chrome.runtime.sendMessage({ action: 'startScraping' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else {
      console.log(response.status);
      document.getElementById('status').innerText = response.status;
    }
  });
});
