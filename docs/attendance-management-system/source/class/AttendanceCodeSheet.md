import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AttendanceCodeSheet' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AttendanceCodeSheet extends Sheet {
    private code: string;
    
    constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
        super(sheet);
        this.code = this.data[2][1];
    }
    
    public getCode() {
        return this.code;
    }
    
    public replaceCode(notice=true) {
        this.code = (Math.floor(Math.random() * 9000) + 1000).toString();
        
        this.setValue(2, 1, this.code);
        
        if (notice) this.sendDiscord(this.code);
    }
    
    private sendDiscord(code: string) {
        const today = new Today();
        
        UrlFetchApp.fetch(new Property().getProperty('attendanceDiscordBotURL'), {
            method: 'post',
            contentType: 'application/json',
            payload: JSON.stringify({
                embeds: [
                    {
                        title: `${code}`,
                        description: `${today.toString()}\n${today.getTimeArea()}\nの出席認証コード`,
                        color: parseInt('ff8000', 16),
                    }
                ]
            })
        });
    }
}
```