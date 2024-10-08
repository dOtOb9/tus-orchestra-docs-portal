import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AttendanceBook' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AttendanceBook extends Book {
    
    public getSheet(sheetName: string) {
        const sheet = super.getSheetByName(sheetName);
        return new AttendanceSheet(sheet);
    }
}
```