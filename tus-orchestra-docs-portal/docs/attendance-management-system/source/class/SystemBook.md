import FeatureLink from '/src/components/FeatureLink';
import ReferenceLink from '/src/components/ReferenceLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/SystemBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/SystemBook"/>

```ts title="/src/main.ts"
class SystemBook extends Book {
    constructor() {
        super("systemBookID");
    }

    public getAttendanceCodeSheet() {
        const sheet = this.book.getSheetByName("認証コード");

        return new AttendanceCodeSheet(sheet);
    }

    public getUserInfoSheet() {
        const sheet = this.book.getSheetByName("ユーザー情報");

        return new UserInfoSheet(sheet);
    }
}
```