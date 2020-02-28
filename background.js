let isOn = false;

//make updates
//update all tabs
chrome.tabs.query({"currentWindow": true}, function (tabs) {
    for (tab of tabs) {
        if (tab.url) {
            let id = tab.id;
            updateTab(id);
        }
    }
})

//when new tab activated, check isOn to toggle the change
chrome.tabs.onActivated.addListener(function (info) {
    chrome.tabs.query({"active": true}, function (tabs) {
        let id = tabs[0].id;
        updateTab(id);
    })
})

//on new tab visit and refreshed check state
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tabId + "tab updated");
            if (tab.url) {
                updateTab(tabId);
            }
})

function updateTab(id){
    if (!isOn) {
        turnOff();
        chrome.tabs.sendMessage(id, 'turnOff');
    } else {
        turnOn();
        chrome.tabs.sendMessage(id, 'turnOn');
    }
}

//when clicked, send message to toggle the current page and update isOn
chrome.browserAction.onClicked.addListener(function (tab) {
    let id = tab.id;
    if (!isOn) {
        turnOn();
        chrome.tabs.sendMessage(id, 'turnOn');
    } else {
        turnOff();
        chrome.tabs.sendMessage(id, 'turnOff');
    }
})

function turnOn(){
    isOn = true;
    chrome.browserAction.setTitle({title: 'SF ON'}, function(){
        updateOnIcon();
    })
}

function turnOff(){
    isOn = false;
    chrome.browserAction.setTitle({title: 'SF OFF'}, function(){
        updateOffIcon();
    })
}

function updateOnIcon(){
    if(isDarkModeEnabled() == false){
        chrome.browserAction.setIcon({
            path: "on-icon.png"
          });
    }else{
        chrome.browserAction.setIcon({
            path: "on-icon-dark.png"
          });
    }
}

function updateOffIcon(){
    if(isDarkModeEnabled() == false){
        chrome.browserAction.setIcon({
            path: "off-icon.png"
          });
    }else{
        chrome.browserAction.setIcon({
            path: "off-icon-dark.png"
          });
    }
}

//check darkmode update everytime switch tab and 500ms 
function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

let lastDarkModeStatus = isDarkModeEnabled();

setInterval(function(){

    if (lastDarkModeStatus !== isDarkModeEnabled()){
        //make update
        if (!isOn) {
            updateOffIcon()
        } else {
            updateOnIcon()
        }
        //update state
        lastDarkModeStatus = isDarkModeEnabled();
    };
    }, 500);
