import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '運送政策 | GK天堂',
  description: 'GK天堂的運送政策 - 了解我們的運送方式、費用、時間以及國際運送相關信息。',
};

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂運送政策</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>在GK天堂,我們致力於為您提供優質的運送服務,確保您的訂單安全、及時地送達。本政策概述了我們的運送方式、費用、時間以及其他相關信息。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 運送方式</h2>
        <p className="mb-4">1.1 國內運送：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>標準運送：適用於大多數訂單,通常在3-5個工作日內送達。</li>
          <li>快速運送：1-2個工作日內送達（僅限特定地區）。</li>
          <li>超值運送：適用於不急需的訂單,通常在5-7個工作日內送達。</li>
        </ul>
        <p className="mb-4">1.2 國際運送：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>標準國際運送：通常在10-15個工作日內送達。</li>
          <li>快速國際運送：通常在5-7個工作日內送達（僅限特定國家/地區）。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 運送費用</h2>
        <p className="mb-4">2.1 國內運送費用：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>標準運送：訂單金額NT$1,500以上免運費,低於NT$1,500收取NT$150運費。</li>
          <li>快速運送：基本費用NT$250,訂單金額每增加NT$1,000加收NT$50。</li>
          <li>超值運送：統一收取NT$100運費。</li>
        </ul>
        <p className="mb-4">2.2 國際運送費用：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>根據目的地國家/地區和包裹重量計算。</li>
          <li>詳細費用將在結賬時顯示。</li>
        </ul>
        <p className="mb-4">2.3 特殊情況：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>偏遠地區可能需要額外的運費。</li>
          <li>大型或超重商品可能有額外的處理費。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 運送時間</h2>
        <p className="mb-4">3.1 訂單處理時間：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>大多數訂單在1-2個工作日內處理。</li>
          <li>定制或預訂商品可能需要額外的處理時間。</li>
        </ul>
        <p className="mb-4">3.2 運送時間：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>運送時間從訂單發貨後開始計算。</li>
          <li>實際送達時間可能因天氣、海關檢查等因素而有所不同。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 國際運送</h2>
        <p className="mb-4">4.1 可運送國家/地區：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們目前向大多數國家和地區提供國際運送服務。</li>
          <li>某些國家/地區可能有運送限制,請在結賬時查看。</li>
        </ul>
        <p className="mb-4">4.2 關稅和稅費：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>國際訂單可能需要支付額外的關稅和稅費。</li>
          <li>這些費用由客戶承擔,不包含在我們的運費中。</li>
        </ul>
        <p className="mb-4">4.3 國際運送限制：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>某些商品可能受到目的地國家/地區的進口限制。</li>
          <li>客戶有責任了解並遵守目的地國家/地區的進口法規。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 訂單追蹤</h2>
        <p className="mb-4">5.1 追蹤信息：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>所有訂單發貨後,您將收到一封包含追蹤號碼的電子郵件。</li>
          <li>您可以在我們的網站上使用此號碼查看訂單狀態。</li>
        </ul>
        <p className="mb-4">5.2 更新頻率：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>追蹤信息通常每24-48小時更新一次。</li>
          <li>國際訂單的更新可能不太頻繁。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 運送問題</h2>
        <p className="mb-4">6.1 丟失或損壞的包裹：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>如果您的包裹丟失或在運送過程中損壞,請立即聯繫我們的客戶服務。</li>
          <li>我們將與運送公司合作解決問題,並在必要時安排重新發貨或退款。</li>
        </ul>
        <p className="mb-4">6.2 延遲送達：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>如果您的訂單超過預期送達時間,請查看追蹤信息或聯繫我們。</li>
          <li>我們將調查延遲原因並提供解決方案。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 特殊運送要求</h2>
        <p className="mb-4">7.1 禮品包裝：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們提供禮品包裝服務,費用為每件商品NT$50。</li>
          <li>禮品包裝選項可在結賬時選擇。</li>
        </ul>
        <p className="mb-4">7.2 指定送貨日期：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>如需指定送貨日期,請在下單時在備註欄中說明。</li>
          <li>我們將盡力滿足您的要求,但不能保證所有情況下都能做到。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 運送合作夥伴</h2>
        <p className="mb-4">我們與多家知名運送公司合作,包括但不限於：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>國內：中華郵政、黑貓宅急便、新竹物流</li>
          <li>國際：DHL、FedEx、UPS</li>
        </ul>
        <p className="mb-4">具體使用哪家運送公司將根據您的位置和所選的運送方式而定。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 聯繫我們</h2>
        <p className="mb-4">如果您對我們的運送政策有任何疑問,或需要關於您訂單運送的幫助,請隨時聯繫我們：</p>
        <p className="mb-4">
          電子郵件: <a href="mailto:shipping@gkheaven.com" className="text-blue-600 hover:underline">shipping@gkheaven.com</a><br />
          客服熱線: +886 2 1234 5678<br />
          營業時間: 週一至週五 9:00-18:00 (台北時間)
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">我們保留隨時更新或修改此運送政策的權利。任何更改將在本頁面上發布。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}