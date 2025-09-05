import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '使用條款 | GK天堂',
  description: 'GK天堂的使用條款 - 了解使用我們服務的條件和規則,包括帳戶使用、知識產權、免責聲明等重要信息。',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂使用條款</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>歡迎來到GK天堂。請仔細閱讀以下條款和條件,因為它們適用於您對我們網站的訪問和使用,以及我們提供的任何相關服務。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 接受條款</h2>
        <p className="mb-4">通過訪問或使用GK天堂網站(以下簡稱"網站"),您同意受這些使用條款(以下簡稱"條款")的約束。如果您不同意這些條款的任何部分,則您可能無法使用我們的服務。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 帳戶註冊與使用</h2>
        <p className="mb-4">2.1 您可能需要創建一個帳戶才能使用我們網站的某些功能。您同意提供準確、完整和最新的註冊信息。</p>
        <p className="mb-4">2.2 您負責維護您帳戶的機密性,包括但不限於您的密碼,並且您同意對您帳戶下發生的所有活動負全部責任。</p>
        <p className="mb-4">2.3 如果您發現任何未經授權使用您帳戶的情況,您同意立即通知GK天堂。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 產品信息與訂單</h2>
        <p className="mb-4">3.1 我們努力確保網站上的所有產品信息和描述準確無誤。然而,我們不保證所有信息的完整性、準確性、可靠性、適用性或可用性。</p>
        <p className="mb-4">3.2 產品的顏色和尺寸可能因屏幕設置和測量方法而略有不同。</p>
        <p className="mb-4">3.3 我們保留隨時更改產品規格和價格的權利,恕不另行通知。</p>
        <p className="mb-4">3.4 下訂單即表示您同意支付所列的全部費用,包括運費和稅費(如適用)。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 知識產權</h2>
        <p className="mb-4">4.1 網站上的所有內容,包括但不限於文本、圖形、標誌、按鈕圖標、圖像、音頻剪輯、數字下載和軟件,均為GK天堂或其內容提供商的財產,受版權法和國際條約規定的保護。</p>
        <p className="mb-4">4.2 未經GK天堂明確書面許可,您不得複製、複製、修改、出版、傳播、轉讓、出售或以其他方式利用網站上的任何材料。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 用戶行為</h2>
        <p className="mb-4">5.1 您同意不會使用網站進行任何非法或未經授權的目的。</p>
        <p className="mb-4">5.2 您不得發布、上傳或分享任何誹謗、侮辱、色情、威脅或其他非法內容。</p>
        <p className="mb-4">5.3 您不得試圖獲取對網站或相關系統的未經授權的訪問。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 免責聲明</h2>
        <p className="mb-4">6.1 GK天堂的服務按"原樣"和"可用"的基礎提供,不提供任何明示或暗示的保證。</p>
        <p className="mb-4">6.2 我們不保證網站將始終可用、無錯誤或安全。</p>
        <p className="mb-4">6.3 您使用本網站的風險完全由您自己承擔。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 責任限制</h2>
        <p className="mb-4">7.1 在法律允許的最大範圍內,GK天堂及其員工、管理人員、董事、代理人或附屬公司均不對任何直接、間接、附帶、特殊、後果性或懲罰性損害負責。</p>
        <p className="mb-4">7.2 這包括但不限於因使用或無法使用我們的服務而導致的利潤損失、商譽損失、數據損失或其他無形損失。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 適用法律</h2>
        <p className="mb-4">8.1 這些條款受中華民國法律管轄,並根據其解釋,不考慮法律衝突原則。</p>
        <p className="mb-4">8.2 任何因這些條款引起或與之相關的爭議應提交至台灣台北地方法院作為第一審管轄法院。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 條款變更</h2>
        <p className="mb-4">9.1 我們保留隨時修改這些條款的權利。重大更改將通過網站通知或電子郵件通知。</p>
        <p className="mb-4">9.2 您繼續使用網站將被視為接受修改後的條款。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. 聯繫我們</h2>
        <p className="mb-4">如果您對這些使用條款有任何疑問,請通過以下方式與我們聯繫:</p>
        <p className="mb-4">
          電子郵件: <a href="mailto:support@gkheaven.com" className="text-blue-600 hover:underline">support@gkheaven.com</a><br />
          地址: 台北市信義區松高路68號
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">通過使用我們的網站,您確認您已閱讀、理解並同意遵守這些使用條款。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}