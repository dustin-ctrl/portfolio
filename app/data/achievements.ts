export interface Achievement {
  id: string;
  title: string;
  href: string;
}

// 新しい実績から順に並べる。Helloセクションは先頭の1件を表示する。
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "aws-2026-bset-award",
    title: "広島県 地域創生・社会課題解決AIコンテスト2026 最優秀賞",
    href: "",
  },
  {
    id: "jphacks-2025-sponsor-award",
    title: "JPHACKS 2025 全国大会スポンサー賞",
    href: "https://jphacks.com/2025/result/",
  },
  {
    id: "servicenow-hackathon-2025-special-award",
    title: "ServiceNow Hackathon 2025 審査員特別賞",
    href: "https://www.servicenow.com/jp/events/world-forum/tokyo.html",
  },
  {
    id: "jphacks-2024-2025-local-winner",
    title: "JPHACKS 2024・2025 地方大会優勝",
    href: "https://jphacks.com/information/hackday-result-2024/",
  },
];
