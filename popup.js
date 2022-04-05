let tabsNumber = document.getElementById("tabsNumber");
let openedTabs = document.getElementById("tabs-container");

chrome.storage.sync.get("n", (data) => {
    tabsNumber.innerText = data.n;
})

let tabsInnerHTML = "";

chrome.storage.sync.get("openedTabsString", (data) => {
    const tabs = JSON.parse(data.openedTabsString);
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        tabsInnerHTML += `<li class="tab-name">${element}</li>`
    }
    openedTabs.innerHTML = tabsInnerHTML + `<li class="tab-name">...</li>`;
})


  