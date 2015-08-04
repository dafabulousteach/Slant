var getURL = function(tabURL){
  var newsArray = window.newsSites;
  var str = 'The slant score of this news site is: ';
  for(var i = 0; i < newsArray.length; i++){
    if(newsArray[i]['url'] === tabURL){
     var match = newsArray[i]['score'];
    }
  }
  var message = str + '' + match;
  alert(message);
};


chrome.browserAction.onClicked.addListener(function(tab){

  chrome.tabs.query({currentWindow: true, active: true},  function(tabs){
    var tabURL = tabs[0].url;
    getURL(tabURL);
  // var newURL = "/popups/index.html";
  // chrome.tabs.create({ url: newURL});
  // });

});

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log('Extension is working');
    return true;
});