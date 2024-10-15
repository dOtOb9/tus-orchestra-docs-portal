import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AdminBook' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AdminBook extends Book {
    constructor() {
        super("adminBookID");
    }

    public getScheduleSheet() {
        const sheet = this.getSheetByName("練習予定");
        
        return new ScheduleSheet(sheet);
    }

    public getMembersInfoSheet() {
        const sheet = this.getSheetByName("乗り番");

        return new MembersInfoSheet(sheet);
    }

    public getAttendanceCodeSheet() {
        const sheet = this.getSheetByName("認証コード");

        return new AttendanceCodeSheet(sheet);
    }
}
```