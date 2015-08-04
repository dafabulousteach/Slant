var getURL = function(tabURL){
  var newsArray = window.newsSites;
  var str = 'The slant score is: ';
  for(var i = 0; i < newsArray.length; i++){
    if(newsArray[i]['url'] === tabURL){
     var match = newsArray[i]['score'];
    }
  }
  var message = str + '' + match;
  return message;
};


chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log('Extension is working');
chrome.browserAction.onClicked.addListener(function(tab){
	console.log('I heard a click at runtime');
  chrome.tabs.query({currentWindow: true, active: true},  function(tabs){
    var tabURL = tabs[0].url;
    getURL(tabURL);
  });
  
});

    return true;
});

// var port = chrome.runtime.connect({name:"mycontentscript"});
// port.onMessage.addListener(function(message,sender){
//   if(message.greeting === "hello"){
//     alert(message.greeting);
//   }
// });

