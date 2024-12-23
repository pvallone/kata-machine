export default class ArrayList<T> {
    public length: number; // arr[length - 1] is last element in the list. list goes from [0, length - 1]
    private arr: T[];

    constructor(size: number) {
        this.arr = new Array(size);
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        // slide every element in the list right one place
        // do this starting from the empty spot at the end of the list
        for (var i = this.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[0] = item;
        this.length++;
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);
        for (var i = 0; i < this.length; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return undefined;
        }

        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        // shift everything to the right of idx one space to the right
        for (var i = this.length; i > idx; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }

        this.arr[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        var found = false;
        var foundIndex = -1;
        for (var i = 0; i < this.length; i++) {
            if (this.arr[i] == item) {
                found = true;
                foundIndex = i;
                break;
            }
        }

        if (!found) {
            return undefined;
        }

        return this.removeAt(foundIndex);
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
        // todo: size down
        var item = this.arr[idx];
        // shift everything to the right of idx left one, overwriting idx
        for (var i = idx; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.length--;
        if (this.length > 0 && this.length == this.arr.length/4) {
            this.resize(this.arr.length/2);
        }
        return item;

    }
}