import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceBook"/>

```ts title="/src/main.ts"
class AttendanceBook extends Book {

    
    public getSheet(sheetName: string) {
        const sheet = this.book.getSheetByName(sheetName);
        return new AttendanceSheet(sheet);
    }
}
```