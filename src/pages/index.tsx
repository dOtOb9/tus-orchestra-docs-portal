import React from 'react';
import Layout from '@theme/Layout';
import 'tailwindcss/tailwind.css';

// コンポーネントの読み込み
import TextImageCard from '../components/card/TextImageCard';

// 画像の読み込み
import orchestraLogo from '../components/static/img/tus_orchestra_logo.png';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className="static">
        <h1 className="text-4xl text-center text-blue-600 m-8 font-bold">
          ソフトウェアドキュメントポータルへようこそ！
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TextImageCard title="ソフトウェア情報の共有" imageUrl={orchestraLogo} />
        <TextImageCard title="ドキュメントの検索" imageUrl={orchestraLogo} />
        <TextImageCard title="ユーザーガイド" imageUrl={orchestraLogo} />
      </div>
    </Layout>
  );
}