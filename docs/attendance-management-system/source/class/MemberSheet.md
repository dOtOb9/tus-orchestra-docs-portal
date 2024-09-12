import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/class/MemberSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/MemberSheet"/>

```ts title="/src/main.ts"
class MemberSheet extends Sheet {
  public editMember(memberRow: Array<string>): void {
      const userRow = this.searchMember(memberRow[1]);

      if (userRow === undefined) {
          this.addMember(memberRow);
          return;
      }
  }
  
  private addMember(memberRow: Array<string>) {
      this.appendRow(memberRow);
  }
  
  protected searchMember(id: string) {
      const memberRow = this.data.find((row) => row[2] === id);
      
      return memberRow;
  }
}
```