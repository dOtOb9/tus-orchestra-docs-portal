import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/TuttiAttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/TuttiAttendanceBook"/>

```ts title="/src/main.ts"
class TuttiAttendanceBook extends AttendanceBook {

    constructor() {
        super("tuttiAttendanceBookID");
    }
}
```