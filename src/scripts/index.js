export default class Emmiter {
    constructor() {
        this.store = {};
    }

    on(event, listener) {
        // If event Store don't exists, create it!
        if (!this.store[event]) {
            this.store[event] = new Set([listener]);
        } else {
            this.store[event].add(listener);
        }
    }

    off(event, listener) {
        // Verify if Event Store was created
        if (!this.store[event]) {
            throw new Error('Please verify if this listener was created before!');
        }

        // Erase all listener from event informed
        if (!listener) {
            this.store[event].clear();
        }

        // Verify if listener exists in Event Store
        if (!this.store[event].has(listener)) {
            throw new Error('Please verify if this listener was created before!');
        }

        return this.store[event].delete(listener);
    }

    once(event, listener) {
        // Wrapper listener to be called once
        const setListenerOnce = () => {
            const callListener = (...args) => {
                listener.call(null, ...args);
                this.off(event, callListener);
            };

            return callListener;
        }

        this.on(event, setListenerOnce());
    }

    dispatch(event, ...args) {
        if(event in this.store) {
            this.store[event].forEach(listener => listener.call(null, ...args));
        } else {
            throw new Error('Please insert a valid event!');
        }

    }
}
