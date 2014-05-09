Install:
`npm install sockjs-client-ws-mimic`

# sockjs-client-ws-mimic

Drop in replacement for [sockjs-client](https://github.com/sockjs/sockjs-client "sockjs-client") for Node.js. Perfect for building both client and node.js tests with same client-side code.

### Why mimic?

I needed a way to build both the JavaScript client library and a Node.js library for testing. Using this you can simply change the included library and use same syntanx for testing and client APIs.

### Why extend [sockjs-client-ws](https://www.npmjs.org/package/sockjs-client-ws "sockjs-client-ws")?

* More reliable than [sockjs-client-node](https://www.npmjs.org/package/sockjs-client-node "sockjs-client-node") and [sockjs-client](https://www.npmjs.org/package/sockjs-client "sockjs-client") (same name as real sock.js client but not the same module) modules
* Supports multiple connections (perfect for testing)
