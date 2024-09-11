import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/function/doGet"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/doGet"/>

```ts title="/src/main.ts"
function doGet(e) {
    const mode = e.parameter.mode;

    let response_text: string;

    switch (mode) {
        case 'dashboard':
            const normalAttendanceBook = new NormalAttendanceBook();
            const tuttiAttendanceBook = new TuttiAttendanceBook();


            const member = new Member(e.parameter.id);

            const normalAttendRateStatus = member.attendanceStatus.getAttendRateStatus(normalAttendanceBook);
            const tuttiAttendRateStatus = member.attendanceStatus.getAttendRateStatus(tuttiAttendanceBook);
            
            const dashboardHtml = HtmlService.createTemplateFromFile('src/views/dashboard');

            dashboardHtml.attendanceNormalOverture = normalAttendRateStatus.overture.rate;
            dashboardHtml.attendanceNormalMiddle = normalAttendRateStatus.middle.rate;
            dashboardHtml.attendanceNormalMain = normalAttendRateStatus.main.rate;

            dashboardHtml.attendanceTuttiOverture = tuttiAttendRateStatus.overture.rate;
            dashboardHtml.attendanceTuttiMiddle = tuttiAttendRateStatus.middle.rate;
            dashboardHtml.attendanceTuttiMain = tuttiAttendRateStatus.main.rate;

            dashboardHtml.cssContent = HtmlService.createHtmlOutputFromFile('src/views/dashboard-css').getContent();
            const dashboardHtmlOutput = dashboardHtml.evaluate();
            return dashboardHtmlOutput;

        case 'settingMeetingForm':
            const htmlTemplate = HtmlService.createTemplateFromFile('src/views/setting-meeting-form');

            htmlTemplate.cssContent = HtmlService.createHtmlOutputFromFile('src/views/setting-meeting-form-css').getContent();
            return htmlTemplate.evaluate();

        case 'user_data':
            const user = new Member(e.parameter.id);
            response_text = user.attendanceStatus.discordFormat();
            return ContentService.createTextOutput(response_text);

        case 'can_send_activity_dm':
            const sheet = new AdminActivityBook().getMembersInfoSheet();

            const contactListRows = sheet.getContactListRows();

            let memberList = [];
            
            let part = [];

            switch (e.parameter.type) {
                case 'strings':
                    part = ['Vn', 'Va', 'Vc', 'Cb'];
                    break;

                case 'brass':
                    part = ['Tp', 'Hr', 'Trb'];
                    break;

                case 'woodwind':
                    part = ['Fl', 'Ob', 'Cl', 'Fg'];
                    break;

                case 'percussion':
                    part = ['Perc'];
                    break;

                case 'orchestra':
                    part = ['Vn', 'Va', 'Vc', 'Cb', 'Tp', 'Hr', 'Trb', 'Fl', 'Fg', 'Ob', 'Cl', 'Perc'];
            }

            contactListRows.forEach(row => {
                if (part.includes(row[3])) {
                    memberList.push(row[2]);
                }
            });

            const json = {
                member_list: memberList
            };

            const response = JSON.stringify(json);
            
            return ContentService.createTextOutput(response);
    }
}
```