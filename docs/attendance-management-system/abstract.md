# 概要

## フォルダ構造
```bash
団内管理フォルダ/
├── 練習用出欠管理フォルダ/
│   ├── 出欠表フォルダ/
│   │   ├── Tutti出欠表ファイル
│   │   └── 通常練習出欠表ファイル
│   └── 練習予定管理ファイル
├── 管理用ファイル
└── 団会用出欠管理ファイル
```

:::tip
すべてのファイルはスプレッドシート形式で、共有はフォルダ単位で行います。これにより、フォルダ内の全ファイルに簡単にアクセスできます。 フォルダを共有する際に、個別のファイルではなくフォルダ全体を共有することで管理が簡単になりますが、フォルダの中身全てが相手に見えることを忘れないでください。特に個別に共有したいファイルがある場合は、スプレッドシート自体を共有することも検討すると良いです。
:::

## 使い方
### 乗り番リストの作成
使用する前の準備として、`練習予定の管理ファイル`内の`乗り番シート`で、前曲、中曲、メイン曲それぞれの乗り番の団員にチェックを入れる必要があります。これは、出欠管理システム内の他にも、Discordボットでの練習連絡機能の利用時にシステム上で使用されます。

### 練習予定の追加

Discordボットの機能により、練習連絡を送信すると自動的に出欠管理システムに練習情報が通知され、自動化フローが開始します。通知された練習情報は、`練習予定管理ファイル`に記録され、出欠列の生成時や認証コードの生成時、出席登録時にシステム側が参照します。インスペクターなど、`練習予定管理ファイル`の編集権限がある団員はDiscordボットによる練習連絡の送信後、本システムに通知された練習情報を編集することもできます。

### 出席登録
練習日当日になると、専用のDiscordチャネルに認証コードが送信されます。0:00〜1:00の間、12:00〜13:00の間の2回送信され、前者は前半の2コマ、後者は後半の2コマの出席登録に使用されます。

出席登録は、専用のフォームによって実行します。専用フォームは、Discordボットによる練習連絡メッセージに付随する、出席認証と表示されたリンクを開くことで利用することができます。

午前に登録すると前半2コマ、午後に登録すると後半2コマの出席が登録されます。冠婚葬祭や学業など、既に欠席以外の値が入力されている場合には、フォームには登録完了と表示されていても出席とは入力されません。

出欠表のスプレッドシートは、パートリーダー等は出欠表の値自体を手動で編集することもできます。しかし、基本的には団員一人一人が出席登録を行った方が手間がかからないと思います。

<iframe class="google-slide" src="https://docs.google.com/presentation/d/e/2PACX-1vTn77krbW1vgTv222aK2KgBxowgvzy50Iwme7lgCEYTCwxoiZl64bxHJ1db6vOv9Jjj28qD8uAYIC4X/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## 自動化の流れ

### 練習日程管理
1. Discord Botによる練習連絡送信時に`練習予定の管理`ファイルに練習の情報が登録される。
2. 毎日0:00~1:00に、登録された情報に従って出欠列が生成される。練習日であれば、欠席が入力される。
3. 0:00〜1:00と12:00〜13:00に認証コードの置換と、Discordチャネルへの送信がされる。

<iframe class="google-slide" src="https://docs.google.com/presentation/d/1TKqU5a3g_LNte9_EeBZlhY3dOOk5dA70BJedK3FYSRA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### 出欠登録
1. Discordチャネルに送信された認証コードに従って、各団員がDiscord Bot内のフォームからコードを送信
2. `練習予定の管理`ファイルに登録された情報に従って、各出欠表に出席が自動入力される。
3. 出欠表ファイルの編集権限を持っている団員であれば手動で入力も可能。
<iframe class="google-slide" src="https://docs.google.com/presentation/d/1R2IJQwpFF_m-TNYZly9yFdSlpkNPoJQYSETRa7VES6w/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>