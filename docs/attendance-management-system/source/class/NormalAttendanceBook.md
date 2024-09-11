import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/NormalAttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/NormalAttendanceBook"/>

```ts title="/src/main.ts"
class NormalAttendanceBook extends AttendanceBook {

    constructor() {
        super("normalAttendanceBookID");
    }
}
```