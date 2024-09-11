# サーバー構築

## 使用するDiscord Botの形態
このソフトウェアで使用しているBotは、Discord内では`Application`と呼ばれている機能です。主にDiscordの機能を拡張する目的で使用されます。同じDiscordのBotとして紹介されるWebHookを用いたBotとは別物と考えたほうが良いです。

[Discord Developer Portal](https://discord.com/developers/applications)で、自分用のDiscord Botを追加することができます。

## Discord Botとホスティングサーバーとの関係
Discord Botは、それだけでは機能しません。Discord側が提供するものはBotの操作に関する**APIのみ**であり、実際に行う処理は別途サーバーを用意し、Discord Botと通信を行うことでBotの運用を実現しています。

## ホスティングサービス

Botの起動のためのサーバーは、awsの無料利用枠を使用しています。基本的に費用がかかることはありませんし、セキュリティや管理に関しても定評のあるサービスです。

|項目|内容|
|--------------------|------------------------------------------------------|
|ホスティングサービス|[aws (Amazon Web Service)](https://aws.amazon.com/jp/)|
|製品                |[EC2](https://aws.amazon.com/jp/ec2/)                 |
|インスタンスタイプ  |t2.micro                                              |
|OS                  |Ubuntu                                                |