chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({
        shows: [],
    });
    chrome.contextMenus.create({
        title: "Test Context Menu 1",
        id: "contextMenu1",
        contexts: ["page", "selection"],
    });

    chrome.contextMenus.onClicked.addListener((event) => {
        fetch(`http://api.tvmaze.com/search/shows?q=${event.selectionText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                chrome.storage.local.set({
                    shows: data,
                });
            });
    });
});
