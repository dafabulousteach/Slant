var getURL = function(tabURL){
  var newsArray = window.newsSites;
  var str = 'The slant score is: ';
  for(var i = 0; i < newsArray.length; i++){
    if(newsArray[i]['url'] === tabURL){
     var match = newsArray[i]['score'];
    }
  }
  var message = str + '' + match;

  console.log(message);
};


chrome.browserAction.onClicked.addListener(function(tab){
  var newURL = "/popups/index.html";
  chrome.tabs.create({ url: newURL});

  // chrome.tabs.query({currentWindow: true, active: true},  function(tabs){
  //   var tabURL = tabs[0].url;
  //   getURL(tabURL);
  // });
});

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log('Extension is working');
    return true;
});