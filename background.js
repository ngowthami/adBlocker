var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      return {cancel: enabled}; 
    },
    {urls: 
      ["*://*.doubleclick.net/*",
      "*://*.doubleverify.*/*",
      "*://*.googleadservices.com/*",
      "*://*.googlesyndication.com/*",
      "*://*.moat.com/*",
      "*://*.lb.usemaxserver.de/*",
      "*://*.tracking.klickthru.com/*",
      "*://*.zmedia.com/*",
      "*://*.zv1.november-lax.com/*",
      "*://*.ero-advertising.com/*",
      "*://*.appier.net/*"]
    },
    ["blocking"]
  );
  