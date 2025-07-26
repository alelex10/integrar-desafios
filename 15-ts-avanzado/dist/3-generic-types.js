"use strict";
class CacheDate {
    cache = [];
    set(value, ttl) {
        let currentTime = Date.now();
        const dateType = {
            ttl: currentTime + ttl,
            value,
        };
        this.cache.push(dateType);
    }
    get() {
        this.cleanup();
        return this.cache.map((item) => item.value);
    }
    cleanup() {
        let currentTime = Date.now();
        this.cache = this.cache.filter((item) => item.ttl > currentTime);
    }
}
const cacheDate = new CacheDate();
cacheDate.set("hola", 100);
(async () => await new Promise((resolve) => setTimeout(resolve, 200)).then(() => console.log(cacheDate.get())))();
cacheDate.set(true, 200);
cacheDate.set(1000, 300);
cacheDate.set({ name: "haru", age: 20 }, 4000);
console.log(cacheDate.get());
