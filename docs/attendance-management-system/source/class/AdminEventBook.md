

```ts title="/src/main.ts"
class AdminEventBook extends Book {
    readonly adminEventSheet: AdminEventSheet;
    readonly eventAttendanceSheet: EventAttendanceSheet;

    constructor() {
        super("adminEventBookID");

        this.adminEventSheet = new AdminEventSheet(this.book.getSheetByName("管理用"));
        this.eventAttendanceSheet = new EventAttendanceSheet(this.book.getSheetByName("出欠表"));
    }

    public setEventInfo() {
        const settingDate = this.adminEventSheet.getSettingDate();

        const EventDateColNumber = this.eventAttendanceSheet.getEventDate(settingDate);

        this.adminEventSheet.setAttendaneSummarize(EventDateColNumber);
    }
}
```