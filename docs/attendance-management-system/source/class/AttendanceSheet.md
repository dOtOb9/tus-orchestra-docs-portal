import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AttendanceSheet' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AttendanceSheet extends MembersSheet {

    public editMemberInfoValues(memberRow: Array<string>) {
        const newRowNumber = this.data.length;
        
        // 練習回数
        const activityNumber = `=COUNTIF(G${newRowNumber}:${newRowNumber}, "出席")+COUNTIF(G${newRowNumber}:${newRowNumber}, "欠席")+COUNTIF(G${newRowNumber}:${newRowNumber}, "遅刻")+COUNTIF(G${newRowNumber}:${newRowNumber}, "早退")`;
        // 出席回数
        const attendanceNumber = `=(COUNTIF(G${newRowNumber}:${newRowNumber}, "出席"))+(COUNTIF(G${newRowNumber}:${newRowNumber}, "遅刻"))*0.5+(COUNTIF(G${newRowNumber}:${newRowNumber}, "早退"))*0.5`;
        // 出席率
        const attendanceRate = `=D${newRowNumber}/MAX(C${newRowNumber})`;
        
        // 出欠表用の行を作成する
        const attendanceMemberRow = [memberRow[0], memberRow[1], activityNumber, attendanceNumber, attendanceRate, memberRow[2], memberRow[3]];
        
        super.editMember(attendanceMemberRow);
    }
    
    public setAttendanceCol(date: string, memberIds: Array<string>): number {
        const dateColNumber = this.createColumnsLeft(date, 8, 1);

        this.setAbsense(dateColNumber);

        this.setOffMembers(dateColNumber, memberIds);
        
        return dateColNumber;
    }
    
    public setAttend(id: string, dateColNumber: number) {
        const memberRow = this.searchMember(id);
        
        const rowNumber = Number(memberRow[0]);
        const colNumber = Number(this.data[0].length - 1 - dateColNumber);
        
        if (this.data[rowNumber][colNumber] === "欠席") {
            this.setValue(rowNumber, colNumber, "出席");
        }
    }
    
    private setAbsense(dateColNumber: number): void {
        const values = Array(this.data.length-2).fill(["欠席"]);
        this.setValues(
            2, 
            this.data[0].length - 1 - dateColNumber, 
            this.data.length - 2,
            1,
            values
        );
    }

    private setOffMembers(dateColNumber: number, memberIds: Array<string>): void {

        memberIds.forEach((id: string) => {
            const memberRow = this.searchMember(id);

            const rowNumber = Number(memberRow[0]);
            const colNumber = Number(this.data[0].length - 1 - dateColNumber);

            this.setValue(rowNumber, colNumber, "降り番");
        });
    }
    
    public getMemberAttendanceRateAndBase(id: string) {
        const MemberRow = this.searchMember(id);
        
        const rate = MemberRow[5];
        const base = MemberRow[3];
        
        return { rate, base };
    };

    public sortClear() {
        this.sortCol(2);
        this.sortCol(7);
        this.sortCol(6,false);
    };
}
```