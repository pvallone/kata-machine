export default class ArrayList<T> {
    public length: number; // arr[this.length] is where the next element to append goes. arr[this.length - 1] is the last element in the list
    private arr: T[];

    constructor(capacity: number) {
        this.arr = new Array(capacity);
        this.length = 0;
    }

    prepend(item: T): void {
        this.ensureCapacity();

        for (var i = this.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[0] = item;
        this.length++;
    }

    ensureCapacity(): void {
        if (this.length == this.arr.length) {
            this.resize(this.arr.length * 2);
        }
    }

    resize(capacity: number): void {
        var temp = new Array(capacity);
        
        for (var i = 0 ; i < this.length; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) {
            return;
        }

        this.ensureCapacity();

        for(var i = this.length; i > idx; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        this.ensureCapacity();
        this.arr[this.length++] = item;
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
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.arr.length) {
            return undefined;
        }

        var item = this.arr[idx];

        for (var i = idx; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.length--;

        if (this.length > 0 && this.length == this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }

        return item;
    }
}