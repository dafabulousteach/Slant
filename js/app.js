var getScore = function(){
  chrome.tabs.query({'active':true, currentWindow: true}, function(tab){
    var tabUrl = tabs[0].url;
    console.log('The URL path is: ', tabUrl);
  });
    
};

chrome.browserAction.onClicked.addListener(function(tab){
   getScore();
});


