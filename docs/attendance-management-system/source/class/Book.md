import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/Book"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Book"/>

```ts title="/src/main.ts"
class Book {
    protected book: GoogleAppsScript.Spreadsheet.Spreadsheet;
    
    constructor(type: string) {
        this.book = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty(type));
    }
}
```