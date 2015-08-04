chrome.runtime.onMessage.addListener(function(msg, sender){
  if((msg.from === 'content_scripts') && (msg.subject === 'showPageAction')){
      chrome.pageAction.show(sender.tab.id);
  }
});

