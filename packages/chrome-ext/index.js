const counter = document.getElementById('counter');

chrome.runtime.onmessage.addEventListener(msg => {
    switch (msg.key) {
        case 'errorImgNumber': {
            counter.innerText = `Images without alt: ${msg.payload}`;
        }
    }
});

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    chrome.tabs.sendMessage([tabs[0].id, { key: 'popoverOpen' }]);
});
