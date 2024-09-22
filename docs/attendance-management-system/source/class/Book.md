

```ts title="/src/main.ts"
class Book {
    protected book: GoogleAppsScript.Spreadsheet.Spreadsheet;
    
    constructor(type: string) {
        this.book = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));
    }
}
```