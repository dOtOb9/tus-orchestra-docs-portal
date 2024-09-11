import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<SourceLink href="/docs/attendance-management-system/source/function/startEventFlow"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/startEventFlow"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/startEventFlow"/>

```ts title="/src/main.ts"
function startEventFlow() {
    const ui = SpreadsheetApp.getUi();

    const htmlOutput = HtmlService
        .createHtmlOutput(`<a href="${PropertiesService.getScriptProperties().getProperty("doGetUrl")}?mode=dashboard">ここをクリック</a>`);

    ui.showModelessDialog(htmlOutput, "リンクからアクセス");
}
```