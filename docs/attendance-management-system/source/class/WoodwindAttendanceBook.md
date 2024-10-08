import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='WoodwindAttendanceBook' type='class' project='attendance-management-system' />

---

```ts title='/src/main.ts'
class WoodwindAttendanceBook extends AttendanceBook {

    constructor() {
        super("woodwindAttendanceBookID");
    }
}
```