module.exports = (Franz, options) => {
    function getMessages() {
        var unread = 0;
        const flush = $('div.flush-button.active')[0];
        if (flush) {
            const res = flush.textContent.match(/(\d+) 件の新しいアクティビティ/);
            if(res) {
                unread = res[1];
            }
        }
        const notify = parseInt($('div.globalNotifications_count')[0].textContent)
        Franz.setBadge(notify, unread);
    }

    Franz.loop(getMessages);
}
