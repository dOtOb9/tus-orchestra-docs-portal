import SourceLinks from '/src/components/pageLink/SourceLinks'

<SourceLinks component='Property' type='class' project='attendance-management-system' />

```ts title='/src/main.ts'
class Property {
    private readonly property: GoogleAppsScript.Properties.Properties;

    constructor() {
        this.property = PropertiesService.getScriptProperties();
    }

    public setProperty(key: string, value: string): void {
        this.property.setProperty(key, value);
    }

    public getProperty(key: string) {
        const propertyValue =  this.property.getProperty(key);

        if (propertyValue === null) {
            throw new Error(`Property for key ${key} is not set.`);
        }
        return propertyValue;
    }
}
```