// Define ListNode without exporting it, keeping it private to the module
class ListNode<T> {
    public next: ListNode<T> | null;
    public prev: ListNode<T> | null;
    public val: T;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    // sentinel invariants:
    // in an empty list, _sentinel.next = _sentinel.prev = _sentinel
    // if there are elements in the list, _sentinel.next points to the front of the list, and _sentinel.prev points
    // to the end of the list
    private _sentinel: ListNode<T>;

    constructor() {
        this._sentinel = new ListNode<T>(null as any);
        this._sentinel.next = this._sentinel;
        this._sentinel.prev = this._sentinel;
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }

        var node = new ListNode(item);

        // special case adding at the end for performance
        if (idx == this.length) {
            var temp = this._sentinel.prev;
            temp!.next = node;
            node.prev = temp;
            this._sentinel.prev = node;
            node.next = this._sentinel;
            this.length++;
            return;
        }

        var cursor = this._sentinel.next;
        for (var i = 0; i < idx; i++) {
            cursor = cursor!.next;
        }

        node.prev = cursor!.prev;
        cursor!.prev!.next = node;
        node.next = cursor;
        cursor!.prev = node;

        this.length++;
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        var found = false;
        var foundIndex = -1;

        var cursor = this._sentinel.next;
        for (var i = 0; i < this.length; i++) {
            if (cursor!.val == item) {
                found = true;
                foundIndex = i;
                break;
            }
            cursor = cursor!.next;
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

        var cursor = this._sentinel.next;
        for (var i = 0; i < idx; i++) {
            cursor = cursor!.next;
        }

        return cursor!.val;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        var item = null;
        var cursor = this._sentinel.next;
        for (var i = 0; i < idx; i++) {
            cursor = cursor!.next;
        }

        item = cursor!.val;
        cursor!.prev!.next = cursor!.next;
        cursor!.next!.prev = cursor!.prev;
        this.length--;
        return item;
    }
}
