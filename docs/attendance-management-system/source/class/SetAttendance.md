import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='SetAttendance' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class SetAttendance {
    private member: Member;

    constructor(id: string) {
        this.member = new Member(id);
    }

    public start() {
        const scheduleSheet = new AdminActivityBook().getScheduleSheet();

        const nowTermRows = scheduleSheet.getNowTermRow();

        nowTermRows.forEach(row => {
            const attendanceSheet = row[2] === 'TRUE' ? new TuttiAttendanceBook().getSheet(row[3]) : new StringsAttendanceBook().getSheet(row[3]);

            attendanceSheet.setAttend(this.member.id, Number(row[4]));
        });
    }
}
```