import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='PercussionAttendanceBook' type='class' project='attendance-management-system' />

---

```ts title='/src/main.ts'
class PercussionAttendanceBook extends AttendanceBook {

    constructor() {
        super("percussionAttendanceBookID");
    }
}
```