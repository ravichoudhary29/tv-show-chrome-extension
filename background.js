chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "Test Context Menu 1",
        id: "contextMenu1",
        contexts: ["page", "selection"],
    });

    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event);
        chrome.tabs.create({
            url: "https://www.imdb.com/chart/toptv/",
        });
    });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    console.log(sender);
    sendResponse("recieved message from background.");
    chrome.tabs.sendMessage(sender.tab.id, "Got your message from background");
});
