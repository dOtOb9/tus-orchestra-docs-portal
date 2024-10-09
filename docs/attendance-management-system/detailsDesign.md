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

シートごとに役割を設定し、それらをクラスに格納します。例えば、通常練習のスプレッドシートに関するクラス( Normal Attendance Book ) は、通常練習の出欠に関するデータの管理に関する機能を扱います。また、前曲、中曲、メイン曲それぞれの出欠表シートの管理に関するクラス( Attendance Sheet ) を所有する。それぞれのクラスは、設定された関数の実行によって動作される。システムの動作に関しては、それぞれの[関数](#関数)の処理を追っていくと理解しやすいはず。

### スプレッドシートに関するクラス

#### Book
管理するスプレッドシートの全てに必要な機能を扱います。
<ComponentLinks component='Book' type='class' project='attendance-management-system'/>

---

#### SystemBook
`Book`クラスを継承し、`管理者用`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='SystemBook' type='class' project='attendance-management-system'/>

---

#### AdminActivityBook
`Book`クラスを継承し、`練習予定の管理`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='AdminActivityBook' type='class' project='attendance-management-system'/>

---

#### AttendanceBook
`Book`クラスを継承し、出欠表シートに関するスプレッドシートの操作に必要な機能を扱います。
<ComponentLinks component='AttendanceBook' type='class' project='attendance-management-system' />

---

#### StringsAttendanceBook
`AttendanceBook`クラスを継承し、`弦楽器出欠表`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='StringsAttendanceBook' type='class' project='attendance-management-system' />

---

#### WoodwindAttendanceBook
`AttendanceBook`クラスを継承し、`木管楽器出欠表`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='WoodwindAttendanceBook' type='class' project='attendance-management-system' />

---

#### BrussAttendanceBook
`AttendanceBook`クラスを継承し、`金管楽器楽器出欠表`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='brussAttendanceBook' type='class' project='attendance-management-system' />

---

#### PercussionAttendanceBook
`AttendanceBook`クラスを継承し、`打楽器楽器出欠表`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='percussionAttendanceBook' type='class' project='attendance-management-system' />

---

#### TuttiAttendanceBook
`AttendanceBook`クラスを継承し、`Tutti出欠表`スプレッドシートの操作に関する機能を扱います。
<ComponentLinks component='TuttiAttendanceBook' type='class' project='attendance-management-system' />

---

### シートに関するクラス

#### Sheet
シートの操作に必要な機能を扱います。
<ComponentLinks component='Sheet' type='class' project='attendance-management-system' />

---

#### MembersSheet
`Sheet`クラスを継承し、団員毎の情報を管理するシートに必要な機能を扱います。
<ComponentLinks component='MembersSheet' type='class' project='attendance-management-system' />

---

#### AttendanceCodeSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`認証コード`シートの操作に関する機能を扱います。
<ComponentLinks component='AttendanceCodeSheet' type='class' project='attendance-management-system' />

---

#### UserInfoSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`ユーザー設定`シートの操作に関する機能を扱います。
<ComponentLinks component='UserInfoSheet' type='class' project='attendance-management-system' />

---

#### ScheduleSheet
`Sheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`練習予定`シートの操作に関する機能を扱います。
<ComponentLinks component='ScheduleSheet' type='class' project='attendance-management-system'/>

---

#### AttendanceSheet
`MembersSheet`クラスを継承し、出欠表シートの操作に関する機能を扱います。
<ComponentLinks component='AttendanceSheet' type='class' project='attendance-management-system' />

---

#### MembersInfoSheet
`MembersSheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`乗り番`シートの操作に関する機能を扱います。
<ComponentLinks component='MembersInfoSheet' type='class' project='attendance-management-system' />

---

### その他のクラス

#### Member
団員情報に関する機能を扱います。
ComponentLinks/>

---

#### AttendanceStatus
メンバー個人の出欠情報を扱います。
ComponentLinks/>

---

#### verifyAttendance
出席認証コードに関する機能を扱います。
ComponentLinks/>

---

#### Property
Apps Script内の環境変数に関する機能を扱います。
<ComponentLinks component='Property' type='class' project='attendance-management-system' />

---

#### Today
実行時の日時に関する機能を扱います。
<ComponentLinks component='Today' type='class' project='attendance-management-system' />

---

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
<ComponentLinks component='regular' type='function' project='attendance-management-system'/>

---

#### registerAttendance
出席登録を実行する関数。
<ComponentLinks component='registerAttendance' type='function' project='attendance-management-system' />

---

## インターフェース

#### AttendRateInfo
各曲の出欠状況に関する情報を扱います。
ComponentLinks/>

---

#### AttendRateData
各曲の出席率の情報を扱います。
ComponentLinks/>