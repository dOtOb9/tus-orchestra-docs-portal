import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/interface/attendRateInfo"/>
<FeatureLink href="/docs/attendance-management-system/feature/interface/attendRateInfo"/>

```ts title="/src/main.ts"
interface AttendRateInfo{
    overture: AttendRateData;
    middle: AttendRateData;
    main: AttendRateData;
}
```