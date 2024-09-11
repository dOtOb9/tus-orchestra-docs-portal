```ts title="/src/main.ts"
function startEventFlow() {
    const ui = SpreadsheetApp.getUi();

    const htmlOutput = HtmlService
        .createHtmlOutput(`<a href="${PropertiesService.getScriptProperties().getProperty("doGetUrl")}?mode=dashboard">ここをクリック</a>`);

    ui.showModelessDialog(htmlOutput, "リンクからアクセス");
}
```