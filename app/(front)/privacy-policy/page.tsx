import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '隱私政策 | GK天堂',
  description: 'GK天堂的隱私政策 - 了解我們如何收集、使用、保護和分享您的個人信息。',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">GK天堂隱私政策</h1>
      
      <div className="mb-8">
        <p className="mb-4">最後更新日期: 2024年3月1日</p>
        <p>在GK天堂,我們重視並尊重您的隱私。本隱私政策旨在說明我們如何收集、使用、保護和分享您的個人信息。請仔細閱讀以下內容,以了解我們的隱私實踐。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 信息收集</h2>
        <p className="mb-4">1.1 我們收集的信息類型包括但不限於:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>個人識別信息(如姓名、電子郵件地址、電話號碼)</li>
          <li>送貨地址和帳單地址</li>
          <li>付款信息(信用卡號碼等,但我們不存儲完整的信用卡信息)</li>
          <li>購買歷史和偏好</li>
          <li>設備信息(如IP地址、瀏覽器類型、操作系統)</li>
          <li>使用數據(如瀏覽歷史、點擊流數據)</li>
        </ul>
        <p className="mb-4">1.2 我們通過以下方式收集信息:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>當您創建帳戶、進行購買或與我們互動時直接提供的信息</li>
          <li>通過cookies和類似技術自動收集的信息</li>
          <li>從第三方服務提供商獲得的信息(如支付處理商)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 信息使用</h2>
        <p className="mb-4">我們使用收集的信息用於以下目的:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>處理訂單和提供客戶服務</li>
          <li>個性化您的購物體驗</li>
          <li>改進我們的網站、產品和服務</li>
          <li>發送交易相關的電子郵件(如訂單確認)</li>
          <li>發送營銷通訊(如果您選擇接收)</li>
          <li>防止欺詐和確保網站安全</li>
          <li>遵守法律義務</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 信息共享</h2>
        <p className="mb-4">3.1 我們不會出售或出租您的個人信息給第三方。</p>
        <p className="mb-4">3.2 我們可能在以下情況下共享您的信息:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>與提供服務所需的第三方服務提供商(如支付處理商、物流公司)</li>
          <li>在法律要求或為保護我們的權利時</li>
          <li>在公司重組、合併或出售的情況下</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 數據安全</h2>
        <p className="mb-4">4.1 我們採取合理的技術和組織措施來保護您的個人信息,包括:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>使用SSL加密來保護數據傳輸</li>
          <li>定期更新安全系統和程序</li>
          <li>限制員工訪問個人信息</li>
          <li>定期進行安全審計</li>
        </ul>
        <p className="mb-4">4.2 儘管我們努力保護您的個人信息,但請注意,沒有任何安全措施是完美的或不可滲透的。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 您的權利</h2>
        <p className="mb-4">根據適用的數據保護法,您擁有以下權利:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>訪問您的個人信息</li>
          <li>更正不準確的個人信息</li>
          <li>刪除您的個人信息</li>
          <li>限制或反對處理您的個人信息</li>
          <li>數據可攜性</li>
          <li>撤回同意(如適用)</li>
        </ul>
        <p className="mb-4">要行使這些權利,請通過本政策末尾提供的聯繫方式與我們聯繫。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies和類似技術</h2>
        <p className="mb-4">6.1 我們使用cookies和類似技術來改善用戶體驗、分析網站流量和個性化內容。</p>
        <p className="mb-4">6.2 您可以通過瀏覽器設置來管理cookie偏好。但請注意,禁用cookies可能會影響網站的某些功能。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 兒童隱私</h2>
        <p className="mb-4">我們的服務不面向13歲以下的兒童。如果我們得知我們收集了13歲以下兒童的個人信息,我們將立即採取步驟刪除這些信息。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 國際數據傳輸</h2>
        <p className="mb-4">您的信息可能會被傳輸和存儲在台灣境外的服務器上。通過使用我們的服務,您同意將您的信息傳輸到這些地點。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. 政策更新</h2>
        <p className="mb-4">我們可能會不時更新此隱私政策。重大更改將通過網站通知或電子郵件通知。我們鼓勵您定期查看此頁面以了解最新信息。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. 聯繫我們</h2>
        <p className="mb-4">如果您對我們的隱私政策有任何疑問或顧慮,請通過以下方式與我們聯繫:</p>
        <p className="mb-4">
          電子郵件: <a href="mailto:privacy@gkheaven.com" className="text-blue-600 hover:underline">privacy@gkheaven.com</a><br />
          地址: 台北市信義區松高路68號<br />
          電話: +886 2 1234 5678
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">通過使用我們的網站,您確認您已閱讀、理解並同意我們的隱私政策。</p>
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </div>
  );
}