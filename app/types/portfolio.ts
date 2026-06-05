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
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  rotateClass: string;
  positionClass: string;
}