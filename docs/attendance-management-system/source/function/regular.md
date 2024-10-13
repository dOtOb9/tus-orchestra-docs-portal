
```ts title="/src/main.ts"
function regular() {
    const adminAcrivtyBook = new AdminActivityBook();
    const scheduleSheet = adminAcrivtyBook.getScheduleSheet();
    
    const today = new Today();
    
    if (scheduleSheet.isActivityDate(today)){
        // 午前0時なら出欠列を生成
        scheduleSheet.setActivityDate();
        if (today.date.getHours() === 0) {

            const membersInfoSheet = adminAcrivtyBook.getMembersInfoSheet();

            // 欠席と降り番の入力をする
            scheduleSheet.beginActivityDate(today, membersInfoSheet);
        }
    
        // 認証コードを置き換える
        const systemBook = new SystemBook();
        const attendanceCodeSheet = systemBook.getAttendanceCodeSheet();
    
        attendanceCodeSheet.replaceCode();
    }

    const stringsAttendanceBook = new StringsAttendanceBook();
    const tuttiAttendanceBook = new TuttiAttendanceBook();

    ['前曲', '中曲', 'メイン１', 'メイン２', 'メイン３', 'メイン４'].forEach((sheetName)=> {

        const stringsAttendanceSheet = stringsAttendanceBook.getSheet(sheetName);
        const tuttiAttendanceSheet = tuttiAttendanceBook.getSheet(sheetName);

        [stringsAttendanceSheet, tuttiAttendanceSheet].forEach((sheet)=>{
            sheet.sortClear();
        });
    });
}
```