export default class ArrayList<T> {
    public length: number; // length - 1 is where the last element is
    private arr: T[];

    constructor(size: number) {
        this.arr = new Array(size);
        this.length = 0;
    }

    prepend(item: T): void {
        // resize if necessary
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        // shift everything to the right 1 spot, then add to spot at index zero
        for (var i = this.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[0] = item;
        this.length++;
    }

    resize(capacity: number) : void {
        var temp = new Array(capacity);
        for(var i = 0; i < this.length; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
    }

    insertAt(item: T, idx: number): void {
        // todo: test with 0 and length
        if (idx > this.length) {
            return undefined;
        }

        // resize if necessary
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        // move everything to the right 1 spot, then insert at index

        for (var i = this.length; i > idx; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        // resize if necessary
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        this.arr[this.length++] = item;
    }

    remove(item: T): T | undefined {

        // remove the element and then... shift everything to the right of it left one?
        var itemIndex = undefined;
        var foundItem = undefined;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == item) {
                itemIndex = i;
                foundItem = this.arr[i];
                break;
            }
        }

        if (itemIndex == undefined) {
            return undefined;
        }
        

        for (var j = itemIndex; j < this.arr.length - 1; j++) {
            this.arr[j] = this.arr[j + 1];
        }

        this.length--;
        if (this.length > 0 && this.length == this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }
        return foundItem;

    }

    get(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }

        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }

        var item = this.arr[idx];
        for (var i = idx; i < this.arr.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.length--;
        if (this.length > 0 && this.length == this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }

        return item;
    }
}