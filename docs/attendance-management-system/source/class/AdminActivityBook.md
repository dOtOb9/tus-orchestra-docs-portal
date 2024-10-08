import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AdminActivityBook' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AdminActivityBook extends Book {
    constructor() {
        super("adminActivityBookID");
    }

    public getScheduleSheet() {
        const sheet = this.book.getSheetByName("練習予定");
        
        return new ScheduleSheet(sheet);
    }

    public getMembersInfoSheet() {
        const sheet = this.book.getSheetByName("乗り番");

        return new MembersInfoSheet(sheet);
    }
}
```