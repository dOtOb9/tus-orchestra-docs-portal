import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceStatus"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceStatus"/>

```ts title="/src/main.ts"
class AttendanceStatus {
    private readonly id: string;
    private normalAttendRateInfo: AttendRateInfo;
    private tuttiAttendRateInfo: AttendRateInfo;
    
    constructor(id: string) {
        this.id = id;
        this.normalAttendRateInfo = this.getAttendRateStatus(new NormalAttendanceBook());
        this.tuttiAttendRateInfo = this.getAttendRateStatus(new TuttiAttendanceBook());
    }
    
    public getAttendRateStatus(attendanceBook: AttendanceBook): AttendRateInfo {
        const overture = attendanceBook.getSheet('前曲').getMemberAttendanceRateAndBase(this.id);
        const middle = attendanceBook.getSheet('中曲').getMemberAttendanceRateAndBase(this.id);
        const main = attendanceBook.getSheet('メイン曲').getMemberAttendanceRateAndBase(this.id);
        
        return { overture, middle, main };
    }
    
    public discordFormat(): string{
        return JSON.stringify({
            'attend_status': `
            - 前曲\n
            出席率 ... ${this.normalAttendRateInfo.overture.rate}\n
            母数 ... ${this.normalAttendRateInfo.overture.base}\n\n
            - 中曲\n
            出席率 ... ${this.normalAttendRateInfo.middle.rate}\n
            母数 ... ${this.normalAttendRateInfo.middle.base}\n\n
            - メイン曲
            出席率 ... ${this.normalAttendRateInfo.main.rate}\n
            母数 ... ${this.normalAttendRateInfo.main.base}\n
            `,
            'tutti_attend_status': `
            - 前曲\n
            出席率 ... ${this.tuttiAttendRateInfo.overture.rate}\n
            母数 ... ${this.tuttiAttendRateInfo.overture.base}\n\n
            - 中曲\n
            出席率 ... ${this.tuttiAttendRateInfo.middle.rate}\n
            母数 ... ${this.tuttiAttendRateInfo.middle.base}\n\n
            - メイン曲
            出席率 ... ${this.tuttiAttendRateInfo.main.rate}\n
            母数 ... ${this.tuttiAttendRateInfo.main.base}\n
            `,        
        })
    }
}
```