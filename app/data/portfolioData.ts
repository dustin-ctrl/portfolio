import { AppProject } from "../types/portfolio";

export const PROJECTS_DATA: AppProject[] = [
  {
    id: "simple-editor",
    platform: ["Desktop"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/simple-editor",
    title: "Simple Editor",
    subtitle: "書くことだけに、集中する。",
    year: "2026",
    role: "個人開発",
    tech: ["Swift", "SwiftUI", "AppKit", "WidgetKit"],
    comments: ["macOS", "個人開発", "レトロUI"],
    overview:
      "思いついた瞬間に書き始められる、macOS向けの軽量テキストエディタです。平成Macintosh風のUIに、TXT・RTF保存、文字装飾、文字数表示、クイックメモWidgetを備えています。",
    problem:
      "多機能なメモアプリよりも、起動してすぐプレーンテキストを書ける軽快な道具が欲しいという個人的な需要から開発しました。",
    architecture:
      "SwiftUIとAppKitで構成したmacOSネイティブアプリです。外部ライブラリを使わず、標準フレームワークだけで軽量に実装しています。",
    highlight:
      "クラシックMacの意匠を保ちながら、ダークモード、RTF書式、選択文字数、Widgetなど現代のmacOSで使いやすい機能を統合しました。",
    imageUrl: "/images/simple-editor-promo.png",
    galleryImages: ["/images/simple-editor-promo.png"],
    showDetails: false,
    duration: "個人開発",
    teamSize: "1名",
    achievement: "macOSアプリ",
    myRoles: ["企画", "UI・UXデザイン", "macOSアプリ実装"],
    contributionRatio: "100%"
  },
  {
    id: "sumahai",
    platform: ["Web"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/smahai-smart-delivery",

    title: "スマ配",
    subtitle: "少しの不在を、再配達にしない。",
    year: "2026",
    role: "チーム開発（3名）",

    tech: [
      "LINE Messaging API",
      "AWS",
      "OpenStreetMap",
      "OSRM",
      "Web Application"
    ],

    comments: [
      "AWSハッカソン",
      "地域課題",
      "配送支援",
      "経路最適化"
    ],

    overview:
      "配達前に受取人の在宅状況をLINEで確認し、その回答に応じて配送順を柔軟に変更する配送支援システムです。不在が確定した住所への無駄な訪問を避けるとともに、短時間の外出であれば帰宅予定を考慮して配達順を調整し、再配達とドライバーの負担を減らします。",

    // 解決した課題・背景
    problem:
      "東広島市役所へのヒアリングを通じて、広島地域では運送業界の人手不足に加え、中山間地域における配送先の分散が、配送効率をさらに低下させていることを知りました。特に再配達では、ドライバーが不在を知らないまま現地を訪問し、荷物を届けられずに持ち帰るという無駄が発生します。一方、受取人側にも、わずかな外出によって荷物を受け取れず、再び配達を待たなければならないという負担がありました。",

    // 実装した主な機能
    features:
      "・配達が近づいた受取人へ、LINEで在宅状況の確認を送信する『配達接近通知』\n・受取人が「在宅」「一時不在」「本日不在」を簡単に回答できる『在宅状況共有』\n・回答内容をドライバー画面へ反映し、可能な範囲で配送順を再計算する『経路変更機能』\n・現在の配送先、到着予定時刻、配送順、地図を確認できる『ドライバー向け管理画面』",

    // 技術的ハイライト
    highlight:
      "既存の日時指定や置き配では対応しにくい、配達直前に発生した短時間の不在に着目しました。受取人が普段利用しているLINEをインターフェースとすることで、専用アプリをインストールする必要がない設計としています。受取人から送信された在宅状況を配送データへ反映し、OSRMとOpenStreetMapを利用して配送順と経路を再計算するプロトタイプを構築しました。",

    // 3つのボックス（課題・実装・効果）
    highlightProblem:
      "ドライバーと受取人の状況が共有されず、不在宅への無駄な訪問や、わずかな外出による再配達が発生している",

    highlightApproach:
      "LINEによる配達接近通知と在宅状況の共有を、ドライバー向け画面および経路変更処理へ連携",

    highlightBenefit:
      "確定した不在先への訪問を避け、一時不在には配送順の変更で対応することで、地域の限られた配送力を有効活用",

    // アーキテクチャ解説
    architecture:
      "受取人との接点にはLINEを利用し、回答された在宅状況をスマ配のバックエンドへ送信します。バックエンドは配送データと回答内容を照合し、必要に応じてOSRMを使って配送順と走行経路を再計算します。計算結果はドライバー向けWeb画面へ反映され、現在の配送先、到着予定時刻、変更後の配送順を確認できる構成です。専用アプリを要求しない受取人側と、配送判断に必要な情報を集約したドライバー側を分離して設計しました。",

    // スマ配の構成図
    architectureFlow: [
      { label: "受取人", type: "user" },
      { label: "LINE", type: "platform" },
      { label: "スマ配 Backend", type: "app" },
      { label: "OSRM / OpenStreetMap", type: "external" },
      { label: "ドライバー画面", type: "platform" }
    ],

    imageUrl: "/images/smahai.png",

    galleryImages: [
      "/videos/sumahai-demo.m4v",
      "/images/sumahai-2.jpg",
      "/images/sumahai-3.jpg"
    ],

    duration: "ハッカソン開発",
    teamSize: "3名",

    achievement:
      "最優秀賞",

    myRoles: [
      "地域課題の調査・整理",
      "サービス企画",
      "UI・UX設計",
      "プロトタイプ開発",
      "デモ動画制作",
      "プレゼン資料制作"
    ],

    contributionRatio: "60%"
  },
  {
    id: "fitlink",
    platform: ["Mobile"],
    status: "ONLINE",
    githubUrl: "https://github.com/yourusername/FitLink",
    title: "ClipGym",
    subtitle: "お家トレーニングをもっと手軽に、継続的に。",
    year: "2026",
    role: "個人開発",
    tech: ["Swift", "SwiftUI", "SwiftData", "AVKit"],
    comments: ["初めてのiOSアプリ","フィットネス", "動画トレーニング"],
    overview: "いつものトレーニング動画を自分好みのコースにまとめ、アプリ内で視聴・ワンタップで記録・いつでも振り返りができる、iOS専用の宅トレ・ジムトレ特化型フィットネスアプリです。",
    // 💡 解決した課題・背景
    problem: "宅トレ動画の視聴において、「YouTubeのプレイリスト等で動画が整理されていない」「動画プレイヤーと記録アプリが連動しておらず、手動記録のハードルが高い」という課題がありました。特にライト層においては、この管理と記録の煩雑さが、トレーニングの継続を阻む最大の要因となっていました。",
    
    // 💡 実装した主な機能
    features: "・お気に入り動画を登録するだけで独自のセットリストを作成できる『コース編成機能』\n・動画を視聴するだけで、画面遷移なく自動で実績が残る『AVKit連動トラッカー』\n・複雑な数値入力を排除し、継続の視認性のみに特化した『アクティビティダッシュボード』",
    
    // 💡 技術的ハイライト（解説文）
    highlight: "継続のハードルを下げるため、手動入力を徹底的に排除し、OS標準の動画再生コンポーネント（AVKit）のシーク状態や再生完了トリガーと連動した自動記録ロジックを構築。また、ライト層が直感的に操作できるよう、ドラムロールとクイックショートカットを融合させた堅牢な『スマートリマインダー』を実装し、多様な画面サイズでのレイアウト崩れを防ぐ設計にしました。",
    
    // 💡 3つのボックス（課題・実装・工夫）
    highlightProblem: "動画管理の形骸化と記録の手間、ストイックな仕組みによるライト層の離脱",
    highlightApproach: "AVKitの再生ステータスとSwiftData（ローカルDB）をシームレスに同期させる自動記録処理",
    highlightBenefit: "『動画を観るだけで記録が終わる』手離れの良さと、操作の迷いをなくしたUIによる継続率の向上",
    
    // 💡 アーキテクチャ解説文
    architecture: "SwiftUIを全面的に採用したモダンな宣言型UIに加え、データ永続化にはApple最新のローカルデータベース『SwiftData』を活用。サーバー不要で高速、かつユーザーのプライバシーに配慮したローカル完結型のデータ保持を実現しています。また、動画再生にはAVKitをネイティブ統合し、外部通信のオーバーヘッドを抑えた低遅延で堅牢なアーキテクチャで設計されています。",
    
    // 💡 1. ClipGymの構成図
    architectureFlow: [
      { label: "User", type: "user" },
      { label: "iOS (AVKit)", type: "platform" },
      { label: "ClipGym (SwiftUI)", type: "app" },
      { label: "SwiftData", type: "external" } // ➔ 現状動いているピュアなローカル完結構成へ
    ],
    imageUrl: "/images/clipgym-2.jpg",
    galleryImages: [
      "/images/clipgym2.jpg",
      "/images/clipfit2.png",
    ],
    duration: "10日",
    teamSize: "個人",
    achievement: "-",
    myRoles: ["企画", "UI・UXデザイン", "iOSアプリ実装"],
    contributionRatio: "100%"
  },
  {
    id: "disaster-nav",
    platform: ["Web"],
    status: "OFFLINE",
    githubUrl: "https://github.com/jphacks/hs_2503",
    demoUrl: "https://drive.google.com/file/d/1tCF61xSyztlCRNxtlMuggq-MODYDm20a/view",
    title: 'hinavi',
    subtitle: "避難をナビする防災アプリ",
    year: "2025",
    role: "ハッカソン開発",
    tech: ["PHP", "MySQL", "Vanilla JS", "Map API", "さくらのレンタルサーバ"],
    comments: ["全国大会出場", "JPHACKS2025"],
    overview: "避難所への経路案内と、災害時の危険箇所をリアルタイムに共有・相互評価できる災害時特化型Webアプリケーション。初めて実際にリリース（現在は閉鎖）したサービスです。",
    problem: "訪日外国人や旅行者が『知らない土地で被災した際、避難場所がわからない』という命に関わる課題。さらに、従来の静的なハザードマップでは、道路の冠水や寸断といった『刻一刻と変わる現場の状況』をリアルタイムに網羅できない点に着想を得ました。そこで、単なる避難所までの経路案内だけでなく、避難者同士が現場の危険情報をマップ上にピン留めして瞬時に共有できる仕組みを目指しました。",
    features: "・Map APIを用いた現在地からの『避難所ルート案内』\n・国土地理院の避難所情報をMap上に投影\n・リアルな地図情報のコメント機能\n・デマ排除のための『情報の信頼性 いいね機能』\n・緊急時利用を想定した『視認性の高いUIデザイン』",
    duration: "2日間+α",
    teamSize: "4名",
    achievement: "全国大会出場",
    myRoles: ["チームリーダー","フロントエンド実装", "Map API連携", "サーバ管理", "DB構築"],
    contributionRatio: "60%",
    highlight: "災害時における『情報の即時共有』と『デマの排除』を両立するロジックを実装。Vanilla JavaScriptによる非同期通信を最適化し、全ユーザーへリロード不要でピン情報を自動更新する仕組みを構築。",
    highlightProblem: "災害時の状況変化とデマの拡散、および外部サービスに依存しない安全な認証・DB管理の構築",
    highlightApproach: "Vanilla JS非同期通信の最適化 ＆ PHPセッション認証 ＆ さくらサーバでのMySQLデータベース管理",
    highlightBenefit: "リロード不要の即時反映と、強固なログイン・ユーザー情報管理を両立したシステムの実現",
    architecture: "一分一秒を争う状況で即座にアクセスできるよう、ブラウザから即座に動く軽量なWeb構成（JS ➔ PHP API ➔ DB）を採用。インフラには『さくらのレンタルサーバ』を使用し、PHPを用いて認証からセッション管理、MySQLデータベースの設計・運用までをすべて自分たちで内製化。",
// 💡 2. hinaviの構成図（インフラのデプロイ関係を正確に表現）
    architectureFlow: [
      { label: "Evacuee", type: "user" },
      { label: "hinavi (Vanilla JS / Frontend)", type: "app" },
      { label: "Sakura Server", type: "platform" }, // ➔ インフラの土台（ここにPHPとMySQLが乗っている）
      { label: "hinavi (PHP API / Backend)", type: "app" },
      { label: "MySQL", type: "external" }
    ],
    imageUrl: "/images/hinavi.jpg", 
    galleryImages: [
      "/images/hinavi2.jpg",         
      "/images/hinavi3.jpg",   
      "/images/hinavi3.png",   
    ],
  },
  {
    id: "musubi-ichi",
    platform: ["ServiceNow","Web"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/musubi-ichi",
    title: '結び市',
    subtitle: "生産者と消費者を結ぶプラットフォーム",
    year: "2025",
    role: "夏季インターンシップ",
    tech: ["ServiceNow", "Client Script", "Flow Designer"],
    comments: ["インターン成果物", "UI/UX"],
    overview: "お米不足問題やフードロス（規格外野菜の廃棄）に着目し、顧客と生産者をなめらかに繋ぐことで、廃棄削減と地域循環を目指したプラットフォームです。",
    problem: "不揃いな野菜などが市場に出回らず破棄されてしまう問題に対し、生産者の「ストーリーや想い」を可視化して直接届ける仕組みを考案。単なるECサイトではなく、消費者が背景を知ることでそもそも廃棄自体を減らす意識を生むアプローチを試みました。",
    features: "・Service Portalを活用した『一目で操作がわかる画面デザイン』\n・生産者の「ストーリーや想い」を届ける『こだわり可視化ページ』\n・ITツールに慣れていない生産者でも直感的に使える『出品・管理ダッシュボード』\n・顧客と生産者をなめらかに繋ぐ『地域循環型マッチング機能』",
    highlight: "ITツールに慣れていない生産者やユーザーでも一目で操作がわかる『Service Portal』の画面デザインを徹底的に作り込みました。インターン内でもページのUI/UXが絶賛され、非常に高い評価を獲得した実績です。",
    highlightProblem: "ITリテラシーが異なる全ユーザーの操作性確保",
    highlightApproach: "Service Portalの徹底したデザインチューニング",
    highlightBenefit: "コードを用いたUI/UXの最大化",
    architecture: "セキュアな会員管理と強固なデータ連携を両立するため、クラウドプラットフォームのServiceNowを採用。App Engineによる堅牢なデータ構造と、Flow Designerによる自動ワークフローをシームレスに結合しています。",
// 💡 3. 結び市の構成図（プロダクト名とServiceNowのコンポーネント役割を統合）
    architectureFlow: [
      { label: "User", type: "user" },
      { label: "ServiceNow", type: "platform" },
      { label: "結び市 (Service Portal / Frontend)", type: "app" },
      { label: "結び市 (Flow Designer / Backend)", type: "app" }
    ],
    imageUrl: "/images/musubi-1.jpg",
    galleryImages: [
      "/images/musubi-2.jpg",         
      "/images/musubi-3.jpg",   
      "/images/musubi-4.jpg",   
    ],
    duration: "1週間",
    teamSize: "2名",
    achievement: "インターン成果物",
    myRoles: ["UI/UXデザイン", "Portal実装"],
    contributionRatio: "90%"
  },
  {
    id: "deposit-system",
    platform: ["Web", "ServiceNow"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/nowReception",
    title: 'now Reception',
    subtitle: "フロント業務改革",
    year: "2025",
    role: "ハッカソン",
    tech: ["ServiceNow", "IntegrationHub", "REST API"],
    comments: ["チームリーダー", "審査員特別賞"],
    overview: "日本の地方における民泊を対象に、海外では一般的な「デポジット（保証金）制度」を自動化し、訪日外国人のマナー問題や人手不足を解決するシステムです。",
    problem: "インバウンド需要の拡大に伴う民泊での外国人マナー問題に対し、抑止力および損害担保として「デポジット（保証金）制度」の自動化を考案。決済プラットフォーム「Stripe」と「ServiceNow」をREST API経由で統合し、宿泊施設側の業務システムとして実装しました。さらに、多言語での日常会話や多様な質問対応が可能なAIエージェントを組み込むことで、完全無人運用でありながらも、外国人利用者の疑問や不安にリアルタイムで寄り添えるハイブリッドなサポートシステムを構築しました。",
    features: "・デポジット（保証金）制度の『完全自動化ワークフロー』\n・外部決済システム「Stripe」と連携した『自動インプット・返金処理ライフサイクル』\n・AIエージェントによる、24時間無人での『多言語インバウンド質問対応・コンシェルジュ機能』",
    highlight: "インバウンドの課題に対し『ITを手段としたデポジット文化の普及』という構造的な解決策を自ら発案。初対面のプロを率いるリーダーとして進行管理を徹底しつつ、REST APIを用いたStripe・ServiceNow間の堅牢なシステムアーキテクチャ設計・高度な実装を自ら主導し、現場で即時実運用が可能なレベルで完遂しました。",
    highlightProblem: "ServiceNowを主戦場とするプロの社会人を相手に、バックグラウンドが異なる初対面チームを1つのゴールへ導く「チームマネジメント」",
    highlightApproach: "超短期開発におけるボトルネックを排除するためアジャイルに進捗を管理しつつ、Stripe連携における決済エラーや例外処理を想定した『疎結合なREST API・エラーハンドリング設計』を主導",
    highlightBenefit: "徹底した進行管理による開発リソースの最大化と、例外処理まで作り込まれた圧倒的な実装クオリティが評価され、審査員特別賞を受賞",
    architecture: "ServiceNowとStripeをREST APIでダイレクトに統合した決済自動化アーキテクチャ。コアであるServiceNowの『IntegrationHub』をハブとしてStripe APIと双方向通信を行い、宿泊予約に連動したデポジットの自動与信（仮売上確保）から、マナーチェック後の『Flow Designer』による返金処理までのライフサイクルを、手動介入なしで完全自動化しました。",
// 💡 4. now Receptionの構成図（ServiceNow・Stripe・GPTの高度なマルチAPI連携を正確に表現）
    architectureFlow: [
      { label: "Guest", type: "user" },
      { label: "ServiceNow", type: "platform" },
      { label: "now Reception (Service Portal / Frontend)", type: "app" },
      { label: "now Reception (IntegrationHub / Backend)", type: "app" },
      { label: "Stripe & OpenAI GPT API", type: "external" } // ➔ 連携している外部APIの存在を明記！
    ],
    imageUrl: "/images/nowreception-1.jpg",
    galleryImages: [    
      "/images/nowreception-2.jpg",
      "/images/nowreception-3.jpg",
      "/images/nowreception-4.jpg",  
    ],
    duration: "1か月",
    teamSize: "5名",
    achievement: "審査員特別賞",
    myRoles: ["チームリーダー", "デポジットシステム構築", "ロジック設計"],
    contributionRatio: "60%"
  },
  {
    id: "subsc-manager",
    platform: ["Mobile"],
    status: "OFFLINE",
    githubUrl: "https://github.com/jphacks/hs_2407",
    title: "SubVision",
    subtitle: "無駄なサブスクを管理するアプリ",
    year: "2024",
    role: "ハッカソン",
    tech: ["Kotlin", "Android Studio"],
    comments: ["初ハッカソン", "地方大会優勝","JPHACKS2024"],
    overview: "ついついサブスクだと財布の紐がゆるくなってしまう事がありませんか？そんな現代の不透明なサブスク代を可視化・最適化するために実装したネイティブアプリケーションです。",
    problem: "「サブスクの月額費用に対して得をしているか分からない」という不満に着目し、全ユーザーの平均利用時間との比較から「自身の損得度」を可視化してフィードバックする機能を実装しました。",
    features: "・現代の不透明な固定費を瞬時に見つめ直す『サブスク代の自動可視化機能』\n・平均利用時間との比較で費用対効果を暴く『損得フィードバックエンジン』\n・ネイティブアプリの特性を活かした『高速かつ堅牢なデータ処理』",
    highlight: "各サブスクサービスの公式APIが存在しない中、OSのデバイス利用ログを代替データとして活用するロジックを実装。当初は全ユーザーの平均利用時間を集計するためサーバースクリプトの実装に挑戦したものの、データ同期と通信処理の課題から断念し、端末ローカル内での解析・シミュレーション機能として具現化しました。マルチデバイス環境におけるデータ網羅性など、今後の拡張性に課題を残しつつも、限られた制約下での実用的な代替アプローチを確立しています。",
    highlightProblem: "公式API不在による利用時間取得の困難、および全体平均集計のためのサーバー実装の壁",
    highlightApproach: "OS利用ログの代替解析、およびサーバー連携断念に伴うローカル完結型ロジックへの切り替え",
    highlightBenefit: "技術的制約の中でデータ活用とモックアップを成立させ『地方大会優勝』",
    architecture: "Android StudioおよびKotlinを採用したAndroidネイティブアプリケーション。当初は全体平均集計のためサーバー同期を検討・検証したものの、ハッカソンの限られた開発期間と通信処理の確実性を考慮し、端末内で完結するローカルファーストな解析・シミュレーション構成へと仕様を最適化しました。",
    architectureFlow: [
    { label: "User", type: "user" },
    { label: "Android OS (デバイス利用ログ保持)", type: "platform" },
    { label: "SubVision (Kotlin / XML Layout)", type: "app" }, // ➔ 期間内の確実性を重視したローカル解析
    { label: "Local Storage (データ解析・保存)", type: "external" }
    ],
    imageUrl: "/images/subvision-1.jpg",
    galleryImages: [    
      "/images/subvision-3.jpg",
      "/images/subvision-2.jpg",
      "/images/subvision-1.jpg",  
    ],
    duration: "2日",
    teamSize: "3名",
    achievement: "地方大会優勝",
    myRoles: ["アイデア企画", "フロントエンド"],
    contributionRatio: "40%"
  }
  ,{
    id: "mt-fuji-system",
    platform: ["Web"],
    status: "OFFLINE",
    githubUrl: "",
    title: "富士山登山管理システム",
    subtitle: "オーバーツーリズムと弾丸登山に挑む",
    year: "2023",
    role: "インターンシップ",
    tech: ["ServiceNow"],
    comments: ["初アプリ開発", "インターンシップ成果物", "社会課題解決"],
    overview: "富士山のオーバーツーリズム（観光公害）および無謀な弾丸登山の危険性を解消するため、ServiceNowを用いて構築した登山管理システムです。予約から誓約書の提出、装備レンタルまでを一元化しました。",
    problem: "富士山における登山者の急増と、軽装備で夜通し登る「弾丸登山」による遭難リスクの深刻化に着目しました。これらを抑制し、安全な登山環境を確保するための管理体制が不足しているという課題を解決します。",
    features: "・登山者情報を一元管理する『オンライン予約・管理システム』\n・遭難リスクを低減するための『装備レンタル・誓約書提出フロー』\n・ServiceNowのワークフローを活かした『手続きの自動化・効率化』",
    highlight: "当時の社会課題であった「弾丸登山」とオーバーツーリズムに対し、ServiceNowを活用して予約から装備確認までを必須化する解決策を提案。実社会の課題に対し、システム開発を通じて具体的な防護策を形にしました。このアイデアは、翌年に実際の行政施策として導入された富士山の規制強化と合致しており、社会実装の視点を持った開発経験となりました。",
    highlightProblem: "富士山の登山者増加による環境破壊と遭難リスク（弾丸登山）の放置",
    highlightApproach: "ServiceNowを用いた登山手続き（予約・誓約書・レンタル）の必須化フロー構築",
    highlightBenefit: "提案した対策が翌年の行政施策と合致し『社会課題への先見性が評価』",
    architecture: "ServiceNowのローコードプラットフォームを採用したWebアプリケーション。登山手続きをデジタルワークフロー化し、予約・誓約・レンタルといった一連のプロセスを管理画面で完結させるアーキテクチャを採用しています。",
    architectureFlow: [
      { label: "User", type: "user" },
      { label: "ServiceNow", type: "platform" },
      { label: "This System (Business Rule / flow designer)", type: "app" }
    ],
    imageUrl: "/images/fuji-1.jpg",
    galleryImages: [    
      "/images/fuji-2.jpg",
      "/images/fuji-3.jpg",
      "/images/fuji-4.jpg",  
    ],
    duration: "2週間",
    teamSize: "2名",
    achievement: "-",
    myRoles: ["システム設計", "ServiceNow実装"],
    contributionRatio: "50%"
  }
];
