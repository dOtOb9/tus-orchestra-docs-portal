import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='Member' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class Member {
    public readonly attendanceStatus: AttendanceStatus;
    public readonly id: string;
    public readonly name: string;
    public readonly part: string;
    public readonly grade: string;

    constructor(id: string, name: string = "", part: string = "", grade: string = "") {
        this.id = id;
        this.name = name;
        this.part = part;
        this.grade = grade;
        this.attendanceStatus = new AttendanceStatus(id);
    }

    public addContactList() {
        const membersInfoSheet = new AdminBook().getMembersInfoSheet();

        membersInfoSheet.addContactList(this.id);
    }

    public edit() {
        const displayName = `=HYPERLINK("https://discord.com/users/${this.id}", "${this.name}")`;

        const memberRow = [displayName, this.id, this.part, this.grade];

        const memberInfoSheet = new AdminBook().getMembersInfoSheet();

        memberInfoSheet.editMember(memberRow);

        const stringsAttendanceBook = new StringsAttendanceBook();
        const tuttiAttendanceBook = new TuttiAttendanceBook();

        [stringsAttendanceBook, tuttiAttendanceBook].forEach(book => {
            ['前曲', '中曲', 'メイン１', `メイン２`, 'メイン３', 'メイン４'].forEach(tuneName => {
                const attendanceSheet = book.getSheet(tuneName);

                attendanceSheet.editMember(memberRow);
            })
        })
    }
}
```