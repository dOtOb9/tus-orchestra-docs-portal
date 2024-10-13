import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='doPost' type='function' project='attendance-management-system' />

---

この関数は、HTTP POST リクエストを処理し、リクエストボディに基づいて適切なアクションを実行します。Google Apps Script の Web アプリケーションで POST リクエストを処理するエントリポイントです。

## パラメータ

- **`e`**: `GoogleAppsScript.Events.AppsScriptHttpRequest` オブジェクト
  - **説明**: HTTP POST リクエストの情報を含むオブジェクト。`e.postData.contents` でリクエストボディのデータにアクセスできます。

## 処理の流れ

1. **JSON データの解析**
   - `e.postData.contents` から JSON データを取得し、`jsonData` として解析します。

2. **モード別の処理**
   - **`edit_user`**
     - **説明**: メンバーの情報を編集します。
     - **処理**:
       - `Member` クラスのインスタンスを作成し、`edit` メソッドを呼び出してメンバー情報を更新します。
     
   - **`belong_contact_list`**
     - **説明**: メンバーを連絡先リストに追加します。
     - **処理**:
       - `Member` クラスのインスタンスを作成し、`addContactList` メソッドを呼び出して連絡先リストに追加します。

   - **`generate_activity_date`**
     - **説明**: 練習日をスケジュールシートに追加します。
     - **処理**:
       - `AdminActivityBook` クラスのインスタンスを作成し、`getScheduleSheet` メソッドでスケジュールシートを取得します。
       - `prepareActivityDate` メソッドを呼び出して、指定された練習日をシートに追加します。

   - **`auth_attend`**
     - **説明**: 出席認証を行います。
     - **処理**:
       - `verifyAttendance` クラスのインスタンスを作成し、`start` メソッドを呼び出して出席確認を行います。
       - 結果の文字列を返します。

3. **デフォルトのレスポンス**
   - **説明**: モードに一致しない場合、またはエラーが発生した場合のレスポンスを返します。
   - **処理**: `'返り値がありません'` を返します。

## 戻り値

- **`TextOutput`**
  - **説明**: 処理結果をテキスト形式でレスポンスとして返します。具体的な内容は処理結果に応じたメッセージです。
