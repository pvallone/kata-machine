export default class ArrayList<T> {
    // the number of elements in the list
    // _arr[length] is the position that the next element should be added to
    // _arr[length - 1] is the position of the last element in the list
    public length: number;
    private _arr: T[];

    constructor(size: number) {
        this.length = 0;
        this._arr = new Array(size);
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    ensureCapacity(): void {
        if (this.length == this._arr.length) {
            this.resize(this._arr.length * 2);
        }
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);

        for (var i = 0; i < this.length; i++) {
            temp[i] = this._arr[i];
        }

        this._arr = temp;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }

        this.ensureCapacity();
        // free up _arr[idx] by shifting everything currently at _arr[idx] to the right one place
        for (var i = this.length; i > idx; i--) {
            this._arr[i] = this._arr[i - 1];
        }
        this._arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        var foundItem = false;
        var foundIndex = -1;

        for (var i = 0; i < this.length; i++) {
            if (this._arr[i] == item) {
                foundItem = true;
                foundIndex = i;
                break;
            }
        }

        if (!foundItem) {
            return undefined;
        }

        return this.removeAt(foundIndex);
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        return this._arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        var item = this._arr[idx];
        // left-shift every element into this spot
        for (var i = idx; i < this.length - 1; i++) {
            this._arr[i] = this._arr[i + 1];
        }

        this.length--;
        if (this.length == this._arr.length / 4) {
            this.resize(this._arr.length / 2);
        }
        return item;
    }
}