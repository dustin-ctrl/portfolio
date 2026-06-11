// app/types/portfolio.ts

// app/types/portfolio.ts
export interface AppProject {
  id: string;
  platform: ("Web" | "ServiceNow" | "Mobile" | "Art")[];
  status: "ONLINE" | "OFFLINE";
  linkUrl?: string; // ONLINEの場合の、実際に触れるURL
  githubUrl?: string; 
  title: string;
  year: string;
  role: string;
  tech: string[]; // 詳細モーダルの中でのみ使用
  comments: string[]; // 表紙の下部にハッシュタグ形式で表示
  overview: string;
  problem: string;
  architecture: string;
  highlight: string;
  imageUrl: string; // 表紙用のメイン画像
  galleryImages: string[]; // モーダル内のスライダー等で使用する画像配列（1枚の場合も同じパスを複数入れる運用）

  // 📜 既存の規約・ポリシー周りのURL
  termsUrl?: string;   // 利用規約用のオプショナルなURL（/terms など）
  privacyUrl?: string; // プライバシーポリシー用のオプショナルなURL（/privacy など）

  // 💡 ─── 採用担当者・エンジニアの視線を奪うケーススタディ用フィールド ───
  demoUrl?: string;           // デモ動画（YouTube等）用のオプショナルなURL
  features?: string;          // 主な機能（箇条書きテキスト）
  duration?: string;          // 開発規模：期間（例: "3日間", "2ヶ月"）
  teamSize?: string;          // 開発規模：人数（例: "4名", "個人開発"）
  achievement?: string;       // 開発規模：成果・実績（例: "全国大会出場", "20万PV達成"）
  myRoles?: string[];         // 自分がやったこと：具体的な担当（例: ["フロントエンド", "UIデザイン"]）
  contributionRatio?: string; // 自分がやったこと：担当割合（例: "70%", "100%"）
  
  // Engineering Highlight の3段構造化データ
  highlightProblem?: string;  // 技術的工夫：直面した深い課題・背景
  highlightApproach?: string; // 技術的工夫：採用した技術的アプローチ
  highlightBenefit?: string;  // 技術的工夫：それによって得られた結果・メリット
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  rotateClass: string;
  positionClass: string;
}