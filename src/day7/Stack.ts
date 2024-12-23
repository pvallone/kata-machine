export default class Stack<T> {
    public length: number;
    private arr: T[];
    private INITIAL_CAPACITY: number = 8;
    

    constructor() {
        this.arr = new Array(this.INITIAL_CAPACITY);
        this.length = 0;
    }

    push(item: T): void {
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        this.arr[this.length] = item;
        this.length++;
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);
        for(var i = 0; i < this.length; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
    }

    pop(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }
        // todo: size down
        var item = this.arr[this.length - 1];
        this.length--;
        return item;
    }

    peek(): T | undefined {
        return this.arr[this.length - 1];
    }
}