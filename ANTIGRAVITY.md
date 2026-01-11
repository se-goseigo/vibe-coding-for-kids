# Project: Vibe Coding 入門 for Kids (niji-blog)

## 1. プロジェクトの目的 (Goal)
- **概要**: 初心者（小学6年生レベル）でも分かる「AIを使ったプログラミング（Vibe Coding）」の解説ページを作成する。
- **ターゲット**: プログラミングに興味がある小学生高学年〜初心者。
- **最終ゴール**: ユーザーの独自ドメイン `niji-blog.niji-haha-design.tech` で公開すること。

## 2. デザイン & コンテンツ方針 (Design & Content)
- **トーン**: 元記事を参考にしつつ、オリジナルの表現で「短く・分かりやすく」書き直す。
- **構成**:
    - 難しい言葉を使わない（または例え話を使う）。
    - 冗長さ（著者の自分語りなど）を削ぎ落とし、手順だけを抽出。
    - 5章の「MVP（小さく作る）」という考え方を、子供でも分かる「工作」や「ブロック遊び」の例えで説明。
- **デザイン**:
    - 「ワクワクする」デザイン（Web App Development Guidelines準拠）。
    - 読みやすい文字サイズ、カラフルだが目に優しい配色。

## 3. 技術スタック (Tech Stack)
- **Framework**: Next.js (Static Export or Vercel Deployment optimized)
    - 理由: 高速、Vercelとの相性が最高、拡張性あり。
- **Styling**: TailwindCSS (or Vanilla CSS based on user rule, but Next.js defaults to Tailwind often. Will use simple CSS or Tailwind if requested, but Rules say Vanilla preferred unless requested. I'll stick to **Vanilla CSS** for maximum control and vibe compliance).
- **Hosting**: Vercel (for subdomain/custom domain connection).

## 4. MVP機能 (Minimum Viable Product)
1. **トップページ**: 記事本文を表示するLP（ランディングページ）風のレイアウト。
2. **解説セクション**:
    - 準備（AIエディタ）
    - 実践（おみくじアプリを作る例など、元記事の5章相当を汎用化）
    - 公開（世界に見せる）
3. **独自ドメイン設定**: Vercelでのドメイン連携サポート。

## 5. 現在のステップ
- [x] プロジェクトのセットアップ (Next.js or Plain HTML/JS)
- [x] コンテンツの執筆（リライト）
- [x] デザイン実装
- [x] デプロイ & ドメイン設定
- [ ] **Phase 2: インタラクティブ機能（おみくじ）の追加**
    - 記事内で紹介されている「おみくじ」を実際にこのサイトで遊べるようにする。
    - 子供たちに「こんなのが作れるんだ！」と実感してもらう。
