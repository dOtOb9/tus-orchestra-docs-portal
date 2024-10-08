import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='TuttiAttendanceBook' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class TuttiAttendanceBook extends AttendanceBook {

    constructor() {
        super("tuttiAttendanceBookID");
    }
}
```