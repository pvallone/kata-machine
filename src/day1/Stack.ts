export default class Stack<T> {
    public length: number;
    private a: T[];
    private initialCapacity: 8;

    constructor()
    {
        this.length = 0;
        this.a = new Array(this.initialCapacity);
    }

    push(item: T): void
    {
        if (this.length == this.a.length)
        {
            this.resize(this.a.length * 2);
        }

        this.a[this.length++] = item;
    }

    pop(): T | undefined
    {
        if (this.length == 0)
        {
            return undefined;
        }

        // todo: size down
        var item = this.a[this.length - 1];
        this.length--;

        if (this.length > 0 && this.length == (this.a.length / 4))
        {
            this.resize(this.a.length / 2);
        }

        return item;
    }

    peek(): T | undefined
    {
        if (this.length == 0)
        {
            return undefined;
        }

        return this.a[this.length - 1];
    }

    resize(capacity: number)
    {
        // assert: capacity > a.length 
        var temp = new Array(capacity);
        for (var i = 0; i < this.a.length; i++)
        {
            temp[i] = this.a[i];
        }

        this.a = temp;
    }
}