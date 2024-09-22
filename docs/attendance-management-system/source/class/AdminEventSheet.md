

```ts title="/src/main.ts"
class AdminEventSheet extends Sheet {
    public getSettingDate() {
        return this.data[4][8];
    }

    public setAttendaneSummarize(dateColNumber: number) {
        const dateCol = String.fromCharCode(dateColNumber+64);

        this.setValue(5, 8, `=COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "出席")+COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "委任状")`);
        this.setValue(6, 8, `=COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "出席")`);
        this.setValue(7, 8, `=COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "出席")+COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "早退")`);
        this.setValue(8, 8, `=COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "委任状")`);
        this.setValue(9, 8, `=COUNTIF('出欠表'!$${dateCol}2:$${dateCol}, "欠席")`);
    }
}
```