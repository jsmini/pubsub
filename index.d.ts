export as namespace jsminiPubsub;

export declare class PubSub {
    subscribe(channel: string, callback: Function): object;
    unsubscribe(channel: string, callback: Function): void;
    publish(channel:string, ...args: Array<any>): void;
    sub(channel: string, callback: Function): object;
    unsub(channel: string, callback: Function): void;
    pub(channel:string, ...args: Array<any>): void;
}

export function subscribe(channel: string, callback: Function): object;
export function unsubscribe(channel: string, callback: Function): void;
export function publish(channel:string, ...args: Array<any>): void;
export function sub(channel: string, callback: Function): object;
export function unsub(channel: string, callback: Function): void;
export function pub(channel:string, ...args: Array<any>): void;
