import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='Book' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class Book {
    private book: GoogleAppsScript.Spreadsheet.Spreadsheet;
    
    constructor(type: string) {
        this.book = SpreadsheetApp.openById(new Property().getProperty(type));
    }

    protected getSheetByName(sheetName: string) {
        const sheet = this.book.getSheetByName(sheetName);

        // シートが存在しない場合はエラーを返す
        if (sheet === null) {
            throw new Error(`Sheet ${sheetName} is not found.`);
        }
        return sheet;
    }
}
```