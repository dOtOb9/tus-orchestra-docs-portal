import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/Book"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Book"/>

```ts title="/src/main.ts"
class Member {
    attendanceStatus: AttendanceStatus;
    readonly id: string;
    readonly name: string;
    readonly part: string;
    readonly grade: string;

    constructor(id: string, name: string = "", part: string = "", grade: string = "") {
        this.id = id;
        this.name = name;
        this.part = part;
        this.grade = grade;
        this.attendanceStatus = new AttendanceStatus(id);
    }

    public addContactList() {
        const membersInfoSheet = new AdminActivityBook().getMembersInfoSheet();

        membersInfoSheet.addContactList(this.id);
    }

    public edit() {
        const displayName = `=HYPERLINK("https://discord.com/users/${this.id}", "${this.name}")`;

        const memberRow = [displayName, this.id, this.part, this.grade];

        const memberInfoSheet = new AdminActivityBook().getMembersInfoSheet();

        memberInfoSheet.editMember(memberRow);

        const normalAttendanceBook = new NormalAttendanceBook();
        const tuttiAttendanceBook = new TuttiAttendanceBook();

        [normalAttendanceBook, tuttiAttendanceBook].forEach(book => {
            ['前曲', '中曲', 'メイン曲'].forEach(section => {
                const attendanceSheet = book.getSheet(section);

                attendanceSheet.editMember(memberRow);
            })
        })
    }
}
```