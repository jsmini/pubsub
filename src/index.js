import { isObject, isFunction } from '@jsmini/is';

import { EventEmitter } from '@jsmini/event';

export function PubSub() {
    this.ec = new EventEmitter();
}
PubSub.prototype.subscribe = function (channel, callback) {
    this.ec.addEventListener(channel, callback);

    return {channel, callback}
}

PubSub.prototype.unsubscribe = function (channel, callback) {
    if (isObject(channel) && !isFunction(callback)) {
        callback = channel.callback;
        channel = channel.channel;
    }

    if (isFunction(callback)) {
        this.ec.removeListener(channel, callback);

    } else {
        this.ec.removeAllListeners(channel);
    }
}

PubSub.prototype.publish = function (channel, ...args) {
    this.ec.emit(channel,  ...args);
}

PubSub.prototype.sub = PubSub.prototype.subscribe;
PubSub.prototype.unsub = PubSub.prototype.unsubscribe;
PubSub.prototype.pub = PubSub.prototype.publish;

const pb = new PubSub();

export function subscribe(channel, callback) {
    return pb.subscribe(channel, callback);
}

export function unsubscribe(channel, callback) {
    return pb.unsubscribe(channel, callback);
}

export function publish(channel, ...args) {
    return pb.publish(channel, ...args);
}

export function sub(channel, callback) {
    return pb.sub(channel, callback);
}
export function unsub(channel, callback) {
    return pb.unsub(channel, callback);
}
export function pub(channel, ...args) {
    return pb.pub(channel, callback);
}
