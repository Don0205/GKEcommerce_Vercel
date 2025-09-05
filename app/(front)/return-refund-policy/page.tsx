import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '退貨和退款政策 | GK天堂',
  description: 'GK天堂的退貨和退款政策 - 了解我們的退貨流程、退款條件以及相關規定。',
};

export default function ReturnRefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂退貨和退款政策</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>在GK天堂,我們致力於確保您對購買的每一件商品都感到滿意。我們理解有時您可能需要退回商品或申請退款。本政策旨在說明我們的退貨和退款流程。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 退貨條件</h2>
        <p className="mb-4">1.1 退貨期限：自收到商品之日起14天內。</p>
        <p className="mb-4">1.2 商品狀態要求：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>商品必須未使用、未組裝且保持原始包裝完整。</li>
          <li>所有標籤和防偽標記必須完好無損。</li>
          <li>商品不得有任何損壞、污漬或異味。</li>
        </ul>
        <p className="mb-4">1.3 不可退貨商品：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>已開封或使用的商品（除非有製造缺陷）。</li>
          <li>個人衛生用品。</li>
          <li>定制或特別訂製的商品。</li>
          <li>已組裝或部分組裝的模型套件。</li>
          <li>數位下載產品。</li>
          <li>禮品卡。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 退貨流程</h2>
        <p className="mb-4">2.1 啟動退貨：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>登錄您的GK天堂帳戶。</li>
          <li>找到您要退回的訂單。</li>
          <li>選擇&quot;申請退貨&quot;選項。</li>
          <li>填寫退貨原因和其他必要信息。</li>
        </ul>
        <p className="mb-4">2.2 退貨授權：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>我們將審核您的退貨請求。</li>
          <li>一旦批准,您將收到退貨授權（RA）號碼和詳細說明。</li>
        </ul>
        <p className="mb-4">2.3 包裝和運送：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>將商品安全包裝,確保不會在運輸過程中損壞。</li>
          <li>在包裝上清楚標記RA號碼。</li>
          <li>使用可追踪的運送方式將商品寄回我們指定的地址。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 退款處理</h2>
        <p className="mb-4">3.1 退款時間：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>一旦我們收到並檢查了退回的商品,我們將處理退款。</li>
          <li>退款通常會在收到退貨後的7-14個工作日內完成。</li>
        </ul>
        <p className="mb-4">3.2 退款方式：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>退款將使用原付款方式。</li>
          <li>如原付款方式不可用,我們將聯繫您安排其他退款方式。</li>
        </ul>
        <p className="mb-4">3.3 退款金額：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>商品全額退款（不包括運費,除非是因我們的錯誤導致的退貨）。</li>
          <li>如果商品有明顯使用痕跡或損壞,我們可能會收取重新上架費用。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 運費</h2>
        <p className="mb-4">4.1 退貨運費：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>一般情況下,退貨的運費由客戶承擔。</li>
          <li>如果退貨是因為我們的錯誤（如發錯商品或商品有缺陷）,我們將承擔退貨運費。</li>
        </ul>
        <p className="mb-4">4.2 原始運費：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>原始運費通常不予退還,除非整個訂單被取消或退回。</li>
          <li>免運費促銷訂單如部分退貨可能會導致運費重新計算。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 換貨政策</h2>
        <p className="mb-4">5.1 如果您需要更換商品（例如,不同尺寸或顏色）:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>請按照正常退貨流程退回原商品。</li>
          <li>一旦我們處理了您的退貨,您可以重新下單購買所需的商品。</li>
        </ul>
        <p className="mb-4">5.2 我們不直接處理換貨,以確保庫存準確性和流程簡化。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 損壞或有缺陷的商品</h2>
        <p className="mb-4">6.1 如果您收到損壞或有缺陷的商品：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>請在收到商品後48小時內聯繫我們的客戶服務。</li>
          <li>提供清晰的商品損壞或缺陷照片。</li>
          <li>我們將安排更換或全額退款,包括原始運費。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 取消訂單</h2>
        <p className="mb-4">7.1 如果您的訂單尚未發貨：</p>
        <ul className="list-disc pl-8 mb-4">
          <li>您可以登錄帳戶申請取消訂單。</li>
          <li>取消成功後,我們將立即處理全額退款。</li>
        </ul>
        <p className="mb-4">7.2 如果訂單已發貨,請按照正常退貨流程處理。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 特殊情況</h2>
        <p className="mb-4">8.1 促銷商品：某些特價或清倉商品可能有特殊的退貨政策,請查看商品描述以獲取詳細信息。</p>
        <p className="mb-4">8.2 禮品：如果商品是作為禮品購買的,收件人可以獲得等值的商店積分作為退款。</p>
        <p className="mb-4">8.3 批發訂單：批發訂單可能適用不同的退貨政策,請聯繫我們的批發部門了解詳情。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 聯繫我們</h2>
        <p className="mb-4">如果您對我們的退貨和退款政策有任何疑問,或需要協助處理退貨,請通過以下方式聯繫我們：</p>
        <p className="mb-4">
          電子郵件: <a href="mailto:returns@gkheaven.com" className="text-blue-600 hover:underline">returns@gkheaven.com</a><br />
          客服熱線: +886 2 1234 5678<br />
          營業時間: 週一至週五 9:00-18:00 (台北時間)
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">我們保留隨時更新或修改此政策的權利。任何更改將在本頁面上發布。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}