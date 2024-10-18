import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='MembersInfoSheet' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class MembersInfoSheet extends MembersSheet {
    
    public addContactList(id: string) {
        const userRow = this.searchMember(id);
        
        this.setValue(Number(userRow[0]), 8, "TRUE");
    }
    
    public getContactMemberIds(section: string): Array<string> {
        const MemberRows = this.data.filter((row) => row[8] === "TRUE");

        let part: string[] = [];
    
        switch (section) {
            case '弦楽器':
                part = ['Vn', 'Va', 'Vc', 'Cb'];
                break;

            case '金管楽器':
                part = ['Tp', 'Hr', 'Trb'];
                break;

            case '木管楽器':
                part = ['Fl', 'Ob', 'Cl', 'Fg'];
                break;

            case '打楽器':
                part = ['Perc'];
                break;

            case 'Tutti':
                part = ['Vn', 'Va', 'Vc', 'Cb', 'Tp', 'Hr', 'Trb', 'Fl', 'Fg', 'Ob', 'Cl', 'Perc'];
        }

        const MemberIds = MemberRows.map(row => {
            if (part.includes(row[3])) {
                return row[2];
            }
        }).filter((id) => id !== undefined);

        return MemberIds;
    }

    public getMemberIsPracticeContact(id: string) {
        const memberRow =  this.searchMember(id);

        return memberRow[9];
    }

    public getOffMemberIds(): MemberIdsByTuneName {
        return {
            '前曲': this.data.filter(row => row[5] === 'FALSE').map(row => row[2]),
            '中曲': this.data.filter(row => row[6] === 'FALSE').map(row => row[2]),
            'メイン': this.data.filter(row => row[7] === 'FALSE').map(row => row[2])
        } as MemberIdsByTuneName;
    }
}
```