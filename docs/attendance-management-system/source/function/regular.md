
```ts title="/src/main.ts"
function regular() {
    const adminAcrivtyBook = new AdminBook();
    const scheduleSheet = adminAcrivtyBook.getScheduleSheet();
    
    const today = new Today();
    
    if (scheduleSheet.isActivityDate(today)){
        // 午前0時なら出欠列を生成
        if (today.date.getHours() === 0) {
            scheduleSheet.setActivityDate();

            const membersInfoSheet = adminAcrivtyBook.getMembersInfoSheet();

            // 欠席と降り番の入力をする
            scheduleSheet.beginActivityDate(today, membersInfoSheet);
        }
    
        // 認証コードを置き換える
        const adminBook = new AdminBook();
        const attendanceCodeSheet = adminBook.getAttendanceCodeSheet();
    
        attendanceCodeSheet.replaceCode();
    }

    // 列のソートの初期化
    [
        new TuttiAttendanceBook(),
        new StringsAttendanceBook(),
        new WoodwindAttendanceBook(),
        new BrassAttendanceBook(),
        new PercussionAttendanceBook()

    ].forEach((book) => {

        ['前曲', '中曲', 'メイン１', 'メイン２', 'メイン３', 'メイン４'].forEach((sheetName)=> {

            const AttendanceSheet = book.getSheet(sheetName);

            AttendanceSheet.sortClear();
        });
    });
}
```