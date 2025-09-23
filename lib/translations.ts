// lib/translations.ts
export type TranslationKey =
  | 'home'
  | 'cart'
  | 'login'
  | 'logout'
  | 'search'
  | 'language'
  | 'chinese'
  | 'english'
  | 'gkHeaven'
  | 'orderHistory'
  | 'profile'
  | 'adminDashboard'
  | 'cookiePolicy'
  | 'lastUpdated'
  | 'cookiePolicyIntro'
  | 'whatAreCookies'
  | 'cookiesExplanation'
  | 'cookiesWeUse'
  | 'necessaryCookies'
  | 'necessaryCookiesExample1'
  | 'necessaryCookiesExample2'
  | 'functionalCookies'
  | 'functionalCookiesExample'
  | 'analyticsCookies'
  | 'analyticsCookiesExample'
  | 'advertisingCookies'
  | 'advertisingCookiesExample'
  | 'howWeUseCookies'
  | 'cookiesUsage'
  | 'cookiesUsageExample1'
  | 'cookiesUsageExample2'
  | 'cookiesUsageExample3'
  | 'cookiesUsageExample4'
  | 'cookiesUsageExample5'
  | 'cookiesUsageExample6'
  | 'cookiePolicyAgreement'
  | 'backToHome'
  | 'intellectualPropertyStatement'
  | 'intellectualPropertyIntro'
  | 'copyright'
  | 'websiteContent'
  | 'copyrightExample1'
  | 'copyrightExample2'
  | 'userGeneratedContent'
  | 'userContentExample1'
  | 'userContentExample2'
  | 'trademarks'
  | 'gkHeavenTrademarks'
  | 'trademarksExample1'
  | 'trademarksExample2'
  | 'thirdPartyTrademarks'
  | 'thirdPartyTrademarksExample1'
  | 'thirdPartyTrademarksExample2'
  | 'patents'
  | 'gkHeavenPatents'
  | 'patentsExample1'
  | 'patentsExample2'
  | 'intellectualPropertyAgreement'
  | 'loading'
  | 'cartEmpty'
  | 'goShopping'
  | 'product'
  | 'quantity'
  | 'order'
  | 'shippingAddress'
  | 'email'
  | 'phone'
  | 'deliveredAt'
  | 'notDelivered'
  | 'price'
  | 'subtotal'
  | 'items'
  | 'proceedToCheckout'
  | 'paymentMethod'
  | 'paidAt'
  | 'notPaid'
  | 'orderItems'
  | 'item'
  | 'orderSummary'
  | 'items'
  | 'tax'
  | 'shipping'
  | 'total'
  | 'markAsDelivered'
  | 'newOrderId'
  | 'updateId'
  | 'orderDeliveredSuccess'
  | 'orderIdUpdated'
  | 'orderPaidSuccess'
  | 'error'
  | 'noOrders'
  | 'orderId'
  | 'date'
  | 'paid'
  | 'delivered'
  | 'action'
  | 'details'
  | 'orderHistory'
  | 'cartpage'
  | 'paymentMethod'
  | 'paymentMethodsError'
  | 'loading'
  | 'noPaymentMethods'
  | 'next'
  | 'back'
  | 'shippingAddress'
  | 'email'
  | 'phone'
  | 'edit'
  | 'bankCardNumber'
  | 'branchNumber'
  | 'accountName'
  | 'transferNote'
  | 'orderItems'
  | 'item'
  | 'quantity'
  | 'price'
  | 'orderSummary'
  | 'items'
  | 'tax'
  | 'shipping'
  | 'total'
  | 'placeOrder'
  | 'orderPlacedSuccessfully'
  | 'paymentMethod'
  | 'paymentMethodsError'
  | 'loading'
  | 'noPaymentMethods'
  | 'next'
  | 'back'
  // 添加可能的支付方式名稱
  | 'PayPal'
  | 'Stripe'
  | 'CashOnDelivery'
  | 'BankTransfer'
  | 'privacyPolicy'
  | 'lastUpdated'
  | 'privacyPolicyIntro'
  | 'informationCollection'
  | 'informationCollectionTypes'
  | 'personalInfo'
  | 'shippingBillingAddress'
  | 'paymentInfo'
  | 'purchaseHistory'
  | 'deviceInfo'
  | 'usageData'
  | 'informationCollectionMethods'
  | 'directProvision'
  | 'automaticCollection'
  | 'thirdPartyProviders'
  | 'informationUse'
  | 'informationUsePurposes'
  | 'orderProcessing'
  | 'personalizeExperience'
  | 'improveWebsite'
  | 'sendTransactionEmails'
  | 'sendMarketingEmails'
  | 'preventFraud'
  | 'legalObligations'
  | 'informationSharing'
  | 'noSellOrRent'
  | 'sharingSituations'
  | 'serviceProviders'
  | 'legalRequirements'
  | 'businessTransfer'
  | 'dataSecurity'
  | 'securityMeasures'
  | 'sslEncryption'
  | 'regularUpdates'
  | 'limitedAccess'
  | 'securityAudits'
  | 'securityDisclaimer'
  | 'yourRights'
  | 'dataProtectionRights'
  | 'accessPersonalInfo'
  | 'correctInaccurateInfo'
  | 'deletePersonalInfo'
  | 'restrictProcessing'
  | 'dataPortability'
  | 'withdrawConsent'
  | 'exerciseRights'
  | 'cookiesAndTechnologies'
  | 'cookiesUsage'
  | 'cookieManagement'
  | 'childrenPrivacy'
  | 'notForChildren'
  | 'internationalDataTransfer'
  | 'dataTransferConsent'
  | 'policyUpdates'
  | 'policyUpdateNotification'
  | 'contactUs'
  | 'contactInfo'
  | 'email'
  | 'address'
  | 'phone'
  | 'privacyPolicyAgreement'
  | 'backToHome'
  | 'backToProductList'
  | 'description'
  | 'price'
  | 'stockStatus'
  | 'inStock'
  | 'outOfStock'
  | 'reviews'
  | 'profile'
  | 'name'
  | 'email'
  | 'password'
  | 'newPassword'
  | 'confirmPassword'
  | 'update'
  | 'register'
  | 'login'
  | 'alreadyHaveAccount'
  | 'pleaseEnterName'
  | 'pleaseEnterEmail'
  | 'invalidEmailFormat'
  | 'pleaseEnterPassword'
  | 'pleaseConfirmPassword'
  | 'passwordsDoNotMatch'
  | 'profileUpdateSuccess'
  | 'error'
  | 'accountCreatedSuccess'
  | 'emailAlreadyInUse'
  | 'returnRefundPolicy'
  | 'lastUpdated'
  | 'returnPolicyIntro'
  | 'returnConditions'
  | 'returnPeriod'
  | 'productConditionRequirements'
  | 'unusedAndUnassembled'
  | 'tagsIntact'
  | 'noDamage'
  | 'nonReturnableItems'
  | 'openedOrUsedItems'
  | 'personalHygieneProducts'
  | 'customItems'
  | 'assembledModels'
  | 'digitalDownloads'
  | 'giftCards'
  | 'returnProcess'
  | 'initiateReturn'
  | 'loginAccount'
  | 'findOrder'
  | 'selectReturnOption'
  | 'fillReturnReason'
  | 'returnAuthorization'
  | 'reviewRequest'
  | 'receiveRANumber'
  | 'packagingAndShipping'
  | 'securePackaging'
  | 'markRANumber'
  | 'useTrackableShipping'
  | 'refundProcessing'
  | 'refundTime'
  | 'processRefund'
  | 'refundTimeframe'
  | 'refundMethod'
  | 'originalPaymentMethod'
  | 'alternativeRefundMethod'
  | 'refundAmount'
  | 'fullRefund'
  | 'restockingFee'
  | 'shipping'
  | 'returnShipping'
  | 'customerResponsibility'
  | 'companyResponsibility'
  | 'originalShipping'
  | 'nonRefundableShipping'
  | 'freeShippingRecalculation'
  | 'exchangePolicy'
  | 'exchangeProcess'
  | 'returnOriginalItem'
  | 'reorderDesiredItem'
  | 'noDirectExchange'
  | 'damagedOrDefectiveItems'
  | 'receivingDamagedItems'
  | 'contactWithin48Hours'
  | 'providePhotos'
  | 'replacementOrRefund'
  | 'cancelOrder'
  | 'beforeShipping'
  | 'loginToCancel'
  | 'immediateRefund'
  | 'afterShipping'
  | 'specialCircumstances'
  | 'promotionalItems'
  | 'giftPurchases'
  | 'wholesaleOrders'
  | 'contactUs'
  | 'contactInfo'
  | 'email'
  | 'customerService'
  | 'businessHours'
  | 'businessHoursDetail'
  | 'policyUpdateNotice'
  | 'backToHome'
  | 'category'
  | 'price'
  | 'customerRating'
  | 'sortBy'
  | 'clear'
  | 'results'
  | 'noResults'
  | 'loading'
  | 'noProductFound'
  | 'andUp'
  | 'all'
  | 'yourBlindBox'
  | 'enterDesiredAmount'
  | 'blindBoxContents'
  | 'itemsAddedToCart'
  | 'orderConfirmation'
  | 'fillOrderInfo'
  | 'name'
  | 'country'
  | 'selectCountry'
  | 'address'
  | 'phoneNumber'
  | 'phoneNumberHint'
  | 'enterPhoneNumber'
  | 'next'
  | 'pleaseEnterName'
  | 'pleaseSelectCountry'
  | 'pleaseEnterAddress'
  | 'pleaseEnterEmail'
  | 'invalidEmailFormat'
  | 'pleaseEnterPhoneNumber'
  | 'rating'
  | 'invalidPhoneNumber'
  | 'gkHeavenShippingPolicy'
  | 'shippingPolicyIntro'
  | 'shippingMethods'
  | 'domesticShipping'
  | 'standardShipping'
  | 'expressShipping'
  | 'economyShipping'
  | 'internationalShipping'
  | 'standardInternationalShipping'
  | 'expressInternationalShipping'
  | 'shippingCosts'
  | 'domesticShippingCosts'
  | 'standardShippingCost'
  | 'expressShippingCost'
  | 'economyShippingCost'
  | 'internationalShippingCosts'
  | 'internationalShippingCostCalculation'
  | 'shippingCostAtCheckout'
  | 'specialCases'
  | 'remoteAreaShipping'
  | 'oversizedItemShipping'
  | 'shippingTimes'
  | 'orderProcessingTime'
  | 'normalOrderProcessing'
  | 'customOrderProcessing'
  | 'transitTime'
  | 'transitTimeCalculation'
  | 'transitTimeFactors'
  | 'countriesWeShipTo'
  | 'mostCountriesShipping'
  | 'shippingRestrictions'
  | 'customsAndTaxes'
  | 'customsFeesResponsibility'
  | 'customsFeesExclusion'
  | 'internationalShippingRestrictions'
  | 'importRestrictions'
  | 'termscustomerResponsibility'
  | 'orderTracking'
  | 'trackingInformation'
  | 'trackingNumberProvided'
  | 'trackingOnWebsite'
  | 'updateFrequency'
  | 'domesticTrackingUpdate'
  | 'internationalTrackingUpdate'
  | 'shippingIssues'
  | 'lostOrDamagedPackages'
  | 'reportLostOrDamaged'
  | 'resolutionProcess'
  | 'delayedDeliveries'
  | 'trackingDelayedOrder'
  | 'investigateDelay'
  | 'specialShippingRequests'
  | 'giftWrapping'
  | 'giftWrappingService'
  | 'giftWrappingOption'
  | 'specifiedDeliveryDate'
  | 'requestDeliveryDate'
  | 'deliveryDateLimitation'
  | 'shippingPartners'
  | 'shippingPartnersIntro'
  | 'domesticShippingPartners'
  | 'internationalShippingPartners'
  | 'shippingPartnerSelection'
  | 'shippingPolicyQuestions'
  | 'termsOfService'
  | 'termsIntro'
  | 'termsAcceptance'
  | 'termsAcceptanceContent'
  | 'termsAccountRegistration'
  | 'termsAccountRegistrationInfo'
  | 'termsAccountResponsibility'
  | 'termsUnauthorizedUse'
  | 'termsProductInfo'
  | 'termsProductInfoAccuracy'
  | 'termsProductVariations'
  | 'termsPriceChanges'
  | 'termsOrderAgreement'
  | 'termsIntellectualProperty'
  | 'termsWebsiteContent'
  | 'termsUseRestrictions'
  | 'termsUserBehavior'
  | 'termsIllegalUse'
  | 'termsProhibitedContent'
  | 'termsUnauthorizedAccess'
  | 'termsDisclaimer'
  | 'termsAsIsService'
  | 'termsNoGuarantees'
  | 'termsUserRisk'
  | 'termsLiabilityLimitation'
  | 'termsLiabilityLimit'
  | 'termsDamagesIncluded'
  | 'termsGoverningLaw'
  | 'termsLawJurisdiction'
  | 'termsDisputeResolution'
  | 'termsChanges'
  | 'termsRightToModify'
  | 'termsContinuedUse'
  | 'termsContactInfo'
  | 'termsAgreement'
  | 'login'
  | 'invalidEmailOrPassword'
  | 'email'
  | 'password'
  | 'pleaseEnterEmail'
  | 'invalidEmailFormat'
  | 'pleaseEnterPassword'
  | 'dontHaveAccount'
  | 'register'
  | 'lastUpdated'
  | 'policyUpdateNotice'
  | 'backToHome'
  | 'customerServiceHotline'
  | 'businessHours'
  | 'businessHoursDetail'
  | 'address'
  | 'companyAddress'
  | 'turnImaginationIntoReality'
  | 'gkHeavenDescription'
  | 'latestProducts'
  | 'pageNotFound'
  | 'notices'
  | 'blindBoxSeries'
  | 'animeSeries'
  | 'otherSeries'
  | 'blindBox'
  | 'anime'
  | 'other'
  | 'userLogin'
  | 'shippingAddress'
  | 'paymentMethod'
  | 'placeOrder'
  | 'ourProducts'
  | 'customerService'
  | 'legalNotices'
  | 'followUs'
  | 'shippingPolicy'
  | 'returnRefundPolicy'
  | 'cookiePolicy'
  | 'intellectualPropertyNotice'
  | 'copyrightNotice'
  | 'amount'
  | 'search'
  | 'category'
  | 'all'
  | 'securePayment'
  | 'securedByStripe'
  | 'customerSupport'
  | 'phoneAndEmailSupport'
  | 'qualityBlindBox'
  | 'carefullySelectedSurprises'
  | 'easyOrdering'
  | 'easyPurchaseWithClick'
  | 'notice'
  | 'addBlindBoxToCart'
  | 'addToCart'
  | 'latestProducts'
  | 'recommendedProducts'
  | 'readMore'
  | 'hide'
  | 'gkHeavenTitle'
  | 'gkHeavenSubtitle'
  | 'gkHeavenIntro'
  | 'gkHeavenQuality'
  | 'gkHeavenExplore'
  | 'gkHeavenNewArrivals'
  | 'whyChooseGKHeaven'
  | 'gkHeavenUnique'
  | 'gkHeavenCustomerService'
  | 'gkHeavenLoyaltyProgram'
  | 'gkHeavenExperience'
  | 'gkHeavenExclusiveModels'
  | 'gkHeavenExclusiveIntro'
  | 'gkHeavenExclusiveFocus'
  | 'gkHeavenJoinUs'
  | 'previousSlide'
  | 'nextSlide'
  | 'dataFetchError'
  | 'productCategories'
  | 'error'
  | 'loading';

export type Language = 'zh' | 'en';

export type Translations = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

export const translations: Translations = {
  zh: {
    home: '首頁',
    cart: '購物車',
    login: '登入',
    logout: '登出',
    search: '搜尋',
    language: '語言',
    chinese: '中文',
    english: '英文',
    gkHeaven: 'GK天堂',
    orderHistory: '訂單歷史',
    profile: '個人資料',
    adminDashboard: '管理員儀表板',
    cookiePolicy: 'Cookie 政策',
    lastUpdated: '最後更新日期',
    cookiePolicyIntro:
      '歡迎閱讀 GK天堂的 Cookie 政策。本政策旨在說明我們如何使用 Cookie 和類似技術，以及您如何控制這些技術的使用。',
    whatAreCookies: '什麼是 Cookie？',
    cookiesExplanation:
      'Cookie 是網站存儲在您設備上的小型文本文件。它們被廣泛用於使網站運作或更有效率，並為網站所有者提供信息。',
    cookiesWeUse: '我們使用的 Cookie 類型',
    necessaryCookies: '必要的 Cookie：',
    necessaryCookiesExample1:
      '這些 Cookie 對於網站的正常運作至關重要，無法在我們的系統中關閉。',
    necessaryCookiesExample2:
      '例如，用於記住您的登錄狀態或購物車內容的 Cookie。',
    functionalCookies: '功能性 Cookie：',
    functionalCookiesExample:
      '這些 Cookie 使我們能夠記住您的偏好設置，如語言選擇或地區。',
    analyticsCookies: '分析性 Cookie：',
    analyticsCookiesExample: '這些 Cookie 幫助我們了解訪客如何使用我們的網站。',
    advertisingCookies: '廣告 Cookie：',
    advertisingCookiesExample: '這些 Cookie 用於向您展示相關的廣告。',
    howWeUseCookies: '我們如何使用 Cookie',
    cookiesUsage: '我們使用 Cookie 和類似技術來：',
    cookiesUsageExample1: '記住您的登錄狀態和購物車內容',
    cookiesUsageExample2: '了解和保存您的偏好設置',
    cookiesUsageExample3: '收集有關網站使用情況的統計數據',
    cookiesUsageExample4: '個性化您的購物體驗',
    cookiesUsageExample5: '協助我們改進網站',
    cookiesUsageExample6: '為您提供相關的廣告',
    cookiePolicyAgreement:
      '通過繼續使用我們的網站，您同意我們按照本政策使用 Cookie。',
    backToHome: '返回首頁',
    intellectualPropertyStatement: '智慧財產權聲明',
    intellectualPropertyIntro:
      'GK天堂尊重並保護智慧財產權。本聲明旨在說明我們的智慧財產權政策，以及您在使用我們的網站和服務時應遵守的相關規定。',
    copyright: '版權',
    websiteContent:
      'GK天堂網站上的所有內容，包括但不限於文字、圖像、標誌、按鈕圖標、圖片、音頻剪輯、數位下載和軟體，均為 GK天堂 或其內容提供商的財產，受版權法保護。',
    copyrightExample1:
      '未經 GK天堂 明確書面許可，不得以任何方式複製、複製、修改、出版、傳播、分發、展示、執行、複製、授權、製作衍生作品或出售本網站的任何內容。',
    copyrightExample2:
      '用戶在我們的平台上發布的內容（如評論、圖片等），用戶保留其版權，但授予 GK天堂 非獨家、全球性、免版稅、可轉授權的使用權。',
    userGeneratedContent: '用戶生成內容：',
    userContentExample1:
      '用戶在我們的平台上發布的內容（如評論、圖片等），用戶保留其版權。',
    userContentExample2: '用戶保證其上傳的內容不侵犯任何第三方的智慧財產權。',
    trademarks: '商標',
    gkHeavenTrademarks: 'GK天堂商標：',
    trademarksExample1: '"GK天堂"及相關標誌是 GK天堂 的註冊商標。',
    trademarksExample2: '未經 GK天堂 明確書面許可，不得使用這些商標。',
    thirdPartyTrademarks: '第三方商標：',
    thirdPartyTrademarksExample1:
      '我們網站上可能出現的其他商標均為其各自所有者的財產。',
    thirdPartyTrademarksExample2: '提及這些商標並不意味著任何關聯或認可關係。',
    patents: '專利',
    gkHeavenPatents: 'GK天堂專利：',
    patentsExample1: 'GK天堂 的某些產品和技術可能受到一項或多項專利的保護。',
    patentsExample2: '未經授權，不得使用、複製或模仿這些受專利保護的技術。',
    intellectualPropertyAgreement:
      '通過使用我們的網站和服務，您確認您已閱讀、理解並同意遵守本智慧財產權聲明。',
    loading: '載入中...',
    cartpage: '購物車',
    cartEmpty: '購物車是空的 :(',
    goShopping: '去購物',
    product: '商品',
    quantity: '數量',
    price: '價格',
    subtotal: '小計',
    item: '件',
    proceedToCheckout: '前往結帳',
    order: '訂單',
    shippingAddress: '送貨地址',
    email: '電子郵件',
    phone: '電話',
    deliveredAt: '已於',
    notDelivered: '尚未送達',
    paymentMethod: '付款方式',
    paidAt: '已於',
    notPaid: '未付款',
    orderItems: '訂單項目',
    orderSummary: '訂單摘要',
    items: '商品',
    tax: '稅金',
    shipping: '運費',
    total: '總計',
    markAsDelivered: '標記為已送達',
    newOrderId: '新訂單 ID',
    updateId: '更新 ID',
    orderDeliveredSuccess: '訂單已成功送達',
    orderIdUpdated: '訂單 ID 已更新',
    orderPaidSuccess: '訂單已成功付款',
    error: '發生錯誤',
    noOrders: '沒有訂單...',
    orderId: '訂單編號',
    date: '日期',
    paid: '付款狀態',
    delivered: '配送狀態',
    action: '操作',
    details: '詳情',
    paymentMethodsError: '載入付款方式時發生錯誤',
    noPaymentMethods: '沒有可用的付款方式',
    next: '下一步',
    back: '返回',
    edit: '編輯',
    bankCardNumber: '銀行卡號',
    branchNumber: '分行號碼',
    accountName: '帳戶名稱',
    transferNote: '客戶轉帳時必須備註(辨識碼)',
    placeOrder: '下單',
    orderPlacedSuccessfully: '訂單已成功下達',
    PayPal: 'PayPal',
    Stripe: 'Stripe',
    CashOnDelivery: '貨到付款',
    BankTransfer: '銀行轉帳',
    privacyPolicy: '隱私政策',
    privacyPolicyIntro:
      'GK天堂重視並尊重您的隱私。本隱私政策旨在說明我們如何收集、使用、保護和分享您的個人信息。',
    informationCollection: '信息收集',
    informationCollectionTypes: '我們收集的信息類型包括但不限於',
    personalInfo: '個人識別信息(如姓名、電子郵件地址、電話號碼)',
    shippingBillingAddress: '送貨地址和帳單地址',
    paymentInfo: '付款信息(信用卡號碼等,但我們不存儲完整的信用卡信息)',
    purchaseHistory: '購買歷史和偏好',
    deviceInfo: '設備信息(如IP地址、瀏覽器類型、操作系統)',
    usageData: '使用數據(如瀏覽歷史、點擊流數據)',
    informationCollectionMethods: '我們通過以下方式收集信息',
    directProvision: '當您創建帳戶、進行購買或與我們互動時直接提供的信息',
    automaticCollection: '通過cookies和類似技術自動收集的信息',
    thirdPartyProviders: '從第三方服務提供商獲得的信息(如支付處理商)',
    informationUse: '信息使用',
    informationUsePurposes: '我們使用收集的信息用於以下目的',
    orderProcessing: '處理訂單和提供客戶服務',
    personalizeExperience: '個性化您的購物體驗',
    improveWebsite: '改進我們的網站、產品和服務',
    sendTransactionEmails: '發送交易相關的電子郵件(如訂單確認)',
    sendMarketingEmails: '發送營銷通訊(如果您選擇接收)',
    preventFraud: '防止欺詐和確保網站安全',
    legalObligations: '遵守法律義務',
    informationSharing: '信息共享',
    noSellOrRent: '我們不會出售或出租您的個人信息給第三方。',
    sharingSituations: '我們可能在以下情況下共享您的信息',
    serviceProviders:
      '與提供服務所需的第三方服務提供商(如支付處理商、物流公司)',
    legalRequirements: '在法律要求或為保護我們的權利時',
    businessTransfer: '在公司重組、合併或出售的情況下',
    dataSecurity: '數據安全',
    securityMeasures: '我們採取合理的技術和組織措施來保護您的個人信息,包括',
    sslEncryption: '使用SSL加密來保護數據傳輸',
    regularUpdates: '定期更新安全系統和程序',
    limitedAccess: '限制員工訪問個人信息',
    securityAudits: '定期進行安全審計',
    securityDisclaimer:
      '儘管我們努力保護您的個人信息,但請注意,沒有任何安全措施是完美的或不可滲透的。',
    yourRights: '您的權利',
    dataProtectionRights: '根據適用的數據保護法,您擁有以下權利',
    accessPersonalInfo: '訪問您的個人信息',
    correctInaccurateInfo: '更正不準確的個人信息',
    deletePersonalInfo: '刪除您的個人信息',
    restrictProcessing: '限制或反對處理您的個人信息',
    dataPortability: '數據可攜性',
    withdrawConsent: '撤回同意(如適用)',
    exerciseRights: '要行使這些權利,請通過本政策末尾提供的聯繫方式與我們聯繫。',
    cookiesAndTechnologies: 'Cookies和類似技術',
    cookieManagement:
      '您可以通過瀏覽器設置來管理cookie偏好。但請注意,禁用cookies可能會影響網站的某些功能。',
    childrenPrivacy: '兒童隱私',
    notForChildren:
      '我們的服務不面向13歲以下的兒童。如果我們得知我們收集了13歲以下兒童的個人信息,我們將立即採取步驟刪除這些信息。',
    internationalDataTransfer: '國際數據傳輸',
    dataTransferConsent:
      '您的信息可能會被傳輸和存儲在台灣境外的服務器上。通過使用我們的服務,您同意將您的信息傳輸到這些地點。',
    policyUpdates: '政策更新',
    policyUpdateNotification:
      '我們可能會不時更新此隱私政策。重大更改將通過網站通知或電子郵件通知。我們鼓勵您定期查看此頁面以了解最新信息。',
    contactUs: '聯繫我們',
    contactInfo:
      '如果您對我們的隱私政策有任何疑問或顧慮,請通過以下方式與我們聯繫',
    address: '地址',
    privacyPolicyAgreement:
      '通過使用我們的網站,您確認您已閱讀、理解並同意我們的隱私政策。',
    backToProductList: '返回商品列表',
    description: '描述',
    stockStatus: '庫存狀態',
    inStock: '有貨',
    outOfStock: '缺貨',
    reviews: '條評價',
    name: '姓名',
    password: '密碼',
    newPassword: '新密碼',
    confirmPassword: '確認密碼',
    update: '更新',
    register: '註冊',
    alreadyHaveAccount: '已經有帳號了？',
    pleaseEnterName: '請輸入姓名',
    pleaseEnterEmail: '請輸入電子郵件',
    invalidEmailFormat: '電子郵件格式不正確',
    pleaseEnterPassword: '請輸入密碼',
    pleaseConfirmPassword: '請確認密碼',
    passwordsDoNotMatch: '密碼不匹配！',
    profileUpdateSuccess: '個人資料更新成功',
    accountCreatedSuccess: '帳號已成功創建',
    emailAlreadyInUse: '電子郵件已被使用',
    returnRefundPolicy: '退貨和退款政策',
    returnPolicyIntro:
      '在GK天堂,我們致力於確保您對購買的每一件商品都感到滿意。我們理解有時您可能需要退回商品或申請退款。本政策旨在說明我們的退貨和退款流程。',
    returnConditions: '退貨條件',
    returnPeriod: '退貨期限：自收到商品之日起14天內。',
    productConditionRequirements: '商品狀態要求：',
    unusedAndUnassembled: '商品必須未使用、未組裝且保持原始包裝完整。',
    tagsIntact: '所有標籤和防偽標記必須完好無損。',
    noDamage: '商品不得有任何損壞、污漬或異味。',
    nonReturnableItems: '不可退貨商品：',
    openedOrUsedItems: '已開封或使用的商品（除非有製造缺陷）。',
    personalHygieneProducts: '個人衛生用品。',
    customItems: '定制或特別訂製的商品。',
    assembledModels: '已組裝或部分組裝的模型套件。',
    digitalDownloads: '數位下載產品。',
    giftCards: '禮品卡。',
    returnProcess: '退貨流程',
    initiateReturn: '啟動退貨：',
    loginAccount: '登錄您的GK天堂帳戶。',
    findOrder: '找到您要退回的訂單。',
    selectReturnOption: '選擇"申請退貨"選項。',
    fillReturnReason: '填寫退貨原因和其他必要信息。',
    returnAuthorization: '退貨授權：',
    reviewRequest: '我們將審核您的退貨請求。',
    receiveRANumber: '一旦批准,您將收到退貨授權（RA）號碼和詳細說明。',
    packagingAndShipping: '包裝和運送：',
    securePackaging: '將商品安全包裝,確保不會在運輸過程中損壞。',
    markRANumber: '在包裝上清楚標記RA號碼。',
    useTrackableShipping: '使用可追踪的運送方式將商品寄回我們指定的地址。',
    refundProcessing: '退款處理',
    refundTime: '退款時間：',
    processRefund: '一旦我們收到並檢查了退回的商品,我們將處理退款。',
    refundTimeframe: '退款通常會在收到退貨後的7-14個工作日內完成。',
    refundMethod: '退款方式：',
    originalPaymentMethod: '退款將使用原付款方式。',
    alternativeRefundMethod:
      '如原付款方式不可用,我們將聯繫您安排其他退款方式。',
    refundAmount: '退款金額：',
    fullRefund: '商品全額退款（不包括運費,除非是因我們的錯誤導致的退貨）。',
    restockingFee: '如果商品有明顯使用痕跡或損壞,我們可能會收取重新上架費用。',
    returnShipping: '退貨運費：',
    customerResponsibility: '一般情況下,退貨的運費由客戶承擔。',
    companyResponsibility:
      '如果退貨是因為我們的錯誤（如發錯商品或商品有缺陷）,我們將承擔退貨運費。',
    originalShipping: '原始運費：',
    nonRefundableShipping: '原始運費通常不予退還,除非整個訂單被取消或退回。',
    freeShippingRecalculation:
      '免運費促銷訂單如部分退貨可能會導致運費重新計算。',
    exchangePolicy: '換貨政策',
    exchangeProcess: '如果您需要更換商品（例如,不同尺寸或顏色）:',
    returnOriginalItem: '請按照正常退貨流程退回原商品。',
    reorderDesiredItem: '一旦我們處理了您的退貨,您可以重新下單購買所需的商品。',
    noDirectExchange: '我們不直接處理換貨,以確保庫存準確性和流程簡化。',
    damagedOrDefectiveItems: '損壞或有缺陷的商品',
    receivingDamagedItems: '如果您收到損壞或有缺陷的商品：',
    contactWithin48Hours: '請在收到商品後48小時內聯繫我們的客戶服務。',
    providePhotos: '提供清晰的商品損壞或缺陷照片。',
    replacementOrRefund: '我們將安排更換或全額退款,包括原始運費。',
    cancelOrder: '取消訂單',
    beforeShipping: '如果您的訂單尚未發貨：',
    loginToCancel: '您可以登錄帳戶申請取消訂單。',
    immediateRefund: '取消成功後,我們將立即處理全額退款。',
    afterShipping: '如果訂單已發貨,請按照正常退貨流程處理。',
    specialCircumstances: '特殊情況',
    promotionalItems:
      '促銷商品：某些特價或清倉商品可能有特殊的退貨政策,請查看商品描述以獲取詳細信息。',
    giftPurchases:
      '禮品：如果商品是作為禮品購買的,收件人可以獲得等值的商店積分作為退款。',
    wholesaleOrders:
      '批發訂單：批發訂單可能適用不同的退貨政策,請聯繫我們的批發部門了解詳情。',
    customerService: '客服熱線',
    businessHours: '營業時間',
    businessHoursDetail: '週一至週五 9:00-18:00 (台北時間)',
    policyUpdateNotice:
      '我們保留隨時更新或修改此政策的權利。任何更改將在本頁面上發布。',
    category: '類別',
    customerRating: '顧客評價',
    rating: '評分',
    sortBy: '排序方式',
    clear: '清除',
    results: '個結果',
    noResults: '沒有結果',
    noProductFound: '沒有找到商品',
    andUp: '以上',
    all: '全部',
    yourBlindBox: '您的盲盒',
    enterDesiredAmount: '請輸入您的期望金額，即可獲得專屬的神秘禮盒。',
    blindBoxContents: '神秘禮盒將隨機包含與您輸入金額相符的商品。',
    itemsAddedToCart: '商品將直接添加到您的購物車，您可以前往結帳。',
    orderConfirmation: '付款成功後，您的訂單將被確認。',
    fillOrderInfo: '填寫訂單資訊',
    country: '國家',
    selectCountry: '選擇國家',
    phoneNumber: '手機號碼',
    phoneNumberHint: '(請包括國際區號，例如 +886 912345678)',
    enterPhoneNumber: '輸入手機號碼',
    pleaseSelectCountry: '請選擇國家',
    pleaseEnterAddress: '請輸入地址',
    pleaseEnterPhoneNumber: '請輸入手機號碼',
    invalidPhoneNumber: '請輸入有效的國際手機號碼 (例如 +886 912345678)',
    gkHeavenShippingPolicy: 'GK天堂運送政策',
    shippingPolicyIntro:
      '在GK天堂,我們致力於為您提供優質的運送服務,確保您的訂單安全、及時地送達。本政策概述了我們的運送方式、費用、時間以及其他相關信息。',
    shippingMethods: '運送方式',
    domesticShipping: '國內運送',
    standardShipping: '標準運送：適用於大多數訂單,通常在3-5個工作日內送達。',
    expressShipping: '快速運送：1-2個工作日內送達（僅限特定地區）。',
    economyShipping: '超值運送：適用於不急需的訂單,通常在5-7個工作日內送達。',
    internationalShipping: '國際運送',
    standardInternationalShipping: '標準國際運送：通常在10-15個工作日內送達。',
    expressInternationalShipping:
      '快速國際運送：通常在5-7個工作日內送達（僅限特定國家/地區）。',
    shippingCosts: '運送費用',
    domesticShippingCosts: '國內運送費用',
    standardShippingCost:
      '標準運送：訂單金額€1,500以上免運費,低於€1,500收取€150運費。',
    expressShippingCost: '快速運送：基本費用€250,訂單金額每增加€1,000加收€50。',
    economyShippingCost: '超值運送：統一收取€100運費。',
    internationalShippingCosts: '國際運送費用',
    internationalShippingCostCalculation: '根據目的地國家/地區和包裹重量計算。',
    shippingCostAtCheckout: '詳細費用將在結賬時顯示。',
    specialCases: '特殊情況',
    remoteAreaShipping: '偏遠地區可能需要額外的運費。',
    oversizedItemShipping: '大型或超重商品可能有額外的處理費。',
    shippingTimes: '運送時間',
    orderProcessingTime: '訂單處理時間',
    normalOrderProcessing: '大多數訂單在1-2個工作日內處理。',
    customOrderProcessing: '定制或預訂商品可能需要額外的處理時間。',
    transitTime: '運送時間',
    transitTimeCalculation: '運送時間從訂單發貨後開始計算。',
    transitTimeFactors: '實際送達時間可能因天氣、海關檢查等因素而有所不同。',
    countriesWeShipTo: '可運送國家/地區',
    mostCountriesShipping: '我們目前向大多數國家和地區提供國際運送服務。',
    shippingRestrictions: '某些國家/地區可能有運送限制,請在結賬時查看。',
    customsAndTaxes: '關稅和稅費',
    customsFeesResponsibility: '國際訂單可能需要支付額外的關稅和稅費。',
    customsFeesExclusion: '這些費用由客戶承擔,不包含在我們的運費中。',
    internationalShippingRestrictions: '國際運送限制',
    importRestrictions: '某些商品可能受到目的地國家/地區的進口限制。',
    termscustomerResponsibility:
      '客戶有責任了解並遵守目的地國家/地區的進口法規。',
    orderTracking: '訂單追蹤',
    trackingInformation: '追蹤信息',
    trackingNumberProvided:
      '所有訂單發貨後,您將收到一封包含追蹤號碼的電子郵件。',
    trackingOnWebsite: '您可以在我們的網站上使用此號碼查看訂單狀態。',
    updateFrequency: '更新頻率',
    domesticTrackingUpdate: '追蹤信息通常每24-48小時更新一次。',
    internationalTrackingUpdate: '國際訂單的更新可能不太頻繁。',
    shippingIssues: '運送問題',
    lostOrDamagedPackages: '丟失或損壞的包裹',
    reportLostOrDamaged:
      '如果您的包裹丟失或在運送過程中損壞,請立即聯繫我們的客戶服務。',
    resolutionProcess:
      '我們將與運送公司合作解決問題,並在必要時安排重新發貨或退款。',
    delayedDeliveries: '延遲送達',
    trackingDelayedOrder:
      '如果您的訂單超過預期送達時間,請查看追蹤信息或聯繫我們。',
    investigateDelay: '我們將調查延遲原因並提供解決方案。',
    specialShippingRequests: '特殊運送要求',
    giftWrapping: '禮品包裝',
    giftWrappingService: '我們提供禮品包裝服務,費用為每件商品€50。',
    giftWrappingOption: '禮品包裝選項可在結賬時選擇。',
    specifiedDeliveryDate: '指定送貨日期',
    requestDeliveryDate: '如需指定送貨日期,請在下單時在備註欄中說明。',
    deliveryDateLimitation:
      '我們將盡力滿足您的要求,但不能保證所有情況下都能做到。',
    shippingPartners: '運送合作夥伴',
    shippingPartnersIntro: '我們與多家知名運送公司合作,包括但不限於：',
    domesticShippingPartners: '國內：中華郵政、黑貓宅急便、新竹物流',
    internationalShippingPartners: '國際：DHL、FedEx、UPS',
    shippingPartnerSelection:
      '具體使用哪家運送公司將根據您的位置和所選的運送方式而定。',
    shippingPolicyQuestions:
      '如果您對我們的運送政策有任何疑問,或需要關於您訂單運送的幫助,請隨時聯繫我們：',
    termsOfService: '使用條款',
    termsIntro:
      '歡迎來到GK天堂。請仔細閱讀以下條款和條件,因為它們適用於您對我們網站的訪問和使用,以及我們提供的任何相關服務。',
    termsAcceptance: '接受條款',
    termsAcceptanceContent:
      '通過訪問或使用GK天堂網站(以下簡稱"網站"),您同意受這些使用條款(以下簡稱"條款")的約束。如果您不同意這些條款的任何部分,則您可能無法使用我們的服務。',
    termsAccountRegistration: '帳戶註冊與使用',
    termsAccountRegistrationInfo:
      '您可能需要創建一個帳戶才能使用我們網站的某些功能。您同意提供準確、完整和最新的註冊信息。',
    termsAccountResponsibility:
      '您負責維護您帳戶的機密性,包括但不限於您的密碼,並且您同意對您帳戶下發生的所有活動負全部責任。',
    termsUnauthorizedUse:
      '如果您發現任何未經授權使用您帳戶的情況,您同意立即通知GK天堂。',
    termsProductInfo: '產品信息與訂單',
    termsProductInfoAccuracy:
      '我們努力確保網站上的所有產品信息和描述準確無誤。然而,我們不保證所有信息的完整性、準確性、可靠性、適用性或可用性。',
    termsProductVariations:
      '產品的顏色和尺寸可能因屏幕設置和測量方法而略有不同。',
    termsPriceChanges: '我們保留隨時更改產品規格和價格的權利,恕不另行通知。',
    termsOrderAgreement:
      '下訂單即表示您同意支付所列的全部費用,包括運費和稅費(如適用)。',
    termsIntellectualProperty: '知識產權',
    termsWebsiteContent:
      '網站上的所有內容,包括但不限於文本、圖形、標誌、按鈕圖標、圖像、音頻剪輯、數字下載和軟件,均為GK天堂或其內容提供商的財產,受版權法和國際條約規定的保護。',
    termsUseRestrictions:
      '未經GK天堂明確書面許可,您不得複製、複製、修改、出版、傳播、轉讓、出售或以其他方式利用網站上的任何材料。',
    termsUserBehavior: '用戶行為',
    termsIllegalUse: '您同意不會使用網站進行任何非法或未經授權的目的。',
    termsProhibitedContent:
      '您不得發布、上傳或分享任何誹謗、侮辱、色情、威脅或其他非法內容。',
    termsUnauthorizedAccess: '您不得試圖獲取對網站或相關系統的未經授權的訪問。',
    termsDisclaimer: '免責聲明',
    termsAsIsService:
      'GK天堂的服務按"原樣"和"可用"的基礎提供,不提供任何明示或暗示的保證。',
    termsNoGuarantees: '我們不保證網站將始終可用、無錯誤或安全。',
    termsUserRisk: '您使用本網站的風險完全由您自己承擔。',
    termsLiabilityLimitation: '責任限制',
    termsLiabilityLimit:
      '在法律允許的最大範圍內,GK天堂及其員工、管理人員、董事、代理人或附屬公司均不對任何直接、間接、附帶、特殊、後果性或懲罰性損害負責。',
    termsDamagesIncluded:
      '這包括但不限於因使用或無法使用我們的服務而導致的利潤損失、商譽損失、數據損失或其他無形損失。',
    termsGoverningLaw: '適用法律',
    termsLawJurisdiction:
      '這些條款受中華民國法律管轄,並根據其解釋,不考慮法律衝突原則。',
    termsDisputeResolution:
      '任何因這些條款引起或與之相關的爭議應提交至台灣台北地方法院作為第一審管轄法院。',
    termsChanges: '條款變更',
    termsRightToModify:
      '我們保留隨時修改這些條款的權利。重大更改將通過網站通知或電子郵件通知。',
    termsContinuedUse: '您繼續使用網站將被視為接受修改後的條款。',
    termsContactInfo:
      '如果您對這些使用條款有任何疑問,請通過以下方式與我們聯繫:',
    termsAgreement:
      '通過使用我們的網站,您確認您已閱讀、理解並同意遵守這些使用條款。',
    invalidEmailOrPassword: '無效的電子郵件或密碼',
    dontHaveAccount: '還沒有帳號？',
    customerServiceHotline: '客服熱線',
    companyAddress: '台北市信義區松高路68號',
    turnImaginationIntoReality: '將您的 想像力變為現實',
    gkHeavenDescription: '是一家位於歐洲的頂級模型人偶商店。成立於2019年。',
    latestProducts: '最新商品',
    pageNotFound: '404 - 找不到頁面',
    notices: '注意事項',
    blindBoxSeries: '盲盒系列',
    animeSeries: '動漫系列',
    otherSeries: '其他系列',
    blindBox: '盲盒',
    anime: '動漫',
    other: '其他',
    userLogin: '用戶登入',
    ourProducts: '我們產品',
    legalNotices: '法律聲明',
    followUs: '關注我們',
    shippingPolicy: '運送政策',
    intellectualPropertyNotice: '智慧財產權聲明',
    copyrightNotice: '© {year} GK天堂. 版權所有.',
    amount: '金額',
    securePayment: '安全支付',
    securedByStripe: '由 Stripe 提供安全保障',
    customerSupport: '24/7 客戶支援',
    phoneAndEmailSupport: '電話和電子郵件支援',
    qualityBlindBox: '優質盲盒',
    carefullySelectedSurprises: '精心挑選的驚喜商品',
    easyOrdering: '簡單下定',
    easyPurchaseWithClick: '輕鬆點擊即可購買',
    notice: '注意事項',
    addBlindBoxToCart: '加入盲盒到購物車',
    addToCart: '加入購物車',
    recommendedProducts: '推薦商品',
    readMore: '閱讀更多',
    hide: '隱藏',
    gkHeavenTitle: 'GK天堂：車庫套件愛好者的首選目的地',
    gkHeavenSubtitle: '您的高品質車庫套件和模型人偶終極來源',
    gkHeavenIntro:
      '在GK天堂，我們相信每個車庫套件都訴說著獨特的故事。探索我們豐富的精心製作的模型套件選擇，包括流行的動漫角色、電影偶像和原創作品，所有這些都旨在將您喜愛的虛構世界帶入現實。無論您是經驗豐富的模型製作者，還是剛開始進入GK的迷人世界，我們廣泛的收藏都能滿足各種技能水平和興趣。',
    gkHeavenQuality:
      '我們對品質和真實性的承諾確保了我們收藏中的每一套件不僅提供精細的細節，還能捕捉它們所代表角色的精髓。從我們樹脂套件的精細紋理到每個人偶的精確雕刻，每件商品都經過精心挑選，為您提供GK工藝中的最佳選擇。我們用戶友好的在線商店使瀏覽和購買變得輕而易舉，只需點擊幾下，就能將您選擇的套件送到您的家門口。',
    gkHeavenExplore:
      '深入探索我們多樣化的車庫套件系列，找到您的下一件傑作。無論是我們動作人偶套件的動態姿勢、雕像收藏的寧靜美感，還是場景套裝的精緻細節，GK天堂應有盡有。每件產品都配有詳細描述、高解析度圖片，通常還包括繪畫指南，讓您全面了解套件及其潛力。',
    gkHeavenNewArrivals:
      '通過我們不斷更新的新品到貨，走在GK潮流的前沿，保持您的收藏新鮮有趣。訂閱我們的電子報，接收最新發布、限量版和專為GK愛好者量身定制的獨家預訂信息。在GK天堂，激情與工藝相遇，為您提供無與倫比的車庫套件在線購物體驗。',
    whyChooseGKHeaven: '為什麼選擇GK天堂？',
    gkHeavenUnique:
      '在GK天堂，品質與創意相遇。我們致力於採購正宗和高品質的車庫套件，這使我們與眾不同，使每次購買都成為您收藏的寶貴補充。我們直接與知名雕塑家和授權製造商合作，確保每套件都符合最高的細節和準確性標準。',
    gkHeavenCustomerService:
      '我們還以提供卓越的客戶服務而自豪。我們知識豐富的支持團隊由同為GK愛好者組成，他們總是熱衷於協助您解決有關套件選擇、組裝技巧或繪畫技巧的任何問題，確保從購買到項目完成的無縫體驗。',
    gkHeavenLoyaltyProgram:
      '此外，我們的忠誠度計劃會獎勵您的每次購買，將每花費的一元轉化為可以兌換未來訂單折扣的積分。加入我們的GK收藏家社區，獲得獨家參與工作坊、繪畫教程和即將發布的新品預覽的機會。',
    gkHeavenExperience:
      '今天就沉浸在GK天堂的世界中。探索我們精心挑選的系列，每個套件都訴說著藝術和激情的故事。用您喜愛製作和展示的作品豐富您的收藏，體驗品質、細節和創意的完美融合。立即在GK天堂購物，看看等待您的建模奇蹟。',
    gkHeavenExclusiveModels: '探索GK天堂獨家提供的GK模型',
    gkHeavenExclusiveIntro:
      '發掘您在其他地方找不到的獨特車庫套件寶藏。我們的獨家收藏包括由知名雕塑家和藝術家設計的限量版模型，每件作品都是體現創意和獨特性的傑作。從原創角色設計到稀有的授權人偶，我們的選擇滿足最挑剔的收藏家需求。',
    gkHeavenExclusiveFocus:
      '我們專注於獨家產品，確保我們的客戶能夠享受到將他們的愛好提升到新高度的獨特收藏體驗。通過不斷與才華橫溢的藝術家合作並獲得特殊的授權協議，我們帶來了處於GK世界前沿的新穎、動態的套件。探索這些獨特的模型，為您的收藏增添真正與眾不同的獨特性。',
    gkHeavenJoinUs:
      '今天就加入GK天堂大家庭，進入獨家車庫套件的世界。讓我們成為您發現新模型的嚮導，這些模型將激發並挑戰您進一步提升建模和繪畫技能。無論您正在尋找下一個雄心勃勃的項目，還是為您的收藏加冕的特殊作品，都可以在GK天堂找到。',
    previousSlide: '上一頁',
    nextSlide: '下一頁',
    dataFetchError: '獲取數據時發生錯誤。',
    productCategories: '商品分類',
  },
  en: {
    home: 'Home',
    cart: 'Cart',
    login: 'Login',
    logout: 'Logout',
    search: 'Search',
    language: 'Language',
    chinese: 'Chinese',
    english: 'English',
    gkHeaven: 'GK Heaven',
    orderHistory: 'Order History',
    profile: 'Profile',
    adminDashboard: 'Admin Dashboard',
    cookiePolicy: 'Cookie Policy',
    lastUpdated: 'Last Updated',
    cookiePolicyIntro:
      "Welcome to GK Heaven's Cookie Policy. This policy explains how we use cookies and similar technologies, and how you can control their use.",
    whatAreCookies: 'What are Cookies?',
    cookiesExplanation:
      'Cookies are small text files that websites store on your device. They are widely used to make websites work more efficiently and provide information to the website owners.',
    cookiesWeUse: 'Types of Cookies We Use',
    necessaryCookies: 'Necessary Cookies:',
    necessaryCookiesExample1:
      'These cookies are essential for the website to function properly and cannot be switched off in our systems.',
    necessaryCookiesExample2:
      'For example, cookies used to remember your login status or shopping cart contents.',
    functionalCookies: 'Functional Cookies:',
    functionalCookiesExample:
      'These cookies allow us to remember your preferences, such as language selection or region.',
    analyticsCookies: 'Analytics Cookies:',
    analyticsCookiesExample:
      'These cookies help us understand how visitors use our website.',
    advertisingCookies: 'Advertising Cookies:',
    advertisingCookiesExample:
      'These cookies are used to show you relevant advertisements.',
    howWeUseCookies: 'How We Use Cookies',
    cookiesUsage: 'We use cookies and similar technologies to:',
    cookiesUsageExample1:
      'Remember your login status and shopping cart contents',
    cookiesUsageExample2: 'Understand and save your preferences',
    cookiesUsageExample3: 'Collect statistics about website usage',
    cookiesUsageExample4: 'Personalize your shopping experience',
    cookiesUsageExample5: 'Help us improve our website',
    cookiesUsageExample6: 'Provide you with relevant advertisements',
    cookiePolicyAgreement:
      'By continuing to use our website, you agree to our use of cookies as described in this policy.',
    backToHome: 'Back to Home',
    intellectualPropertyStatement: 'Intellectual Property Statement',
    intellectualPropertyIntro:
      'GK Heaven respects and protects intellectual property rights. This statement outlines our intellectual property policies and the regulations you should follow when using our website and services.',
    copyright: 'Copyright',
    websiteContent:
      'All content on the GK Heaven website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, and software, is the property of GK Heaven or its content providers and is protected by copyright laws.',
    copyrightExample1:
      'You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website content without express written permission from GK Heaven.',
    copyrightExample2:
      'For user-generated content (such as comments, images, etc.) posted on our platform, users retain their copyright but grant GK Heaven a non-exclusive, worldwide, royalty-free, sublicensable right to use.',
    userGeneratedContent: 'User-Generated Content:',
    userContentExample1:
      'Users retain copyright for content they post on our platform (such as comments, images, etc.).',
    userContentExample2:
      'Users guarantee that the content they upload does not infringe on any third-party intellectual property rights.',
    trademarks: 'Trademarks',
    gkHeavenTrademarks: 'GK Heaven Trademarks:',
    trademarksExample1:
      '"GK Heaven" and related logos are registered trademarks of GK Heaven.',
    trademarksExample2:
      'These trademarks may not be used without explicit written permission from GK Heaven.',
    thirdPartyTrademarks: 'Third-Party Trademarks:',
    thirdPartyTrademarksExample1:
      'Other trademarks appearing on our website are the property of their respective owners.',
    thirdPartyTrademarksExample2:
      'Mention of these trademarks does not imply any affiliation or endorsement.',
    patents: 'Patents',
    gkHeavenPatents: 'GK Heaven Patents:',
    patentsExample1:
      'Certain GK Heaven products and technologies may be protected by one or more patents.',
    patentsExample2:
      'Unauthorized use, copying, or imitation of these patent-protected technologies is prohibited.',
    intellectualPropertyAgreement:
      'By using our website and services, you acknowledge that you have read, understood, and agree to comply with this Intellectual Property Statement.',
    loading: 'Loading...',
    cartpage: 'Cart',
    cartEmpty: 'Cart is empty :(',
    goShopping: 'Go Shopping',
    product: 'Product',
    quantity: 'Quantity',
    price: 'Price',
    subtotal: 'Subtotal',
    items: 'items',
    proceedToCheckout: 'Proceed to Checkout',
    order: 'Order',
    shippingAddress: 'Shipping Address',
    email: 'Email',
    phone: 'Phone',
    deliveredAt: 'Delivered at',
    notDelivered: 'Not delivered',
    paymentMethod: 'Payment Method',
    paidAt: 'Paid at',
    notPaid: 'Not paid',
    orderItems: 'Order Items',
    item: 'Item',
    orderSummary: 'Order Summary',
    tax: 'Tax',
    shipping: 'Shipping',
    total: 'Total',
    markAsDelivered: 'Mark as Delivered',
    newOrderId: 'New Order ID',
    updateId: 'Update ID',
    orderDeliveredSuccess: 'Order has been successfully delivered',
    orderIdUpdated: 'Order ID has been updated',
    orderPaidSuccess: 'Order has been successfully paid',
    error: 'An error occurred',
    noOrders: 'No orders...',
    orderId: 'Order ID',
    date: 'Date',
    paid: 'Paid',
    delivered: 'Delivered',
    action: 'Action',
    details: 'Details',
    paymentMethodsError: 'Error loading payment methods',
    noPaymentMethods: 'No payment methods available',
    next: 'Next',
    back: 'Back',
    edit: 'Edit',
    bankCardNumber: 'Bank Card Number',
    branchNumber: 'Branch Number',
    accountName: 'Account Name',
    transferNote: 'Customer must include note (identifier) when transferring',
    placeOrder: 'Place Order',
    orderPlacedSuccessfully: 'Order has been placed successfully',
    PayPal: 'PayPal',
    Stripe: 'Stripe',
    CashOnDelivery: 'Cash on Delivery',
    BankTransfer: 'Bank Transfer',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyIntro:
      'GK Heaven values and respects your privacy. This Privacy Policy is designed to explain how we collect, use, protect, and share your personal information.',
    informationCollection: 'Information Collection',
    informationCollectionTypes:
      'The types of information we collect include but are not limited to',
    personalInfo:
      'Personal identification information (such as name, email address, phone number)',
    shippingBillingAddress: 'Shipping and billing addresses',
    paymentInfo:
      'Payment information (credit card numbers, etc., but we do not store complete credit card information)',
    purchaseHistory: 'Purchase history and preferences',
    deviceInfo:
      'Device information (such as IP address, browser type, operating system)',
    usageData: 'Usage data (such as browsing history, clickstream data)',
    informationCollectionMethods:
      'We collect information through the following methods',
    directProvision:
      'Information directly provided when you create an account, make a purchase, or interact with us',
    automaticCollection:
      'Information automatically collected through cookies and similar technologies',
    thirdPartyProviders:
      'Information obtained from third-party service providers (such as payment processors)',
    informationUse: 'Information Use',
    informationUsePurposes:
      'We use the collected information for the following purposes',
    orderProcessing: 'Processing orders and providing customer service',
    personalizeExperience: 'Personalizing your shopping experience',
    improveWebsite: 'Improving our website, products, and services',
    sendTransactionEmails:
      'Sending transaction-related emails (such as order confirmations)',
    sendMarketingEmails:
      'Sending marketing communications (if you choose to receive them)',
    preventFraud: 'Preventing fraud and ensuring website security',
    legalObligations: 'Complying with legal obligations',
    informationSharing: 'Information Sharing',
    noSellOrRent:
      'We do not sell or rent your personal information to third parties.',
    sharingSituations:
      'We may share your information in the following situations',
    serviceProviders:
      'With third-party service providers necessary for providing services (such as payment processors, logistics companies)',
    legalRequirements: 'When required by law or to protect our rights',
    businessTransfer:
      'In the event of a company restructuring, merger, or sale',
    dataSecurity: 'Data Security',
    securityMeasures:
      'We take reasonable technical and organizational measures to protect your personal information, including',
    sslEncryption: 'Using SSL encryption to protect data transmission',
    regularUpdates: 'Regularly updating security systems and procedures',
    limitedAccess: 'Limiting employee access to personal information',
    securityAudits: 'Conducting regular security audits',
    securityDisclaimer:
      'While we strive to protect your personal information, please note that no security measures are perfect or impenetrable.',
    yourRights: 'Your Rights',
    dataProtectionRights:
      'Under applicable data protection laws, you have the following rights',
    accessPersonalInfo: 'Access your personal information',
    correctInaccurateInfo: 'Correct inaccurate personal information',
    deletePersonalInfo: 'Delete your personal information',
    restrictProcessing:
      'Restrict or object to the processing of your personal information',
    dataPortability: 'Data portability',
    withdrawConsent: 'Withdraw consent (where applicable)',
    exerciseRights:
      'To exercise these rights, please contact us using the contact information provided at the end of this policy.',
    cookiesAndTechnologies: 'Cookies and Similar Technologies',
    cookieManagement:
      'You can manage cookie preferences through your browser settings. However, please note that disabling cookies may affect certain website functionalities.',
    childrenPrivacy: "Children's Privacy",
    notForChildren:
      'Our services are not directed at children under 13 years of age. If we become aware that we have collected personal information from children under 13, we will take steps to delete such information promptly.',
    internationalDataTransfer: 'International Data Transfer',
    dataTransferConsent:
      'Your information may be transferred to and stored on servers located outside of Taiwan. By using our services, you consent to the transfer of your information to these locations.',
    policyUpdates: 'Policy Updates',
    policyUpdateNotification:
      'We may update this privacy policy from time to time. Significant changes will be notified through the website or email. We encourage you to review this page periodically for the latest information.',
    contactUs: 'Contact Us',
    contactInfo:
      'If you have any questions or concerns about our privacy policy, please contact us using the following information',
    address: 'Address',
    privacyPolicyAgreement:
      'By using our website, you confirm that you have read, understood, and agree to our Privacy Policy.',
    backToProductList: 'Back to Product List',
    description: 'Description',
    stockStatus: 'Stock Status',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    reviews: 'reviews',
    name: 'Name',
    password: 'Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    update: 'Update',
    register: 'Register',
    alreadyHaveAccount: 'Already have an account?',
    pleaseEnterName: 'Please enter your name',
    pleaseEnterEmail: 'Please enter your email',
    invalidEmailFormat: 'Invalid email format',
    pleaseEnterPassword: 'Please enter your password',
    pleaseConfirmPassword: 'Please confirm your password',
    passwordsDoNotMatch: 'Passwords do not match!',
    profileUpdateSuccess: 'Profile updated successfully',
    accountCreatedSuccess: 'Account created successfully',
    emailAlreadyInUse: 'Email is already in use',
    returnRefundPolicy: 'Return and Refund Policy',
    returnPolicyIntro:
      'At GK Heaven, we are committed to ensuring your satisfaction with every purchase. We understand that sometimes you may need to return an item or request a refund. This policy explains our return and refund process.',
    returnConditions: 'Return Conditions',
    returnPeriod: 'Return Period: Within 14 days of receiving the item.',
    productConditionRequirements: 'Product Condition Requirements:',
    unusedAndUnassembled:
      'Items must be unused, unassembled, and in their original packaging.',
    tagsIntact: 'All tags and anti-counterfeit labels must be intact.',
    noDamage: 'Items must not have any damage, stains, or odors.',
    nonReturnableItems: 'Non-Returnable Items:',
    openedOrUsedItems: 'Opened or used items (unless defective).',
    personalHygieneProducts: 'Personal hygiene products.',
    customItems: 'Custom or specially ordered items.',
    assembledModels: 'Assembled or partially assembled model kits.',
    digitalDownloads: 'Digital downloads.',
    giftCards: 'Gift cards.',
    returnProcess: 'Return Process',
    initiateReturn: 'Initiate Return:',
    loginAccount: 'Log into your GK Heaven account.',
    findOrder: 'Locate the order you wish to return.',
    selectReturnOption: 'Select the "Request Return" option.',
    fillReturnReason:
      'Fill in the reason for return and other necessary information.',
    returnAuthorization: 'Return Authorization:',
    reviewRequest: 'We will review your return request.',
    receiveRANumber:
      'Once approved, you will receive a Return Authorization (RA) number and detailed instructions.',
    packagingAndShipping: 'Packaging and Shipping:',
    securePackaging:
      "Package the item securely to ensure it won't be damaged during transit.",
    markRANumber: 'Clearly mark the RA number on the package.',
    useTrackableShipping:
      'Use a trackable shipping method to return the item to our designated address.',
    refundProcessing: 'Refund Processing',
    refundTime: 'Refund Time:',
    processRefund:
      'Once we receive and inspect the returned item, we will process the refund.',
    refundTimeframe:
      'Refunds are typically completed within 7-14 business days of receiving the return.',
    refundMethod: 'Refund Method:',
    originalPaymentMethod:
      'Refunds will be issued to the original payment method.',
    alternativeRefundMethod:
      'If the original payment method is unavailable, we will contact you to arrange an alternative refund method.',
    refundAmount: 'Refund Amount:',
    fullRefund:
      'Full refund of the item price (excluding shipping fees, unless the return is due to our error).',
    restockingFee:
      'A restocking fee may be charged if the item shows signs of use or damage.',
    returnShipping: 'Return Shipping:',
    customerResponsibility:
      'In general, return shipping costs are the responsibility of the customer.',
    companyResponsibility:
      'If the return is due to our error (e.g., wrong item sent or defective product), we will cover the return shipping costs.',
    originalShipping: 'Original Shipping:',
    nonRefundableShipping:
      'Original shipping fees are typically non-refundable unless the entire order is cancelled or returned.',
    freeShippingRecalculation:
      'For orders with free shipping promotions, partial returns may result in shipping charges being recalculated.',
    exchangePolicy: 'Exchange Policy',
    exchangeProcess:
      'If you need to exchange an item (e.g., for a different size or color):',
    returnOriginalItem:
      'Please return the original item following the normal return process.',
    reorderDesiredItem:
      'Once we process your return, you can place a new order for the desired item.',
    noDirectExchange:
      'We do not process direct exchanges to ensure inventory accuracy and streamline our processes.',
    damagedOrDefectiveItems: 'Damaged or Defective Items',
    receivingDamagedItems: 'If you receive a damaged or defective item:',
    contactWithin48Hours:
      'Please contact our customer service within 48 hours of receiving the item.',
    providePhotos: 'Provide clear photos of the damage or defect.',
    replacementOrRefund:
      'We will arrange for a replacement or full refund, including original shipping costs.',
    cancelOrder: 'Cancel Order',
    beforeShipping: 'If your order has not yet been shipped:',
    loginToCancel:
      'You can log into your account to request order cancellation.',
    immediateRefund:
      'Upon successful cancellation, we will process a full refund immediately.',
    afterShipping:
      'If the order has been shipped, please follow the normal return process.',
    specialCircumstances: 'Special Circumstances',
    promotionalItems:
      'Promotional Items: Some sale or clearance items may have special return policies. Please check the item description for details.',
    giftPurchases:
      'Gifts: If an item was purchased as a gift, the recipient may receive store credit of equal value as a refund.',
    wholesaleOrders:
      'Wholesale Orders: Different return policies may apply to wholesale orders. Please contact our wholesale department for details.',
    customerService: 'Customer Service Hotline',
    businessHours: 'Business Hours',
    businessHoursDetail: 'Monday to Friday 9:00-18:00 (Taipei Time)',
    policyUpdateNotice:
      'We reserve the right to update or modify this policy at any time. Any changes will be posted on this page.',
    category: 'Category',
    customerRating: 'Customer Rating',
    sortBy: 'Sort by',
    clear: 'Clear',
    results: 'results',
    noResults: 'No results',
    noProductFound: 'No product found',
    andUp: 'and up',
    all: 'All',
    yourBlindBox: 'Your Blind Box',
    enterDesiredAmount:
      'Please enter your desired amount to receive a personalized mystery box.',
    blindBoxContents:
      'The mystery box will contain random items matching your entered amount.',
    itemsAddedToCart:
      'Items will be added directly to your cart, and you can proceed to checkout.',
    orderConfirmation: 'Your order will be confirmed after successful payment.',
    fillOrderInfo: 'Fill Order Information',
    country: 'Country',
    rating: 'Rating',
    selectCountry: 'Select Country',
    phoneNumber: 'Phone Number',
    phoneNumberHint: '(Please include country code, e.g. +886 912345678)',
    enterPhoneNumber: 'Enter phone number',
    pleaseSelectCountry: 'Please select a country',
    pleaseEnterAddress: 'Please enter your address',
    pleaseEnterPhoneNumber: 'Please enter your phone number',
    invalidPhoneNumber:
      'Please enter a valid international phone number (e.g. +886 912345678)',
    gkHeavenShippingPolicy: 'GK Heaven Shipping Policy',
    shippingPolicyIntro:
      'At GK Heaven, we are committed to providing you with quality shipping services, ensuring your orders are delivered safely and on time. This policy outlines our shipping methods, costs, times, and other related information.',
    shippingMethods: 'Shipping Methods',
    domesticShipping: 'Domestic Shipping',
    standardShipping:
      'Standard Shipping: Applies to most orders, typically delivered within 3-5 business days.',
    expressShipping:
      'Express Shipping: Delivered within 1-2 business days (available for select areas only).',
    economyShipping:
      'Economy Shipping: For non-urgent orders, typically delivered within 5-7 business days.',
    internationalShipping: 'International Shipping',
    standardInternationalShipping:
      'Standard International Shipping: Usually delivered within 10-15 business days.',
    expressInternationalShipping:
      'Express International Shipping: Usually delivered within 5-7 business days (available for select countries/regions only).',
    shippingCosts: 'Shipping Costs',
    domesticShippingCosts: 'Domestic Shipping Costs',
    standardShippingCost:
      'Standard Shipping: Free for orders over €1,500, €150 for orders under €1,500.',
    expressShippingCost:
      'Express Shipping: Base fee of €250, additional €50 for every €1,000 increase in order value.',
    economyShippingCost: 'Economy Shipping: Flat rate of €100.',
    internationalShippingCosts: 'International Shipping Costs',
    internationalShippingCostCalculation:
      'Calculated based on destination country/region and package weight.',
    shippingCostAtCheckout: 'Detailed costs will be displayed at checkout.',
    specialCases: 'Special Cases',
    remoteAreaShipping: 'Remote areas may require additional shipping fees.',
    oversizedItemShipping:
      'Large or overweight items may incur additional handling fees.',
    shippingTimes: 'Shipping Times',
    orderProcessingTime: 'Order Processing Time',
    normalOrderProcessing:
      'Most orders are processed within 1-2 business days.',
    customOrderProcessing:
      'Custom or pre-order items may require additional processing time.',
    transitTime: 'Transit Time',
    transitTimeCalculation:
      'Transit time is calculated from when the order is shipped.',
    transitTimeFactors:
      'Actual delivery times may vary due to factors such as weather and customs inspections.',
    countriesWeShipTo: 'Countries We Ship To',
    mostCountriesShipping:
      'We currently offer international shipping to most countries and regions.',
    shippingRestrictions:
      'Some countries/regions may have shipping restrictions, please check at checkout.',
    customsAndTaxes: 'Customs and Taxes',
    customsFeesResponsibility:
      'International orders may be subject to additional customs duties and taxes.',
    customsFeesExclusion:
      'These fees are the responsibility of the customer and are not included in our shipping charges.',
    internationalShippingRestrictions: 'International Shipping Restrictions',
    importRestrictions:
      'Some items may be subject to import restrictions in the destination country/region.',
    orderTracking: 'Order Tracking',
    trackingInformation: 'Tracking Information',
    trackingNumberProvided:
      'You will receive an email with a tracking number once your order has been shipped.',
    trackingOnWebsite:
      'You can use this number to track your order status on our website.',
    updateFrequency: 'Update Frequency',
    domesticTrackingUpdate:
      'Tracking information is typically updated every 24-48 hours.',
    internationalTrackingUpdate:
      'Updates for international orders may be less frequent.',
    shippingIssues: 'Shipping Issues',
    lostOrDamagedPackages: 'Lost or Damaged Packages',
    reportLostOrDamaged:
      'If your package is lost or damaged during shipping, please contact our customer service immediately.',
    resolutionProcess:
      'We will work with the shipping company to resolve the issue and arrange for reshipment or refund if necessary.',
    delayedDeliveries: 'Delayed Deliveries',
    trackingDelayedOrder:
      'If your order is delayed beyond the expected delivery time, please check the tracking information or contact us.',
    investigateDelay:
      'We will investigate the cause of the delay and provide a solution.',
    specialShippingRequests: 'Special Shipping Requests',
    giftWrapping: 'Gift Wrapping',
    giftWrappingService: 'We offer gift wrapping services for €50 per item.',
    giftWrappingOption: 'Gift wrapping options can be selected at checkout.',
    specifiedDeliveryDate: 'Specified Delivery Date',
    requestDeliveryDate:
      'If you need to specify a delivery date, please note it in the comments section when placing your order.',
    deliveryDateLimitation:
      'We will do our best to accommodate your request, but cannot guarantee it in all cases.',
    shippingPartners: 'Shipping Partners',
    shippingPartnersIntro:
      'We work with several reputable shipping companies, including but not limited to:',
    domesticShippingPartners:
      'Domestic: Chunghwa Post, Black Cat, HCT Logistics',
    internationalShippingPartners: 'International: DHL, FedEx, UPS',
    shippingPartnerSelection:
      'The specific shipping company used will depend on your location and chosen shipping method.',
    shippingPolicyQuestions:
      "If you have any questions about our shipping policy or need assistance with your order's shipping, please don't hesitate to contact us:",
    termsOfService: 'Terms of Service',
    termsIntro:
      'Welcome to GK Heaven. Please read the following terms and conditions carefully as they apply to your access and use of our website and any related services we provide.',
    termsAcceptance: 'Acceptance of Terms',
    termsAcceptanceContent:
      'By accessing or using the GK Heaven website (referred to as "website"), you agree to be bound by these Terms of Service (referred to as "Terms"). If you do not agree to any part of these terms, you may not use our services.',
    termsAccountRegistration: 'Account Registration and Use',
    termsAccountRegistrationInfo:
      'You may need to create an account to use certain features of our website. You agree to provide accurate, complete, and up-to-date registration information.',
    termsAccountResponsibility:
      'You are responsible for maintaining the confidentiality of your account, including but not limited to your password, and you agree to accept responsibility for all activities that occur under your account.',
    termsUnauthorizedUse:
      'If you become aware of any unauthorized use of your account, you agree to notify GK Heaven immediately.',
    termsProductInfo: 'Product Information and Orders',
    termsProductInfoAccuracy:
      'We strive to ensure that all product information and descriptions on the website are accurate. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.',
    termsProductVariations:
      'Colors and sizes of products may vary slightly due to screen settings and measurement methods.',
    termsPriceChanges:
      'We reserve the right to change product specifications and prices without notice.',
    termsOrderAgreement:
      'By placing an order, you agree to pay all charges at the prices listed, including shipping fees and taxes where applicable.',
    termsIntellectualProperty: 'Intellectual Property',
    termsWebsiteContent:
      'All content on the website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, and software, is the property of GK Heaven or its content suppliers and is protected by copyright laws and international treaties.',
    termsUseRestrictions:
      'You may not copy, reproduce, modify, publish, transmit, transfer, sell, or otherwise use any materials from the website without the express written permission of GK Heaven.',
    termsUserBehavior: 'User Behavior',
    termsIllegalUse:
      'You agree not to use the website for any unlawful or unauthorized purpose.',
    termsProhibitedContent:
      'You must not post, upload, or share any defamatory, abusive, pornographic, threatening, or otherwise illegal content.',
    termsUnauthorizedAccess:
      'You must not attempt to gain unauthorized access to the website or any related systems.',
    termsDisclaimer: 'Disclaimer',
    termsAsIsService:
      'GK Heaven\'s services are provided on an "as is" and "as available" basis without any representations or warranties, express or implied.',
    termsNoGuarantees:
      'We do not guarantee that the website will always be available, error-free, or secure.',
    termsUserRisk: 'Your use of this website is at your own risk.',
    termsLiabilityLimitation: 'Limitation of Liability',
    termsLiabilityLimit:
      'To the fullest extent permitted by law, GK Heaven and its employees, officers, directors, agents, or affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages.',
    termsDamagesIncluded:
      'This includes but is not limited to loss of profits, goodwill, data, or other intangible losses resulting from the use of or inability to use our services.',
    termsGoverningLaw: 'Governing Law',
    termsLawJurisdiction:
      'These Terms shall be governed by and construed in accordance with the laws of the Republic of China (Taiwan), without regard to its conflict of law provisions.',
    termsDisputeResolution:
      'Any dispute arising from or relating to these Terms shall be submitted to the Taipei District Court in Taiwan as the court of first instance.',
    termsChanges: 'Changes to Terms',
    termsRightToModify:
      'We reserve the right to modify these Terms at any time. Significant changes will be notified via the website or email.',
    termsContinuedUse:
      'Your continued use of the website will be deemed acceptance of the modified Terms.',
    termsContactInfo:
      'If you have any questions about these Terms of Service, please contact us at:',
    termsAgreement:
      'By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
    invalidEmailOrPassword: 'Invalid email or password',
    dontHaveAccount: "Don't have an account?",
    customerServiceHotline: 'Customer Service Hotline',
    companyAddress: '68 Songgao Road, Xinyi District, Taipei City',
    termscustomerResponsibility:
      "It is the customer's responsibility to understand and comply with the import regulations of the destination country.",
    turnImaginationIntoReality: 'Turn Your Imagination Into Reality',
    gkHeavenDescription:
      'is a top-tier figurine shop in Europe. Established in 2019.',
    latestProducts: 'Latest Products',
    pageNotFound: '404 - Page not found',
    notices: 'Notices',
    blindBoxSeries: 'Blind Box Series',
    animeSeries: 'Anime Series',
    otherSeries: 'Other Series',
    blindBox: 'Blind Box',
    anime: 'Anime',
    other: 'Other',
    userLogin: 'User Login',
    ourProducts: 'Our Products',
    legalNotices: 'Legal Notices',
    followUs: 'Follow Us',
    shippingPolicy: 'Shipping Policy',
    intellectualPropertyNotice: 'Intellectual Property Notice',
    copyrightNotice: '© {year} GK Heaven. All rights reserved.',
    amount: 'Amount',
    securePayment: 'Secure Payment',
    securedByStripe: 'Secured by Stripe',
    customerSupport: '24/7 Customer Support',
    phoneAndEmailSupport: 'Phone and Email Support',
    qualityBlindBox: 'Quality Blind Box',
    carefullySelectedSurprises: 'Carefully Selected Surprises',
    easyOrdering: 'Easy Ordering',
    easyPurchaseWithClick: 'Easy Purchase with a Click',
    notice: 'Notice',
    addBlindBoxToCart: 'Add Blind Box to Cart',
    addToCart: 'Add to Cart',
    recommendedProducts: 'Recommended Products',
    readMore: 'Read More',
    hide: 'Hide',
    gkHeavenTitle:
      'GK Heaven: The Ultimate Destination for Garage Kit Enthusiasts',
    gkHeavenSubtitle:
      'Your Premier Source for High-Quality Garage Kits and Figure Models',
    gkHeavenIntro:
      "At GK Heaven, we believe that every garage kit tells a unique story. Explore our rich selection of meticulously crafted model kits, featuring popular anime characters, movie icons, and original creations, all designed to bring your favorite fictional worlds to life. Whether you're a seasoned model maker or just beginning your journey into the fascinating world of GK, our extensive collection caters to all skill levels and interests.",
    gkHeavenQuality:
      'Our commitment to quality and authenticity ensures that each kit in our collection not only offers exquisite detail but also captures the essence of the characters they represent. From the fine textures of our resin kits to the precise sculpting of each figure, every item is carefully selected to offer you the best in GK craftsmanship. Our user-friendly online store makes browsing and purchasing a breeze, allowing you to have your chosen kits delivered right to your doorstep with just a few clicks.',
    gkHeavenExplore:
      'Dive deep into our diverse range of garage kits and find your next masterpiece. From the dynamic poses of our action figure kits to the serene beauty of statue collections and the intricate details of diorama sets, GK Heaven has it all. Each product comes with detailed descriptions, high-resolution images, and often painting guides, giving you a comprehensive understanding of the kit and its potential.',
    gkHeavenNewArrivals:
      'Stay at the forefront of GK trends with our constantly updated new arrivals, keeping your collection fresh and exciting. Subscribe to our newsletter for the latest releases, limited editions, and exclusive pre-order information tailored for GK enthusiasts. At GK Heaven, passion meets craftsmanship, offering you an unparalleled online shopping experience for garage kits.',
    whyChooseGKHeaven: 'Why Choose GK Heaven?',
    gkHeavenUnique:
      'At GK Heaven, quality meets creativity. We stand out by our commitment to sourcing authentic and high-quality garage kits, making each purchase a valuable addition to your collection. We work directly with renowned sculptors and licensed manufacturers to ensure each kit meets the highest standards of detail and accuracy.',
    gkHeavenCustomerService:
      'We also pride ourselves on providing exceptional customer service. Our knowledgeable support team, composed of fellow GK enthusiasts, is always eager to assist you with any questions about kit selection, assembly techniques, or painting tips, ensuring a seamless experience from purchase to project completion.',
    gkHeavenLoyaltyProgram:
      'Furthermore, our loyalty program rewards your every purchase, turning each dollar spent into points that can be redeemed for discounts on future orders. Join our community of GK collectors and gain exclusive access to workshops, painting tutorials, and sneak peeks of upcoming releases.',
    gkHeavenExperience:
      "Immerse yourself in the world of GK Heaven today. Explore our carefully curated collection, where each kit tells a story of artistry and passion. Enrich your collection with pieces you'll love to build and display, experiencing the perfect blend of quality, detail, and creativity. Shop at GK Heaven now and see the modeling wonders that await you.",
    gkHeavenExclusiveModels:
      'Explore Exclusive GK Models Only Available at GK Heaven',
    gkHeavenExclusiveIntro:
      "Discover a treasure trove of unique garage kits you won't find anywhere else. Our exclusive collection features limited edition models designed by renowned sculptors and artists, each piece a masterpiece of creativity and uniqueness. From original character designs to rare licensed figures, our selection caters to the most discerning collectors.",
    gkHeavenExclusiveFocus:
      'Our focus on exclusive products ensures that our customers enjoy a unique collecting experience that elevates their hobby to new heights. By constantly collaborating with talented artists and securing special licensing agreements, we bring you novel, dynamic kits that are at the forefront of the GK world. Explore these unique models and add true distinction to your collection.',
    gkHeavenJoinUs:
      "Join the GK Heaven family today and step into a world of exclusive garage kits. Let us be your guide to discovering new models that will inspire and challenge you to further elevate your modeling and painting skills. Whether you're looking for your next ambitious project or that special piece to crown your collection, you'll find it at GK Heaven.",
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    dataFetchError: 'An error occurred while fetching data.',
    productCategories: 'Product Categories',
  },
};
