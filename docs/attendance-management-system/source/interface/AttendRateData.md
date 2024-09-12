import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

<ReferenceLink href="/docs/attendance-management-system/reference/interface/attendRateData"/>
<FeatureLink href="/docs/attendance-management-system/feature/interface/attendRateData"/>


```ts title="/src/main.ts"
interface AttendRateData {
    rate: string;
    base: string;
}
```