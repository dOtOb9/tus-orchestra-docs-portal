import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='doGet' type='function' project='attendance-management-system' />

---

```ts title="/src/main.ts"
function doGet(e) {
    const mode = e.parameter.mode;

    let response_text: string;

    switch (mode) {
        case 'dashboard':
            const stringsAttendanceBook = new StringsAttendanceBook();
            const tuttiAttendanceBook = new TuttiAttendanceBook();


            const member = new Member(e.parameter.id);

            const stringsAttendRateStatus = member.attendanceStatus.getAttendRateStatus(stringsAttendanceBook);
            const tuttiAttendRateStatus = member.attendanceStatus.getAttendRateStatus(tuttiAttendanceBook);
            
            const dashboardHtml = HtmlService.createTemplateFromFile('src/views/dashboard');

            dashboardHtml.attendanceNormalOverture = stringsAttendRateStatus.overture.rate;
            dashboardHtml.attendanceNormalMiddle = stringsAttendRateStatus.middle.rate;
            dashboardHtml.attendanceNormalMain1 = stringsAttendRateStatus.main1.rate;
            dashboardHtml.attendanceNormalMain2 = stringsAttendRateStatus.main2.rate;
            dashboardHtml.attendanceNormalMain3 = stringsAttendRateStatus.main3.rate;
            dashboardHtml.attendanceNormalMain4 = stringsAttendRateStatus.main4.rate;

            dashboardHtml.attendanceTuttiOverture = tuttiAttendRateStatus.overture.rate;
            dashboardHtml.attendanceTuttiMiddle = tuttiAttendRateStatus.middle.rate;
            dashboardHtml.attendanceTuttiMain1 = tuttiAttendRateStatus.main1.rate;
            dashboardHtml.attendanceTuttiMain2 = tuttiAttendRateStatus.main2.rate;
            dashboardHtml.attendanceTuttiMain3 = tuttiAttendRateStatus.main3.rate;
            dashboardHtml.attendanceTuttiMain4 = tuttiAttendRateStatus.main4.rate;

            dashboardHtml.cssContent = HtmlService.createHtmlOutputFromFile('src/views/dashboard-css').getContent();
            const dashboardHtmlOutput = dashboardHtml.evaluate();

            dashboardHtmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1')

            return dashboardHtmlOutput;

        case 'verify_attendance':
            const attendanceCodeSheet = new SystemBook().getAttendanceCodeSheet();

            const code = attendanceCodeSheet.getCode();

            const verifyAttendanceHtml = HtmlService.createTemplateFromFile('src/views/verify-attendance-form');

            verifyAttendanceHtml.env = {
                id: e.parameter.id,
                code: code
            }
            
            verifyAttendanceHtml.cssContent = HtmlService.createHtmlOutputFromFile('src/views/verify-attendance-form-css').getContent();
            const verifyAttendanceHtmlOutput = verifyAttendanceHtml.evaluate();

            verifyAttendanceHtmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1')

            return verifyAttendanceHtmlOutput;

        case 'user_data':
            const user = new Member(e.parameter.id);
            response_text = user.attendanceStatus.discordFormat();
            return ContentService.createTextOutput(response_text);

        case 'can_send_activity_dm':
            const sheet = new AdminActivityBook().getMembersInfoSheet();

            const contactListRows = sheet.getContactListRows();

            let memberList: string[] = [];

            if (e.parameter.type === 'custom') {
                memberList = sheet.getCustomMemberList();
            } else {

                let part: string[] = [];
    
                switch (e.parameter.section) {
                    case '弦楽器':
                        part = ['Vn', 'Va', 'Vc', 'Cb'];
                        break;
    
                    case '金管楽器':
                        part = ['Tp', 'Hr', 'Trb'];
                        break;
    
                    case '木管楽器':
                        part = ['Fl', 'Ob', 'Cl', 'Fg'];
                        break;
    
                    case '打楽器':
                        part = ['Perc'];
                        break;
    
                    case 'Tutti':
                        part = ['Vn', 'Va', 'Vc', 'Cb', 'Tp', 'Hr', 'Trb', 'Fl', 'Fg', 'Ob', 'Cl', 'Perc'];
                }
    
                contactListRows.forEach(row => {
                    if (part.includes(row[3])) {
                        memberList.push(row[2]);
                    }
                });
            }
            

            const json = {
                member_list: memberList
            };

            const response = JSON.stringify(json);
            
            return ContentService.createTextOutput(response);
    }
}
```