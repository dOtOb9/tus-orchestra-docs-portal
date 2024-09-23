import ComponentLinks from '/src/components/pageLink/ComponentLinks'

# 詳細設計

## 概要
**動作環境**

本システムは、Google Apps Script上で動作し、Webアプリとしてデプロイされる。ソースコードは[**TypeScript**](https://www.typescriptlang.org/ja/)によって記述され、[**clasp**](https://github.com/google/clasp)によってGoogle Apps Scriptに更新される。使用されるスプレッドシートの所有者と記述されるApps Scriptの所有者は同一のアカウントによって管理される。

**開発環境**
|項目          |内容        |
|--------------|------------|
|開発言語      |TypeScript  |
|リポジトリ管理|GitHubフロー|

## ディレクトリ構造

```bash
src/
 ├── views/
 │   ├── dashboard-css.html
 │   ├── dashboard.html
 │   ├── setting-meeting-form-css.html
 │   └── setting-meeting-form.html
 └── main.ts
```

- views ... ユーザーに表示するHTML, CSSファイルをまとめたディレクトリ。
- main.ts ... スプレッドシートに関する操作を行うためのファイル。GoogleAppsScriptに変換される。

## クラス
**主要な考え方**

シートごとに役割を設定し、それらをクラスにラップする。例えば、通常練習のスプレッドシートに関するクラス( Normal Attendance Book ) は、通常練習の出欠に関するデータの管理に関する機能をラップし、また前曲、中曲、メイン曲それぞれの出欠表シートの管理に関するクラス( Attendance Sheet ) を所有する。それぞれのクラスは、設定された関数の実行によって動作される。システムの動作に関しては、それぞれの[関数](#関数)の処理を追っていくと理解しやすいはず。

### スプレッドシートに関するクラス

#### Book
管理するスプレッドシートの全てに必要な機能をラップします。即ち、後の`~Book`という命名のクラスはすべてこのクラスを継承しています。
<ComponentLinks component='Book' type='class' project='attendance-management-system'/>

---

#### SystemBook
`Book`クラスを継承し、`管理者用`スプレッドシートの操作に関する機能をラップしています。
/ComponentLinks/>

---

#### AdminActivityBook
`Book`クラスを継承し、`練習予定の管理`スプレッドシートの操作に関する機能をラップしています。
ComponentLinks/>

---

#### AdminEventBook
`Book`クラスを継承し、`団会用出欠管理`スプレッドシートの操作に関する機能をラップしています。
ComponentLinks/>

---

#### AttendanceBook
`Book`クラスを継承し、出欠表シートに関するスプレッドシートの操作に必要な機能をラップしています。即ち、後の`~AttendanceBook`という命名のクラスはすべてこのクラスを継承しています。
ComponentLinks/>

---

#### NormalAttendanceBook
`AttendanceBook`クラスを継承し、`通常練習出欠表`スプレッドシートの操作に関する機能をラップしています。
ComponentLinks/>

---

#### TuttiAttendanceBook
`AttendanceBook`クラスを継承し、`Tutti練習出欠表`スプレッドシートの操作に関する機能をラップしています。
ComponentLinks/>

---

### シートに関するクラス

#### Sheet
管理するシートの全てに必要な機能をラップします。即ち、後の`~Sheet`という命名のクラスはすべてこのクラスを継承しています。
ComponentLinks/>

---

#### MemberSheet
`Sheet`クラスを継承し、団員毎の情報を管理するシートに必要な機能をラップします。
ComponentLinks/>

---

#### AttendanceCodeSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`認証コード`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### UserInfoSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`ユーザー設定`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### ScheduleSheet
`Sheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`練習予定`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### AttendanceSheet
`MemberSheet`クラスを継承し、出欠表シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### AdminEventSheet
`Sheet`クラスを継承し、`団会用出欠管理`スプレッドシート内の`管理用`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### EventAttendanceSheet
`AttendanceSheet`クラスを継承し、`団会用出欠管理`スプレッドシート内の`出欠表`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### MemberInfoSheet
`MemberSheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`乗り番`シートの操作に関する機能をラップします。
ComponentLinks/>

---

#### AttendanceStatus
メンバー個人の出欠情報をラップします。
ComponentLinks/>

---

### その他のクラス

#### Member
団員情報に関する機能をラップします。
ComponentLinks/>

---

#### verifyAttendance
出席認証コードに関する機能をラップします。
ComponentLinks/>


## 関数

### HTTPリクエストに関する関数

#### doPost
本システムに対するHTTP POSTリクエストに対応する関数。
ComponentLinks/>

---

#### doGet
本システムに対するHTTP POSTリクエストに対応する関数。
ComponentLinks/>

### その他の関数

#### regular
定期実行される関数。
ComponentLinks/>

---

#### setEventInfo
団会情報を設定します。
ComponentLinks/>

---

#### startEventFlow
団会開催フローを開始します。
ComponentLinks/>

## インターフェース

#### AttendRateInfo
各曲の出欠状況に関する情報をラップします。
ComponentLinks/>

---

#### AttendRateData
各曲の出席率の情報をラップします。
ComponentLinks/>