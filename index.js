var sock = require('sockjs-client-ws');

function SockJS(url) {
    this.onopen = function () {
        console.log('Mimic onopen');
    };
    this.onmessage = function () {
        console.log('Mimic onmessage');
    };
    this.onclose = function () {
        console.log('Mimic onclose');
    };

    var _this = this;
    setTimeout(function () {
        _this.client = sock.create(url);
        _this.client.on('connection', _this.onopen);
        _this.client.on('data', _this.onmessage);
        _this.client.on('error', _this.onclose);
        _this.send = _this.client.write.bind(_this.client);
    }, 0);
}

module.exports = SockJS;