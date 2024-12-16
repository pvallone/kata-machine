export default class ArrayList<T> {
    public length: number;
    private a: T[];
    private INITIAL_CAPACITY: number = 8;

    constructor(capacity: number) {
        this.a = new Array(capacity);
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length == this.a.length - 1) {
            this.resize(this.a.length * 2);
        }

        for (var i = this.a.length; i > 0; i--) {
            this.a[i] = this.a[i - 1];
        }

        this.a[0] = item;
        this.length++;
    }

    // swap a[x] and a[y]
    swap(x: number, y: number) : void {
        // todo: assert x, y > 0 and < a.length - 1
        // todo: many callers of swap() should instead be shifting one spot to make room, to save time
        var temp = this.a[x];
        this.a[x] = this.a[y];
        this.a[y] = temp;
    }

    resize(capacity: number) : void {
        var temp = new Array(capacity);
        for (var i = 0; i < this.a.length; i++) {
            temp[i] = this.a[i];
        }

        this.a = temp;
    }

    insertAt(item: T, idx: number): void {
        if (this.length == this.a.length - 1) {
            this.resize(this.a.length * 2);
        }
        // todo: assert idx < length
        for (var i = idx; i < this.length - 1; i++) {
            this.swap(i, i + 1);
        }

        this.a[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length == this.a.length - 1) {
            this.resize(this.a.length * 2);
        }     
        
        this.a[this.length++] = item;
    }

    remove(item: T): T | undefined {
        for (var i = 0; i < this.length; i++) {
            if (this.a[i] == item) {
                var itemToReturn = this.a[i];
                // zero it out, decrement length, and shift everyone left
                for (var j = i; j < this.length - 1; j++) {
                    this.swap(j, j + 1);
                }
                this.length--;
                return itemToReturn;
            }
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }

        return this.a[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }

        var item = this.a[idx];

        for (var i = idx; i < this.length - 1; i++) {
            this.swap(i, i + 1);
        }
        this.length--;
        return item;
    }
}