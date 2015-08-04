// chrome.runtime.sendMessage({
//     from:    'content_scripts',
//     subject: 'showPageAction'
// });

// /* Listen for message from the popup */
// chrome.runtime.onMessage.addListener(function(msg, sender, response) {
//     /* First, validate the message's structure */
//     if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
//         /* Collect the necessary data */
//       //   chrome.tabs.query({currentWindow: true, active: true},  function(tabs){
//       //     var tabURL = tabs[0].url;
//       //     var newsArray = window.newsSites;
//       //     var str = 'The slant score is: ';
//       //     for(var i = 0; i < newsArray.length; i++){
//       //       if(newsArray[i]['url'] === tabURL){
//       //         var match = newsArray[i]['score'];
//       //       }
//       //     }
//       //     var message = str + '' + match;
//       //   }); // end of tabs query
        // var domInfo = {
        //     inputs:  6
        // };
//         /* Directly respond to the sender (popup), 
//          * through the specified callback */
        // response(domInfo);
//           
        
//     }
// });
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
    chrome.tabs.query({currentWindow: true, active: true},  function(tabs){
      var tabURL = tabs[0].url;
      getURL(tabURL);
  });
  
});
    return true;
});


