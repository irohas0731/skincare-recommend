export type ConcernSet = {
  concern: string;
  desc: string;
  lotion: string;
  serum: string;
  cream: string;
  warning: string;
};

export const sets: ConcernSet[] = [
  {
    concern: "くすみ",
    desc: "透明感が不足している",
    lotion: "グルタチオン アンプル トナー",
    serum: "ダークスポットセラム",
    cream: "プロバイオダーム3D リフティングクリーム",
    warning: "なし、気にせず使おう。",
  },
  {
    concern: "乾燥",
    desc: "カサつき・つっぱり感",
    lotion: "シルク ペプチド EGF スムージングトナー",
    serum: "PDRN ヒアルロン酸カプセル100セラム",
    cream: "ブルービーン B5-PDRN マイルドクリーム",
    warning: "なし、気にせず使おう。",
  },
  {
    concern: "開き毛穴",
    desc: "毛穴の開きが気になる",
    lotion: "PDRN 100 ヒアルロン酸 ブースタートナー",
    serum: "アゼライン酸15 インテンスカーミングセラム",
    cream: "ブルービーン B5-PDRN マイルドクリーム",
    warning:
      "アゼライン酸は効果が強めのため、乾燥肌の人はスポット使い推奨。朝使う場合は日焼け対策をしっかりと。",
  },
  {
    concern: "黒ずみ毛穴",
    desc: "黒ずみ毛穴が気になる",
    lotion: "PDRN 100 ヒアルロン酸 ブースタートナー",
    serum: "RX ザ・ビタミン C23 セラム",
    cream: "ブルービーン B5-PDRN マイルドクリーム",
    warning:
      "メディキューブのゼロ毛穴クレイパックを週に2日ほど取り入れるとなお効果的。",
  },
  {
    concern: "ニキビ",
    desc: "吹き出物が気になる",
    lotion: "ティーツリーシカスージングトナー",
    serum: "ジンクテカBセラム",
    cream: "セラミドパンテノール モイスチャーバリアクリーム",
    warning: "ニキビができた？どんどん使おう。",
  },
  {
    concern: "色素沈着",
    desc: "シミ・色素沈着が気になる",
    lotion: "リードルショット S300",
    serum: "ビタミンC アスタキサンチンセラム",
    cream: "PDRN＋カプセルクリーム",
    warning:
      "リードルショットS○○ は、美容針の本数。慣れてない方は少なめから始めるのがベスト",
  },
  {
    concern: "エイジング",
    desc: "しわ・たるみ・ハリ不足",
    lotion: "PDRN 100 ヒアルロン酸 ブースタートナー",
    serum: "レチノール0.3ナイアシンリニューイングセラム",
    cream: "プロバイオダーム3D リフティングクリーム",
    warning:
      "レチノールは、A反応（好転反応）が出る場合があるので、週2〜3日使用して徐々に肌を慣らしていく。過剰な反応が出たら使用を控えること。朝使うのは禁止。",
  },
];
