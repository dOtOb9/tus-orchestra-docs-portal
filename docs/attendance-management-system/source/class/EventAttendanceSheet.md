

```ts title="/src/main.ts"
class EventAttendanceSheet extends AttendanceSheet {
    public getEventDate(date: string): number {
        return this.data[1].indexOf(date);
    }
}
```