let n = 0;

chrome.tabs.query({}, function(tabs) { 
    n = tabs.length;
    
    const openedTabs =  tabs.slice(0, 5).map((x) => {
        return x.title;
    })

    let openedTabsString = JSON.stringify(openedTabs);
    chrome.storage.sync.set({ n });
    chrome.storage.sync.set({ openedTabsString });
});
