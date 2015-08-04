var views = chrome.extension.getViews({type: "popup"});
  for (var i = 0; i < views.length; i++) {
    views[i].document.getElementById('score').innerHTML="The slant score is: 61";
}

