import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='Today' type='class' project='attendance-management-system' />

```ts title="/src/main.ts"
class Today {
    public date: Date

    constructor () {
        this.date = new Date();
    }

    public toString(): string {
        return Utilities.formatDate(this.date, 'Asia/Tokyo', 'yyyy/MM/dd');
    }

    public getTimeArea(): string {
        return this.date.getHours() < 12 ? '午前' : '午後';
    }
}
```