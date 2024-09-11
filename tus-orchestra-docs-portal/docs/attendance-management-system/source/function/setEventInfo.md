import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<SourceLink href="/docs/attendance-management-system/source/function/setEventInfo"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/setEventInfo"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/setEventInfo"/>

```ts title="/src/main.ts
function setEventInfo() {
    const adminEventBook = new AdminEventBook();

    adminEventBook.setEventInfo();
}
```