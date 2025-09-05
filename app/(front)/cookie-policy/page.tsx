import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie 政策 | GK天堂',
  description: 'GK天堂的 Cookie 政策 - 了解我們如何使用 Cookie 和類似技術來改善您的購物體驗。',
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂 Cookie 政策</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>歡迎閱讀 GK天堂的 Cookie 政策。本政策旨在說明我們如何使用 Cookie 和類似技術，以及您如何控制這些技術的使用。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 什麼是 Cookie？</h2>
        <p className="mb-4">Cookie 是網站存儲在您設備上的小型文本文件。它們被廣泛用於使網站運作或更有效率，並為網站所有者提供信息。Cookie 可能來自我們的網站（第一方 Cookie）或來自其他網站（第三方 Cookie）。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 我們使用的 Cookie 類型</h2>
        <p className="mb-4">2.1 必要的 Cookie：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>這些 Cookie 對於網站的正常運作至關重要，無法在我們的系統中關閉。</li>
          <li>例如，用於記住您的登錄狀態或購物車內容的 Cookie。</li>
        </ul>
        <p className="mb-4">2.2 功能性 Cookie：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>這些 Cookie 使我們能夠記住您的偏好設置，如語言選擇或地區。</li>
          <li>它們提高了網站的個人化體驗。</li>
        </ul>
        <p className="mb-4">2.3 分析性 Cookie：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>這些 Cookie 幫助我們了解訪客如何使用我們的網站。</li>
          <li>我們使用這些信息來改進網站的性能和用戶體驗。</li>
        </ul>
        <p className="mb-4">2.4 廣告 Cookie：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>這些 Cookie 用於向您展示相關的廣告。</li>
          <li>它們也有助於衡量營銷活動的效果。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 我們如何使用 Cookie</h2>
        <p className="mb-4">我們使用 Cookie 和類似技術來：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>記住您的登錄狀態和購物車內容</li>
          <li>了解和保存您的偏好設置</li>
          <li>收集有關網站使用情況的統計數據</li>
          <li>個性化您的購物體驗</li>
          <li>協助我們改進網站</li>
          <li>為您提供相關的廣告</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 第三方 Cookie</h2>
        <p className="mb-4">我們的網站上有一些 Cookie 來自第三方服務提供商，例如：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Google Analytics：用於網站分析</li>
          <li>Facebook Pixel：用於廣告和再營銷</li>
          <li>支付處理商：用於處理交易</li>
        </ul>
        <p className="mb-4">這些第三方可能會將信息與他們從其他網站收集的信息結合使用。我們建議您查看這些第三方的隱私政策以了解更多信息。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 管理 Cookie 偏好</h2>
        <p className="mb-4">5.1 瀏覽器設置：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>您可以通過更改瀏覽器設置來管理 Cookie。</li>
          <li>大多數瀏覽器允許您查看、刪除或阻止 Cookie。</li>
        </ul>
        <p className="mb-4">5.2 我們的 Cookie 設置：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>在您首次訪問我們的網站時，我們會請求您的 Cookie 偏好。</li>
          <li>您可以隨時通過網站底部的「Cookie 設置」鏈接更改您的選擇。</li>
        </ul>
        <p className="mb-4">請注意，禁用某些 Cookie 可能會影響網站的功能和您的用戶體驗。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 其他追蹤技術</h2>
        <p className="mb-4">除了 Cookie，我們還可能使用其他類似的技術：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>網絡信標（Web Beacons）：用於了解用戶行為和衡量營銷活動效果。</li>
          <li>像素標籤（Pixel Tags）：用於追蹤網站訪問和廣告效果。</li>
          <li>本地存儲（Local Storage）：用於存儲較大量的數據以提高網站性能。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 數據保護</h2>
        <p className="mb-4">我們通過 Cookie 收集的所有信息都受到我們隱私政策的保護。我們採取適當的安全措施來保護這些數據免受未經授權的訪問、使用或披露。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 政策更新</h2>
        <p className="mb-4">我們可能會不時更新此 Cookie 政策以反映我們使用 Cookie 的變化。任何更改都將在本頁面上發布，如有重大變更，我們會通過網站通知或電子郵件通知您。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 聯繫我們</h2>
        <p className="mb-4">如果您對我們的 Cookie 政策有任何疑問或需要更多信息，請聯繫我們：</p>
        <p className="mb-4">
          電子郵件: <a href="mailto:privacy@gkheaven.com" className="text-blue-600 hover:underline">privacy@gkheaven.com</a><br />
          客戶服務熱線: +886 2 1234 5678<br />
          地址: 台北市信義區松高路68號<br />
          營業時間: 週一至週五 9:00-18:00 (台北時間)
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">通過繼續使用我們的網站，您同意我們按照本政策使用 Cookie。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}