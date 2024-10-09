import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='AttendRateInfo' type='interface' project='attendance-management-system' />

---

```ts title="/src/main.ts"
interface AttendRateInfo{
    overture: AttendRateData;
    middle: AttendRateData;
    main1: AttendRateData;
    main2: AttendRateData;
    main3: AttendRateData;
    main4: AttendRateData;
}
```