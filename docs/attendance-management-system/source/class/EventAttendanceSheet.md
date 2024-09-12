import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/EventAttendanceSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/EventAttendanceSheet"/>

```ts title="/src/main.ts"
class EventAttendanceSheet extends AttendanceSheet {
    public getEventDate(date: string): number {
        return this.data[1].indexOf(date);
    }
}
```