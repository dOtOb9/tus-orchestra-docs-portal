import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/function/startEventFlow"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/startEventFlow"/>


この関数は、Google スプレッドシートの UI にダイアログを表示し、ユーザーが指定されたリンクにアクセスできるようにします。

### 処理の流れ

1. **UI インスタンスの取得**
   - `SpreadsheetApp.getUi()` を使用して、スプレッドシートの UI インスタンスを取得します。

2. **HTML ダイアログの作成**
   - `HtmlService.createHtmlOutput` を使用して、HTML コンテンツを作成します。この HTML には、`doGetUrl` プロパティに基づいたリンクが含まれています。

3. **モデルレスダイアログの表示**
   - `ui.showModelessDialog` メソッドを使用して、作成した HTML をモデルレスダイアログとして表示します。このダイアログは「リンクからアクセス」というタイトルが付けられています。

### 戻り値

- **なし**
  - **説明**: この関数は特に戻り値を返しません。ダイアログが UI に表示され、ユーザーがリンクをクリックできるようになります。