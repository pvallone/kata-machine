export default class Stack<T> {
    public length: number;
    private arr: T[];
    private INITIAL_CAPACITY: number = 8;

    constructor() {
        this.length = 0;
        this.arr = new Array(this.INITIAL_CAPACITY);
    }

    push(item: T): void {
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        this.arr[this.length++] = item;
    }

    pop(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }

        var item = this.arr[this.length - 1];
        this.length--;

        if (this.length == this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }

        return item;
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);

        for (var i = 0; i < this.length; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
    }

    peek(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }

        return this.arr[this.length - 1];
    }
}