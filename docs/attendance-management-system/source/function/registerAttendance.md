import SourceLinks from '/src/components/pageLink/SourceLinks';

<SourceLinks component='registerAttendance' type='function' project='attendance-management-system' />

```ts title='/src/main.ts'
function registerAttendance(id: string) {
    new SetAttendance(id).start();
}
```