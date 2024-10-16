import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='doGet' type='function' project='attendance-management-system' />

---


この関数は、HTTP GET リクエストを処理し、リクエストパラメータに応じたレスポンスを返します。Google Apps Script の Web アプリケーションで使用されるエントリポイントです。

## パラメータ

- **`e`**: `GoogleAppsScript.Events.AppsScriptHttpRequest` オブジェクト
  - **説明**: HTTP GET リクエストの情報を含むオブジェクト。`e.parameter` でクエリパラメータにアクセスできます。

## 処理の流れ

1. **`mode` の取得**
   - リクエストパラメータ `mode` を取得し、その値に応じた処理を行います。

2. **モード別の処理**

   - **`dashboard`**
     - **説明**: メンバーの出席率を取得し、ダッシュボード HTML テンプレートにデータを渡して表示します。
     - **処理**:
       - `NormalAttendanceBook` と `TuttiAttendanceBook` のインスタンスを作成します。
       - 指定されたメンバーの出席率情報を取得します。
       - ダッシュボード用の HTML テンプレートを作成し、出席率データをテンプレートに渡します。
       - CSS ファイルを読み込み、テンプレートに追加します。
       - HTML を評価してレスポンスとして返します。

   - **`user_data`**
     - **説明**: メンバーの出席情報を Discord 形式で取得し、レスポンスとして返します。
     - **処理**:
       - 指定されたメンバーの出席情報を取得します。
       - 出席情報を Discord 形式にフォーマットし、テキストレスポンスとして返します。

   - **`can_send_activity_dm`**
     - **説明**: 特定のパート（弦楽器、金管楽器、木管楽器、打楽器など）の連絡先リストを取得し、JSON 形式で返します。
     - **処理**:
       - `AdminActivityBook` から連絡先リストを取得します。
       - リクエストパラメータ `type` に基づいて、対象パートをフィルタリングします。
       - 対象パートに含まれるメンバーの ID を収集し、JSON 形式でレスポンスとして返します。

## 戻り値

- **`HtmlOutput`** または **`TextOutput`**
  - **説明**: リクエストパラメータに応じて生成された HTML または JSON テキストがレスポンスとして返されます。