import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/Book"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Book"/>

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