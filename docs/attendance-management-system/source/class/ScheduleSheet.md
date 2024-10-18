import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='ScheduleSheet' type='class' project='attendance-management-system' />

---


```ts title="/src/main.ts"
class ScheduleSheet extends Sheet {
    
    // 現在の練習コマの情報を取得する
    public getNowTermRow(): Array<Array<string>> {
        const today = new Today();
        const todayText = today.toString();
        const todayTimeArea = today.getTimeArea();
        
        const todayRows = this.data.filter(row => row[1] === todayText);
        
        const nowTermRows = todayRows.filter(row => {
            if (todayTimeArea === "午前") {
                return row[2] === "1" || row[2] === "2";
            } else {
                return row[2] === "3" || row[2] === "4";
            }
        })
        
        return nowTermRows;
    }
    
    public setActivityDate(memberIds: Array<string>): void {
        // 列名が空白の行だけ取得
        const noneSetDateRows = this.data.filter(row => row[4] === "");
        
        const noneSetStringsDateRows = noneSetDateRows.filter(row => row[5] === "Tutti");
        const noneSetTuttiDateRows = noneSetDateRows.filter(row => row[5] !== "Tutti");
        
        // 通常練習、Tutti練習どちらも実行する
        [noneSetStringsDateRows, noneSetTuttiDateRows].forEach((rows: Array<Array<string>>): void => {
            // 追加する列がなければ終了する
            if (rows.length === 0) return;
            
            // Tutti列にチェックが入っているか、入っていないかの判定
            const attendanceBook = rows[0][5] === "Tutti" ? new TuttiAttendanceBook() : new StringsAttendanceBook();
            
            rows.forEach((row) => {
                // 曲名から対象のシートを取得する
                
                const attendanceSheet = attendanceBook.getSheet(row[3]);
                // 日付の出欠列を生成し、生成した列の右端から数えた列数を返す
                const dateColNumber = attendanceSheet.setActivityDate(row[1], memberIds);
                
                // 生成した列の位置を記録する
                this.setValue(Number(row[0]), 4, dateColNumber.toString());
            })
        });
    }
    
    public isActivityDate(today: Today): boolean {
        const todayRows = this.data.filter(row => row[1] === today.toString());
        
        return todayRows.length !== 0;
    }
    
    public prepareActivityDate(date: string, section: string, slots: Array<string>): void {
        for (let i = 0; i < slots.length; ++i) {
            this.appendRow([date, (i+1).toString(), slots[i], "", section]);
        }
    }
}
```