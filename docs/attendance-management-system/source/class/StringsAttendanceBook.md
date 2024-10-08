import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='StringsAttendanceBook' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class NormalAttendanceBook extends AttendanceBook {

    constructor() {
        super("stringsAttendanceBookID");
    }
}
```