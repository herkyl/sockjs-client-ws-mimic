sockjs-client-ws-mimic
======================

Extension of the sockjs-client-ws module that mimics the SockJS client's API

Why mimic?
==========

I needed a way to build both the JavaScript client library and a node library for Mocha testing. Using this you can simply change the included library and everything works.

Why sockjs-client-ws?
=====================

sockjs-client-ws is the only Node Sock.js library that I found reliable (some I couldn't get to work at all, some didn't work well with multiple clients on one machine).
