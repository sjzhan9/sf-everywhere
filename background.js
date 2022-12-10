let isOn = false;

//update all tabs
chrome.tabs.query({ currentWindow: true }, function (tabs) {
  for (tab of tabs) {
    if (tab.url) {
      let id = tab.id;
      updateTab(id);
    }
  }
});

//when new tab activated, check isOn to toggle the change
chrome.tabs.onActivated.addListener(function (info) {
  chrome.tabs.query({ active: true }, function (tabs) {
    let id = tabs[0].id;
    updateTab(id);
  });
});

//on new tab visit and refreshed check state
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  console.log("tab " + tabId + " updated");
  if (tab.url) {
    if (info.status === "complete") {
      updateTab(tabId);
    }
  }
});

function updateTab(id) {
  if (!isOn) {
    turnOff();
    chrome.tabs.sendMessage(id, {
      message: "turnOff",
    });
  } else {
    turnOn();
    chrome.tabs.sendMessage(id, {
      message: "turnOn",
    });
  }
}

//when clicked, send message to toggle the current page and update isOn
chrome.action.onClicked.addListener(function (tab) {
  let id = tab.id;
  if (!isOn) {
    turnOn();
    chrome.tabs.sendMessage(id, {
      message: "turnOn",
    });
    console.log("sent message to turn on");
  } else {
    turnOff();
    chrome.tabs.sendMessage(id, {
      message: "turnOff",
    });
    console.log("sent message to turn off");
  }
});

function turnOn() {
  isOn = true;
  chrome.action.setTitle({ title: "SF ON" }, function () {
    updateOnIcon();
  });
}

function turnOff() {
  isOn = false;
  chrome.action.setTitle({ title: "SF OFF" }, function () {
    updateOffIcon();
  });
}

function updateOnIcon() {
  chrome.action.setIcon({
    path: "on-icon.png",
  });
}

function updateOffIcon() {
  chrome.action.setIcon({
    path: "off-icon.png",
  });
}
