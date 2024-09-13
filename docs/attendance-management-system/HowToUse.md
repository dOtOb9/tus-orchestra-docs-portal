# 使い方

## ディレクトリ構造
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

:::tips
すべてのファイルはスプレッドシート形式で、共有はフォルダ単位で行います。これにより、フォルダ内の全ファイルに簡単にアクセスできます。 フォルダを共有する際に、個別のファイルではなくフォルダ全体を共有することで管理が簡単になりますが、フォルダの中身全てが相手に見えることを忘れないでください。特に個別に共有したいファイルがある場合は、スプレッドシート自体を共有することも検討すると良いです。
:::

## 自動化の流れ

### 練習日程管理
1. Discord Botによる練習連絡送信時に`練習予定の管理`ファイルに練習の情報が登録される。
2. 毎日0:00~1:00に、登録された情報に従って出欠列が生成される。練習日であれば、欠席が入力される。
3. 0:00〜1:00と12:00〜13:00に認証コードの置換と、Discordチャネルへの送信がされる。
<iframe src="https://docs.google.com/presentation/d/1TKqU5a3g_LNte9_EeBZlhY3dOOk5dA70BJedK3FYSRA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### 出欠登録
1. Discordチャネルに送信された認証コードに従って、各団員がDiscord Bot内のフォームからコードを送信
2. `練習予定の管理`ファイルに登録された情報に従って、各出欠表に出席が自動入力される。
3. 出欠表ファイルの編集権限を持っている団員であれば手動で入力も可能。
<iframe src="https://docs.google.com/presentation/d/1R2IJQwpFF_m-TNYZly9yFdSlpkNPoJQYSETRa7VES6w/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>