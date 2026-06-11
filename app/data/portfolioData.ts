import { AppProject } from "../types/portfolio";

export const PROJECTS_DATA: AppProject[] = [
    {
    id: "fitlink",
    platform: ["Mobile"],
    status: "OFFLINE",
    githubUrl: "https://github.com/yourusername/FitLink",
    title: "ClipGym",
    year: "2026",
    role: "個人開発",
    tech: ["Swift", "SwiftUI", "SwiftData", "AVKit", "StoreKit 2"],
    comments: ["初めてのIOSアプリ","フィットネス", "動画連動型"],
    overview: "「動画を見ながら運動する」という現代の宅トレ・ジムトレスタイルに特化した、iOS用フィットネスアプリ。ただ動画を流すだけでなく、ユーザーが自身のオリジナルメニューやトレーニングコースをシームレスに管理・記録できる体験を提供します。",
    // 03. PROJECT OVERVIEW 用のデータ
    problem: "YouTubeなどの動画を見ながら筋トレやストレッチをする際、「どの動画をどの順番で、何分間やるか」の管理が難しく、毎回アプリを行き来する手間にストレスがありました。また、一般的なフィットネスアプリは機能や色彩が過多で、毎日スマートに継続したくなるような、大人のガジェット感に馴染む美しいUIデザインの選択肢が不足していました。",
    features: "・動画を見ながらトレーニングできる『AVKitプレイヤー連動型トラッカー』\n・自分だけのオリジナルメニューを作れる『トレーニングコース管理システム』\n・画面崩れを絶対に起こさない『スマートリマインダー（ホイールUI型）』\n・最新ローカルDB『SwiftData』を活用した『完全サーバーレス・高速記録』",
    // 04. ENGINEERING HIGHLIGHT 用のデータ
    highlight: "ディープ・アイスブルーを基調とした、サイバー感と高級スポーツブランドのような洗練さを融合したダークテーマUI。iPhone標準のドラムロールとクイックショートカットを融合させた、絶対に画面崩れを起こさない頑丈な『スマートリマインダー』。そして、洗練されたアプリアイコンとアプリ内デザインが見事にシンクロする、一貫したブランド体験が最大の強みです。",
    highlightProblem: "アプリ切り替えの手間と、毎日継続したくなるデザインの欠如",
    highlightApproach: "SwiftUIによる洗練されたダークテーマUI & ローカルDB化",
    highlightBenefit: "行き来ゼロのシームレスな運動記録と極上のガジェット感の実現",
    // 05. SYSTEM ARCHITECTURE 用のデータ
    architecture: "SwiftUIを全面的に採用したモダンな宣言型UIに加え、データの永続化にはiOS最新のローカルデータベース『SwiftData』を活用。サーバー不要で高速かつプライバシーに配慮したデータ保持を実現しています。また、動画再生にはAVKit、将来的なマネタイズ（テーマ解放やコース制限解除）を見据えて最新のStoreKit 2を組み込める拡張性の高いアーキテクザで設計されています。",
    imageUrl: "/images/fitgym1.png",
    galleryImages: [
      "/images/clipfit2.png",
      "/images/clipfit2.png",
      "/images/clipfit2.png",
    ],
    duration: "個人開発",
    teamSize: "1名 (個人)",
    achievement: "iOSアプリ",
    myRoles: ["企画", "UI・UXデザイン", "iOSアプリ実装"],
    contributionRatio: "100%",
    termsUrl: "/terms", 
    privacyUrl: "/privacy"
  },
{
    id: "disaster-nav",
    platform: ["Web"],
    status: "OFFLINE",
    linkUrl: "https://hinavi.example.com",
    githubUrl: "https://github.com/jphacks/hs_2503",
    demoUrl: "https://drive.google.com/file/d/1tCF61xSyztlCRNxtlMuggq-MODYDm20a/view",
    title: '避難をナビする防災アプリ「hinavi」',
    year: "2025",
    role: "ハッカソン開発",
    tech: ["PHP", "MySQL", "Vanilla JS", "Map API", "さくらのレンタルサーバ"],
    comments: ["ハッカソン2連覇", "全国大会出場", "リベンジ達成"],
    
    // ① 一言説明（キャッチコピー）
    overview: "避難所への経路案内と、災害時の危険箇所をリアルタイムに共有・相互評価できる災害時特化型Webアプリケーション",
    
    // ② 解決した課題・背景
    problem: "訪日外国人や旅行者が『知らない土地で被災した際、避難場所がわからない』という命に関わる課題。さらに、従来の静的なハザードマップでは、道路の冠水や寸断といった『刻一刻と変わる現場の状況』をリアルタイムに網羅できない点に着想を得ました。そこで、単なる経路案内だけでなく、避難者同士が現場の危険情報をマップ上にピン留めして瞬時に共有できる仕組みを目指しました。",
    
    // ③ 主な機能（実態に合わせ、ログイン・DB管理を反映）
    features: "・Map APIを用いた現在地からの『避難所ルート案内』\n・リロード不要の『危険箇所リアルタイムマッピング』\n・さくらサーバー×PHPでスクラッチ実装した『セキュアなログイン・ユーザー情報管理』\n・デマ排除のための『情報の信頼性 いいね機能』＆ 誤タップを防ぐ『視認性を高めたUIデザイン』",
    
    // ④ 開発規模・成果（数字で示すエリア用）
    duration: "2日間+α",
    teamSize: "4名",
    achievement: "全国大会出場",

    // ⑤ 自分がやったこと（★インフラ・バックエンド構築の強みをフロントの役割にブレンドして具体化）
    myRoles: ["チームリーダー","フロントエンド実装", "Map API連携", "サーバ管理", "DB構築"],
    contributionRatio: "60%",

    // ⑥ 技術的な工夫（Engineering Highlightを3段構造化 ★バックエンドの執念をマージ）
    highlight: "極限状態の災害時における『情報の即時共有』と『デマの排除』を両立するロジックを実装。Vanilla JavaScriptによる非同期通信を最適化し、全ユーザーへリロード不要でピン情報を自動更新する仕組みを構築。さらに、さくらのレンタルサーバの環境構築から、PHPによるセキュアなログイン情報管理・MySQLでのデータベース構築までを自ら一貫して担当。前年の『実装不完全で全国を逃した悔しさ』をバネに、フロントの美しさだけでなく、裏側のインフラからデータ管理にまで執念を燃やして完成度を極限まで高めたプロダクトです。",
    highlightProblem: "災害時の状況変化とデマの拡散、および外部サービスに依存しない安全な認証・DB管理の構築",
    highlightApproach: "Vanilla JS非同期通信の最適化 ＆ PHPセッション認証 ＆ さくらサーバでのMySQLデータベース直接管理",
    highlightBenefit: "リロード不要の即時反映と、強固なログイン・ユーザー情報管理を両立したシステムの実現",

    // ⑦ アーキテクチャ補足説明（★説得力抜群のフルスタック構成にリライト）
    architecture: "一分一秒を争う状況で即座にアクセスできるよう、ブラウザから即座に動く軽量なWeb構成（JS ➔ PHP API ➔ DB）を採用。インフラには『さくらのレンタルサーバ』を使用し、PHPを用いて認証からセッション管理、MySQLデータベースの設計・運用までをすべて自分たちで内製化。無駄のないシンプルなリレーショナルデータ構造で、アクセス集中時でも高速に応答するバックエンドを設計しました。",
    
    imageUrl: "/images/hinavi.png", 
    galleryImages: [
      "/images/hinavi2.png",         
      "/images/hinavi3.png",   
      "/images/hinavi4.png",   
    ],
  },
  {
    id: "musubi-ichi",
    platform: ["Web", "ServiceNow"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/musubi-ichi",
    title: '生産者と消費者を結ぶ「結び市」',
    year: "2025",
    role: "夏季インターンシップ",
    tech: ["ServiceNow", "App Engine", "Flow Designer"],
    comments: ["インターン成果物", "UI/UX"],
    overview: "お米不足問題やフードロス（規格外野菜の廃棄）に着目し、顧客と生産者をなめらかに繋ぐことで、廃棄削減と地域循環を目指したプラットフォームです。",
    // 03. PROJECT OVERVIEW 用のデータ
    problem: "不揃いな野菜などが市場に出回らず破棄されてしまう問題に対し、生産者の「ストーリーや想い」を可視化して直接届ける仕組みを考案。単なるECサイトではなく、消費者が背景を知ることでそもそも廃棄自体を減らす意識を生むアプローチを試みました。",
    features: "・Service Portalを活用した『一目で操作がわかる画面デザイン』\n・生産者の「ストーリーや想い」を届ける『こだわり可視化ページ』\n・ITツールに慣れていない生産者でも直感的に使える『出品・管理ダッシュボード』\n・顧客と生産者をなめらかに繋ぐ『地域循環型マッチング機能』",
    // 04. ENGINEERING HIGHLIGHT 用のデータ
    highlight: "ITツールに慣れていない生産者やユーザーでも一目で操作がわかる『Service Portal』の画面デザインを徹底的に作り込みました。インターン内でもページのUI/UXが絶賛され、非常に高い評価を獲得した実績です。",
    highlightProblem: "ITリテラシーが異なる全ユーザーの操作性確保",
    highlightApproach: "Service Portalの徹底したデザインチューニング",
    highlightBenefit: "絶賛されるUI/UXと操作迷子の完全ゼロ化",
    // 05. SYSTEM ARCHITECTURE 用のデータ
    architecture: "セキュアな会員管理と強固なデータ連携を両立するため、クラウドプラットフォームのServiceNowを採用。App Engineによる堅牢なデータ構造と、Flow Designerによる自動ワークフローをシームレスに結合しています。",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "/images/hinavi.png",         
      "/images/hinavi.png",   
      "/images/hinavi.png",   
    ],
    // 共通インフラ（拡張領域）
    duration: "数週間",
    teamSize: "複数名",
    achievement: "インターン成果物",
    myRoles: ["UI/UXデザイン", "Portal実装"],
    contributionRatio: "90%"
  },
  {
    id: "deposit-system",
    platform: ["Web", "ServiceNow"],
    status: "OFFLINE",
    githubUrl: "https://github.com/dustin-ctrl/nowReception",
    title: '「now Reception」 ~フロント業務改革~',
    year: "2025",
    role: "ハッカソン",
    tech: ["ServiceNow", "IntegrationHub", "REST API"],
    comments: ["チームリーダー", "公式ハッカソンブログ賞", "地方課題解決"],
    overview: "日本の地方における民泊を対象に、海外では一般的な「デポジット（保証金）制度」を自動化し、訪日外国人のマナー問題や人手不足を解決するシステムです。",
    // 03. PROJECT OVERVIEW 用のデータ
    problem: "プロのパートナー企業がひしめくServiceNow公式ハッカソンにおいて、唯一の学生チームとして参戦。全くの初対面のメンバーと行う初めての開発で、リーダーとして進捗管理やタスク分散に非常に苦労しながらも、強固なワークフローを構築。結果、全体9位という健チルを見せました。",
    features: "・海外で一般的なデポジット（保証金）制度の『完全自動化ワークフロー』\n・スマート回収ボックス（IoT）との『リアルタイム施錠・解錠同期』\n・外部決済システムと連携した『自動インプット・返金処理ライフサイクル』\n・外国人観光客にも対応した『マルチランゲージ対応フロントUI』",
    // 04. ENGINEERING HIGHLIGHT 用のデータ
    highlight: "プロのエンジニアを相手に、学生ならではの「地方課題への着眼点」と「徹底したロジック」で堂々と渡り合えることを証明したマイルストーンです。審査員からも高評価を獲得して『ブログ賞』を受賞しました。",
    highlightProblem: "プロが集うハッカソンでの開発と初対面チームの牽引",
    highlightApproach: "IntegrationHubを活用したAPIドリブン開発",
    highlightBenefit: "全体9位の快挙達成と『公式ブログ賞』獲得",
    // 05. SYSTEM ARCHITECTURE 用のデータ
    architecture: "スマート回収ボックス（IoT）や外部決済システムとのリアルタイム同期を想定し、IntegrationHub（REST API）とFlow Designerをフル活用。インプットから返金処理までのライフサイクルを自動化しました。",
    imageUrl: "/images/nowreception1.png",
    galleryImages: [    
      "/images/nowreception2.png",
      "/images/nowreception3.png",
      "/images/nowreception4.png",  
    ],
    duration: "数日間",
    teamSize: "5名",
    achievement: "ブログ賞 / 9位",
    myRoles: ["チームリーダー", "進捗管理", "ロジック設計"],
    contributionRatio: "60%"
  },
  {
    id: "subsc-manager",
    platform: ["Mobile"],
    status: "OFFLINE",
    githubUrl: "https://github.com/jphacks/hs_2407",
    title: "サブスク管理アプリ「SubVision」",
    year: "2024",
    role: "ハッカソン",
    tech: ["Kotlin", "Android Studio"],
    comments: ["初ハッカソン", "広島大会優勝"],
    overview: "初めて出場したハッカソンで、現代の不透明な固定費（サブスク代）を可視化・最適化するために実装したネイティブアプリケーションです。",
    // 03. PROJECT OVERVIEW 用のデータ
    problem: "課題感の鋭さと目の付け所が圧倒的に評価され、初出場にして「ハッカソン広島大会優勝」という快挙を達成。一方で時間内の実装が完全ではなく、全国大会への切符を逃すという、エンジニア人生で最も強烈な「悔しさ」を味わった原点のアプリです。",
    features: "・現代の不透明な固定費を瞬時に見つめ直す『サブスク代の自動可視化機能』\n・無駄な固定費を削減するための『最適化シミュレーションエンジン』\n・ネイティブアプリの特性を活かした『高速かつ堅牢なデータ処理』\n・次回決済日をユーザーに通知する『自動アラート・リマインダーシステム』",
    // 04. ENGINEERING HIGHLIGHT 用のデータ
    highlight: "アイデアを形にする『実装力』の重要性を骨身に染みて理解した、自身のエンジニアリングのターニングポイントです。この時の悔しさが、その後のモダンWebやServiceNowのスキルを爆発的に引き上げるトリガーとなりました。",
    highlightProblem: "限られた時間内でのアイデアの完全具現化不足",
    highlightApproach: "Android Studioを用いたKotlinネイティブ実装",
    highlightBenefit: "初ハッカソンにして『広島大会優勝』の快挙",
    // 05. SYSTEM ARCHITECTURE 用のデータ
    architecture: "Androidネイティブならではの高速な動作と強固な安全性を最優先し、言語にはKotlinを全面採用。無駄のないスリムなコンポーネント構造で、ローカルファーストな軽量設計を意識しています。",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "/images/subvision1.png",          
    ],
    duration: "数日間",
    teamSize: "複数名",
    achievement: "広島大会優勝",
    myRoles: ["アイデア企画", "Android実装"],
    contributionRatio: "40%"
  }
];
