function onRequest(request, sender, sendResponse) {
  function do_the_redirect(where_to) {
    var up2 = new Object();
      up2.url = where_to;
      chrome.tabs.update(sender.tab.id, up2);
   };
};
chrome.extension.onRequest.addListener(onRequest);
