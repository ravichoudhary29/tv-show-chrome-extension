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

console.log("background script running.");
