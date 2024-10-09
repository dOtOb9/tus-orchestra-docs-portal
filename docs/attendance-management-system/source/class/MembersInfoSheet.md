import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='MembersInfoSheet' type='class' project='attendance-management-system' />

---

```ts title="/src/main.ts"
class MembersInfoSheet extends MembersSheet {
    
    public addContactList(id: string) {
        const userRow = this.searchMember(id);
        
        this.setValue(Number(userRow[0]), 8, "TRUE");
    }
    
    public getContactListRows(): Array<Array<string>> {
        const MemberRows = this.data.filter((row) => row[8] === "TRUE");

        return MemberRows;
    }

    public getMemberIsPracticeContact(id: string) {
        const memberRow =  this.searchMember(id);

        return memberRow[9];
    }

    public getCustomMemberList() {
        return this.data.filter(row => row[8] === "TRUE").map(row => row[2]);
    }

    public getOffMemberIds(tuneName: string) {
        let tuneColNumber: number;

        switch(tuneName) {
            case '前曲':
                tuneColNumber = 5;
                break;

            case '中曲':
                tuneColNumber = 6;
                break;

            default:
                tuneColNumber = 7;
        }

        return this.data.filter(row => row[tuneColNumber] === 'FALSE').map(row => row[2]);
    }
}
```