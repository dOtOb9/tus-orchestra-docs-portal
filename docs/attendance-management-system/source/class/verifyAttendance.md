

```ts title="/src/main.ts"
class verifyAttendance {
    private member: Member;
    private code: string;

    constructor(code: string, id: string) {
        this.member = new Member(id);
        this.code = code;
    }

    public start(): string {
        const attendanceCodeSheet = new SystemBook().getAttendanceCodeSheet();
        if (!attendanceCodeSheet.isRightCode(this.code)) {
            return '入力コードが拒否されました。';
        }

        const scheduleSheet = new AdminActivityBook().getScheduleSheet();

        const nowTermRows = scheduleSheet.getNowTermRow();

        let attendanceFlag = false;
        nowTermRows.forEach(row => {
            const attendanceSheet = row[2] === 'TRUE' ? new TuttiAttendanceBook().getSheet(row[4]) : new NormalAttendanceBook().getSheet(row[4]);

            attendanceFlag = attendanceSheet.setAttend(this.member.id, Number(row[5]));
        });

        if (attendanceFlag) return '出席を確認しました。';
        else return `本日は練習日ではないか、既に入力されています。`;
    }
}
```