export default class Stack<T> {
    // length = top = pointer to top of stack, next place to drop our item
    // add new items at a[top], but check bounds first
    // a[top] doesn't have anything, a[top - 1] has the most recently added item
    public length: number;
    private a: T[];
    private INITIAL_CAPACITY: number = 8;
    

    constructor() {
        this.a = new Array(this.INITIAL_CAPACITY);
        this.length = 0;
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);
        for (var i = 0; i < this.length; i++) {
            temp[i] = this.a[i];
        }

        this.a = temp;
    }

    push(item: T): void {
        if (this.length == this.a.length - 1) {
            this.resize(this.a.length * 2);
        }

        this.a[this.length] = item;
        this.length = this.length + 1;
    }

    pop(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }

        var item = this.a[this.length - 1];
        this.length--;

        if (this.length > 0 && this.length == this.a.length / 4) {
            this.resize(this.a.length / 2);
        }

        return item;
    }

    peek(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }

        var item = this.a[this.length - 1];
        return item;
    }
}