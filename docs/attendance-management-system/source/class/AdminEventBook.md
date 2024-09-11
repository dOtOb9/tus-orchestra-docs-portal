import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/AdminEventBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AdminEventBook"/>

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