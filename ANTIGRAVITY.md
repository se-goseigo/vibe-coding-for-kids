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
- [x] **Phase 2: インタラクティブ機能（おみくじ）の追加**
- [x] **Phase 3: RPG風ガイドサイト化 & ビジュアル強化**
- [x] **Phase 4: 設定ガイド詳細化 & 画像日本語化**
- [x] **Phase 5: 守りのフェーズ (Security & Legal)**
- [x] **Phase 6: ナビゲーション改善 & コンテンツ完結 (Deploy, Q&A, Ending)**
- [ ] **Phase 7: 全体構成の大改修 (9ステップの冒険)**
    - **コンセプト**: 見習い魔法使いが、ページを進むごとに装備（知識・ツール）を手に入れ、大魔法使いになるRPG。
    - **キャラクター**: 日本のアニメ風の男の子。ページごとに装備が増えていく（固定キャラ）。
    - **ページ構成**:
        1. **Top (`index.html`)**: Vibe Codingとは？ 作れるもの（おみくじDemo）。冒険の始まり。
        2. **Setup (`setup.html`)**: 魔導書（Antigravity）と宝玉（Node.js/Settings）の入手。
        3. **Creation (`creation.html`)**: 魔法の実践。おみくじアプリを作る（コード＆デザイン）。
        4. **MVP (`mvp.html`)**: 魔法の基本心得。小さく作って大きく育てる。
        5. **Defense (`defense.html`)**: 守りの盾。プライバシーポリシーと利用規約。
        6. **Save (`github.html`)**: 記録の魔法。GitHubアカウントと **GitHub CLI** の設定。
        7. **Publish (`deploy.html`)**: 空への解放。Vercelでの公開。
        8. **Q&A (`qa.html`)**: 賢者の知恵。
        9. **Ending (`ending.html`)**: 大魔法使いの誕生。
    - **UI改修**: 画像のアニメーション停止、全ページにホームボタン（ロゴ）設置、ページ下部にも遷移ボタン設置。
    - **Defense改修**: 「守りの三柱（RLS, 規約, HTTPS）」の元文章をそのまま掲載。
    - **新規ページ**: 
        - `deploy.html`: GitHub/Vercelの解説。
        - `qa.html`: Q&Aセクション。
    - **導線**: Setup -> Defense -> Deploy -> Q&A -> Ending の完全なツアー導線を作る。
    - **6章の内容**: アプリを公開する前に必要な「防御（セキュリティ）」と「ルール（規約）」を解説。
    - **RPGテーマ**: 「お城のバリア（RLS）」と「王国の掟（利用規約）」として表現。
    - **成果物**: `defense.html` の作成。AIにこれらの設定を依頼するためのプロンプトも用意。
