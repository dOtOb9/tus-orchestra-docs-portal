import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AttendanceStatus' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class AttendanceStatus {
    private readonly id: string;
    private stringsAttendRateInfo: AttendRateInfo;
    private tuttiAttendRateInfo: AttendRateInfo;
    
    constructor(id: string) {
        this.id = id;
        this.stringsAttendRateInfo = this.getAttendRateStatus(new StringsAttendanceBook());
        this.tuttiAttendRateInfo = this.getAttendRateStatus(new TuttiAttendanceBook());
    }
    
    public getAttendRateStatus(attendanceBook: AttendanceBook): AttendRateInfo {
        const overture = attendanceBook.getSheet('前曲').getMemberAttendanceRateAndBase(this.id);
        const middle = attendanceBook.getSheet('中曲').getMemberAttendanceRateAndBase(this.id);
        const main1 = attendanceBook.getSheet('メイン１').getMemberAttendanceRateAndBase(this.id);
        const main2 = attendanceBook.getSheet('メイン２').getMemberAttendanceRateAndBase(this.id);
        const main3 = attendanceBook.getSheet('メイン３').getMemberAttendanceRateAndBase(this.id);
        const main4 = attendanceBook.getSheet('メイン４').getMemberAttendanceRateAndBase(this.id);
        
        return { overture, middle, main1, main2, main3, main4 };
    }
    
    public discordFormat(): string{
        return JSON.stringify({
            'attend_status': `
            **前曲**
            出席率 ... ${this.stringsAttendRateInfo.overture.rate}
            母数 ... ${this.stringsAttendRateInfo.overture.base}
            **中曲**
            出席率 ... ${this.stringsAttendRateInfo.middle.rate}
            母数 ... ${this.stringsAttendRateInfo.middle.base}
            **メイン１**
            出席率 ... ${this.stringsAttendRateInfo.main1.rate}
            母数 ... ${this.stringsAttendRateInfo.main2.base}
            **メイン２**
            出席率 ... ${this.stringsAttendRateInfo.main2.rate}
            母数 ... ${this.stringsAttendRateInfo.main2.base}
            **メイン３**
            出席率 ... ${this.stringsAttendRateInfo.main3.rate}
            母数 ... ${this.stringsAttendRateInfo.main3.base}
            **メイン４**
            出席率 ... ${this.stringsAttendRateInfo.main4.rate}
            母数 ... ${this.stringsAttendRateInfo.main4.base}
            `,
            'tutti_attend_status': `
            **前曲**
            出席率 ... ${this.tuttiAttendRateInfo.overture.rate}
            母数 ... ${this.tuttiAttendRateInfo.overture.base}
            **中曲**
            出席率 ... ${this.tuttiAttendRateInfo.middle.rate}
            母数 ... ${this.tuttiAttendRateInfo.middle.base}
            **メイン１**
            出席率 ... ${this.tuttiAttendRateInfo.main1.rate}
            母数 ... ${this.tuttiAttendRateInfo.main1.base}
            **メイン２**
            出席率 ... ${this.tuttiAttendRateInfo.main2.rate}
            母数 ... ${this.tuttiAttendRateInfo.main2.base}
            **メイン３**
            出席率 ... ${this.tuttiAttendRateInfo.main3.rate}
            母数 ... ${this.tuttiAttendRateInfo.main3.base}
            **メイン４**
            出席率 ... ${this.tuttiAttendRateInfo.main4.rate}
            母数 ... ${this.tuttiAttendRateInfo.main4.base}
            `,        
        })
    }
}
```