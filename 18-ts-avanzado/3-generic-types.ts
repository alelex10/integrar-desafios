interface DateType<T> {
    ttl: number;
    value: T;
}
class CacheDate {
    private cache: DateType<any>[] = [];
    
    public set<T>(value: T, ttl: number): void {
        let currentTime = Date.now();
        const dateType: DateType<T> = {
            ttl : currentTime + ttl,
            value
        };
        this.cache.push(dateType);
    }
    public get(): any[] {
        this.cleanup();
        return this.cache.map(item => item.value);
    }
    public cleanup(): void {
        let currentTime = Date.now();
        this.cache = this.cache.filter(item => item.ttl > currentTime);
    }
}