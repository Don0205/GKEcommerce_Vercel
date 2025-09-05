import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '智慧財產權聲明 | GK天堂',
  description: 'GK天堂的智慧財產權聲明 - 了解我們如何保護和尊重知識產權，以及您使用我們網站和服務時的相關權利和責任。',
};

export default function IntellectualProperty() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂智慧財產權聲明</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>GK天堂尊重並保護智慧財產權。本聲明旨在說明我們的智慧財產權政策，以及您在使用我們的網站和服務時應遵守的相關規定。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 版權</h2>
        <p className="mb-4">1.1 網站內容：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>GK天堂網站上的所有內容，包括但不限於文字、圖像、標誌、按鈕圖標、圖片、音頻剪輯、數位下載、數據編輯和軟體，均為 GK天堂 或其內容提供商的財產，受中華民國及國際版權法保護。</li>
          <li>未經 GK天堂 明確書面許可，不得以任何方式複製、複製、修改、出版、傳播、分發、展示、執行、複製、授權、製作衍生作品或出售本網站的任何內容。</li>
        </ul>
        <p className="mb-4">1.2 用戶生成內容：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>用戶在我們的平台上發布的內容（如評論、圖片等），用戶保留其版權，但授予 GK天堂 非獨家、全球性、免版稅、可轉授權的使用權。</li>
          <li>用戶保證其上傳的內容不侵犯任何第三方的智慧財產權。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 商標</h2>
        <p className="mb-4">2.1 GK天堂商標：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>&quot;GK天堂&quot;及相關標誌是 GK天堂 的註冊商標。</li>
          <li>未經 GK天堂 明確書面許可，不得使用這些商標。</li>
        </ul>
        <p className="mb-4">2.2 第三方商標：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們網站上可能出現的其他商標均為其各自所有者的財產。</li>
          <li>提及這些商標並不意味著任何關聯或認可關係。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 專利</h2>
        <p className="mb-4">3.1 GK天堂專利：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>GK天堂 的某些產品和技術可能受到一項或多項專利的保護。</li>
          <li>未經授權，不得使用、複製或模仿這些受專利保護的技術。</li>
        </ul>
        <p className="mb-4">3.2 第三方專利：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們尊重第三方的專利權，並期望我們的用戶和合作夥伴也這樣做。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 授權使用</h2>
        <p className="mb-4">4.1 個人使用：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們授予您有限的、非獨家的、不可轉讓的許可，以個人和非商業目的訪問和使用我們的網站。</li>
          <li>這不包括任何形式的再分發或商業利用我們網站的內容。</li>
        </ul>
        <p className="mb-4">4.2 商業使用：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>如需商業使用我們的內容，請聯繫我們獲取書面許可。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 侵權通知和處理程序</h2>
        <p className="mb-4">5.1 侵權報告：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>如果您認為我們的網站上的內容侵犯了您的智慧財產權，請提交書面通知至我們的指定代理人。</li>
          <li>通知應包含：聲稱被侵權的作品描述、被指控侵權材料的位置、您的聯繫信息、善意聲明以及授權聲明。</li>
        </ul>
        <p className="mb-4">5.2 處理程序：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>收到有效的侵權通知後，我們將及時移除或禁用訪問被指控侵權的材料。</li>
          <li>我們將通知被指控侵權的內容提供者，他們有權提交反通知。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 用戶責任</h2>
        <p className="mb-4">6.1 遵守法律：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>用戶在使用我們的網站和服務時，必須遵守所有適用的智慧財產權法律和法規。</li>
          <li>禁止上傳、分享或以其他方式使用侵犯他人智慧財產權的內容。</li>
        </ul>
        <p className="mb-4">6.2 違規後果：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>違反本聲明可能導致帳戶終止或法律訴訟。</li>
          <li>重複侵權者的帳戶將被永久關閉。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 第三方內容和鏈接</h2>
        <p className="mb-4">7.1 第三方內容：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們的網站可能包含第三方提供的內容或鏈接到第三方網站。</li>
          <li>我們不對這些第三方內容或網站的智慧財產權合規性負責。</li>
        </ul>
        <p className="mb-4">7.2 外部鏈接：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>鏈接到我們網站的外部網站應遵守適用的法律，並不得以任何方式暗示我們的認可或關聯。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 政策更新</h2>
        <p className="mb-4">8.1 修改權：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們保留隨時更新或修改本智慧財產權聲明的權利。</li>
          <li>重大變更將通過網站公告或電子郵件通知。</li>
        </ul>
        <p className="mb-4">8.2 持續使用：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>在更新後繼續使用我們的網站和服務，即表示您接受新的條款。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 聯繫我們</h2>
        <p className="mb-4">如果您對我們的智慧財產權聲明有任何疑問，或需要報告侵權行為，請聯繫我們：</p>
        <p className="mb-4">
          智慧財產權部門郵箱: <a href="mailto:ip@gkheaven.com" className="text-blue-600 hover:underline">ip@gkheaven.com</a><br />
          法務部門電話: +886 2 1234 5679<br />
          地址: 台北市信義區松高路68號 法務部門收<br />
          營業時間: 週一至週五 9:00-18:00 (台北時間)
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">通過使用我們的網站和服務，您確認您已閱讀、理解並同意遵守本智慧財產權聲明。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}