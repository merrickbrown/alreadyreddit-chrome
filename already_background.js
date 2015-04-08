chrome.runtime.onMessage.addListener(
    function(message, sender) {
        chrome.history.getVisits({url: sender.tab.url},
            function(visits) {
                if (visits.length > 1) {
                   chrome.tabs.sendMessage(sender.tab.id, visits[visits.length-2].visitTime );
                }
            }
        );
    }
);