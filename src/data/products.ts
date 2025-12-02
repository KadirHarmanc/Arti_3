export type ProductDetailSection = {
  heading: string
  text?: string
  bullets?: string[]
}

export type ProductDetailTranslations = {
  title: string
  description: string
  sections: ProductDetailSection[]
}

export type ProductDetail = {
  slug: string
  title: string
  description: string
  heroImage?: string
  category: string
  subCategory?: string
  group: string
  sections: ProductDetailSection[]
  en?: ProductDetailTranslations
}

export const AKINSOFT_PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "wolvox-mrp": {
    slug: "wolvox-mrp",
    title: "WOLVOX MRP II",
    description:
      "Üretim kaynak planlamasını, malzeme ihtiyaç listelerini ve kapasite yüklerini tek merkezden yöneten WOLVOX MRP II ile hangi işin, ne zaman ve hangi kaynaklarla yapılacağını netleştirin.",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Üretim planlaması ve malzeme ihtiyaç planlaması yapmak isteyen tüm üretim işletmelerine hitap etmektedir. Modüler yapısı sayesinde oldukça zengin bir kullanım alanına sahiptir. İşletmenizin küçük, orta ölçekli veya büyük olması fark etmeksizin rahatlıkla kullanılabilmesi için kurgulanmış bir alt yapıya sahiptir.",
        bullets: [
          "Otomotiv, gıda, mobilya, tekstil, elektrik-elektronik ve makine imalat sektörlerinde faaliyet gösteren işletmeler",
          "Üretim planlaması yapan orta ve büyük ölçekli işletmeler",
          "Malzeme ihtiyaç planlaması ve kapasite yönetimi gerektiren üretim tesisleri",
          "Fason üretim, montaj hatası ve karmaşık üretim süreçlerine sahip firmalar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX ERP ile tam entegre çalışan MRP II modülü, İş Emri, İş Merkezi, Rota, Üretim Reçetesi, Kapasite Planlama, Malzeme İhtiyaç Planlaması, Online İş Merkezi, Üretim Takip, Kalite Kontrol, Fason Üretim Takip, Üretim Maliyet Analizi, Üretim Raporlama modüllerini desteklemektedir.",
        bullets: [
          "Planlama Modülleri: İş Emri, İş Merkezi, Rota, Üretim Reçetesi, Kapasite Planlama modülleri ile üretim süreçlerini yönetin",
          "Malzeme Yönetimi: Malzeme İhtiyaç Planlaması, Stok, Depo modülleri ile malzeme akışını takip edin",
          "Üretim Takip: Online İş Merkezi, Üretim Takip, Kalite Kontrol modülleri ile üretim süreçlerini izleyin",
          "Entegrasyonlar: WOLVOX ERP, Satın Alma, Stok, Cari modülleri ile tam entegre çalışma",
          "Özel Modüller: Fason Üretim Takip, Üretim Maliyet Analizi, Üretim Raporlama modülleri",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Malzeme ihtiyaçlarını sipariş, stok ve üretim reçetelerine göre otomatik hesaplama",
          "İş emri, iş merkezi ve rota bazlı kapasite planlama ve yük dengeleme",
          "Üretim öncesi ve sonrası maliyet, süre ve verimlilik analizleri",
          "Normal, parçalama ve birleştirme senaryolarıyla fason üretimleri ayrıntılı izleme",
          "Online İş Merkezi ile sahadan iş emri durumlarını gerçek zamanlı takip etme",
          "Satın alma, stok ve kalite kontrol modülleriyle entegre çalışarak hataları en aza indirme",
          "Üretim reçetelerini oluşturup otomatik stok tamamlamaları yapabilme",
          "İş merkezi kapasitelerini tanımlayıp yük dengeleme yapabilme",
          "Rota bazlı üretim planlaması ile üretim süreçlerini optimize edebilme",
          "Üretim maliyetlerini gerçek zamanlı takip edip analiz yapabilme",
        ],
      },
    ],
    en: {
      title: "WOLVOX MRP II",
      description:
        "Clarify which work will be done, when, and with which resources using WOLVOX MRP II, which manages production resource planning, material requirement lists, and capacity loads from a single center.",
      sections: [
        {
          heading: "Usage Areas",
          text: "It appeals to all manufacturing businesses that want to perform production planning and material requirement planning. Thanks to its modular structure, it has a very rich usage area. It has an infrastructure designed to be used comfortably regardless of whether your business is small, medium or large scale.",
          bullets: [
            "Businesses operating in automotive, food, furniture, textile, electrical-electronics and machinery manufacturing sectors",
            "Medium and large-scale businesses that perform production planning",
            "Production facilities requiring material requirement planning and capacity management",
            "Companies with subcontracting, assembly errors and complex production processes",
          ],
        },
        {
          heading: "Included Modules",
          text: "MRP II module that works fully integrated with WOLVOX ERP supports Work Order, Work Center, Route, Production Recipe, Capacity Planning, Material Requirement Planning, Online Business Center, Production Tracking, Quality Control, Subcontracting Tracking, Production Cost Analysis, Production Reporting modules.",
          bullets: [
            "Planning Modules: Manage production processes with Work Order, Work Center, Route, Production Recipe, Capacity Planning modules",
            "Material Management: Track material flow with Material Requirement Planning, Inventory, Warehouse modules",
            "Production Tracking: Monitor production processes with Online Business Center, Production Tracking, Quality Control modules",
            "Integrations: Full integration with WOLVOX ERP, Purchasing, Inventory, Current Accounts modules",
            "Special Modules: Subcontracting Tracking, Production Cost Analysis, Production Reporting modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic calculation of material requirements based on orders, inventory and production recipes",
            "Capacity planning and load balancing based on work orders, work centers and routes",
            "Cost, time and efficiency analyses before and after production",
            "Detailed tracking of subcontracting with normal, breakdown and assembly scenarios",
            "Real-time tracking of work order statuses from the field with Online Business Center",
            "Minimizing errors by working integrated with purchasing, inventory and quality control modules",
            "Being able to create production recipes and make automatic inventory completions",
            "Being able to define work center capacities and perform load balancing",
            "Being able to optimize production processes with route-based production planning",
            "Being able to track production costs in real-time and perform analysis",
          ],
        },
      ],
    },
  },
  "wolvox-erp": {
    slug: "wolvox-erp",
    title: "WOLVOX ERP",
    description:
      "AKINSOFT WOLVOX ERP modüler yapısı ile işletmenizin ihtiyaç duyduğu bütün Kurumsal Kaynak Planlaması işlemlerini kolayca yönetmenizi sağlar!",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Ön Muhasebe / Kurumsal Kaynak Planlaması kullanmak isteyen tüm işletmelere hitap etmektedir. Modüler yapısı sayesinde oldukça zengin bir kullanım alanına sahiptir. İşletmenizin küçük, orta ölçekli veya büyük olması fark etmeksizin rahatlıkla kullanılabilmesi için kurgulanmış bir alt yapıya sahiptir.",
        bullets: [
          "Perakende, toptan satış, üretim, hizmet ve ticaret sektörlerinde faaliyet gösteren işletmeler",
          "Tek şubeli veya çok şubeli yapıda çalışan küçük, orta ve büyük ölçekli işletmeler",
          "Muhasebe, satış, satın alma, depo ve stok yönetimi süreçlerini dijitalleştirmek isteyen firmalar",
          "Online ve offline çalışma modlarını destekleyen esnek yapı sayesinde her türlü işletme modeline uyum sağlar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Çoklu kullanıcı desteği ile Cari, Cari2, Kasa, Stok, Stok2, Fatura, Çek-Senet, İrsaliye, Teklif, Sipariş, Döviz Takip, Döviz Bürosu, Depo, Lokasyon, Banka, Kartoteks (Barkod basımı), Pazarlama, Seri No-Garanti Takip, Taksit Takip, Seri Senet Basımı, Servis, Üretim, Bonus Sistemi, MRPII,CRM, e-Dönüşüm, e-Adisyon, Zincir Pazarlama, İthalat modüllerini desteklemektedir.",
        bullets: [
          "Muhasebe Modülleri: Cari, Kasa, Banka, Çek-Senet, Döviz Takip modülleri ile finansal süreçleri yönetin",
          "Satış & Satın Alma: Fatura, İrsaliye, Teklif, Sipariş modülleri ile ticari işlemleri takip edin",
          "Stok Yönetimi: Stok, Stok2, Depo, Lokasyon, Barkod modülleri ile envanter kontrolü sağlayın",
          "Entegrasyonlar: e-Fatura, e-İrsaliye, e-Defter, Online Banka, Açık Bankacılık entegrasyonları",
          "Özel Modüller: Servis, Üretim, MRP II, CRM, İnsan Kaynakları, Bonus Sistemi modülleri",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Raporlama süreçlerini kolaylaştıran yapay zeka destekli WolvoxAI Rapor Asistanı ile raporlarınızı daha hızlı, akıllı ve pratik şekilde oluşturabilirsiniz.",
          "Şubelerde online veya offline kullanım ile ürün transferlerini kolayca yapabilme,",
          "Pek çok formda durum değişikliği için otomatik e-mail ve SMS gönderebilme,",
          "Cari bazında indirim oranı veya fiyat tanımları oluşturabilme,",
          "Promosyon tanımları oluşturup dönemsel promosyon uygulayabilme,",
          "Zorunlu alanlar belirleyerek veri girişleri esnasında hata payını en aza indirebilme,",
          "Belge onay tanımları yaparak şirket hiyerarşisine uygun limit yetkileri belirleyebilme,",
          "Uyarıcı ayarları ile işlerinizi asiste etme,",
          "E-Teklif özelliği ile tedarikçilerden teklifleri kolayca alabilme,",
          "Script kullanarak kullanım amacına uygun geliştirmeler yapabilme,",
          "Sevk planlaması yaparak depodan çıkan ürünlerin eksiksiz bir şekilde araca yüklenmesine yardımcı olabilmektedir.",
          "Online Banka ve Açık Bankacılık Entegrasyonları sayesinde manuel giriş yapmadan bakiyelerinizi otomatik olarak güncelleyebilme.",
        ],
      },
    ],
    en: {
      title: "WOLVOX ERP",
      description:
        "AKINSOFT WOLVOX ERP's modular structure allows you to easily manage all Enterprise Resource Planning operations your business needs!",
      sections: [
        {
          heading: "Usage Areas",
          text: "It appeals to all businesses that want to use Pre-Accounting / Enterprise Resource Planning. Thanks to its modular structure, it has a very rich usage area. It has an infrastructure designed to be used comfortably regardless of whether your business is small, medium or large scale.",
          bullets: [
            "Businesses operating in retail, wholesale, manufacturing, service and trade sectors",
            "Small, medium and large-scale businesses working in single or multi-branch structures",
            "Companies that want to digitize accounting, sales, purchasing, warehouse and inventory management processes",
            "Adapts to all business models thanks to its flexible structure supporting online and offline operation modes",
          ],
        },
        {
          heading: "Included Modules",
          text: "With multi-user support, it supports Current Accounts, Current Accounts 2, Cash, Inventory, Inventory 2, Invoice, Check-Promissory Note, Waybill, Quotation, Order, Currency Tracking, Currency Office, Warehouse, Location, Bank, Card Index (Barcode printing), Marketing, Serial No-Warranty Tracking, Installment Tracking, Serial Promissory Note Printing, Service, Production, Bonus System, MRP II, CRM, e-Transformation, e-Receipt, Chain Marketing, Import modules.",
          bullets: [
            "Accounting Modules: Manage financial processes with Current Accounts, Cash, Bank, Check-Promissory Note, Currency Tracking modules",
            "Sales & Purchasing: Track commercial transactions with Invoice, Waybill, Quotation, Order modules",
            "Inventory Management: Provide inventory control with Inventory, Inventory 2, Warehouse, Location, Barcode modules",
            "Integrations: e-Invoice, e-Waybill, e-Ledger, Online Bank, Open Banking integrations",
            "Special Modules: Service, Production, MRP II, CRM, Human Resources, Bonus System modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "You can create your reports faster, smarter and more practically with WolvoxAI Report Assistant, an AI-powered tool that facilitates reporting processes.",
            "Easily transfer products between branches with online or offline usage,",
            "Automatically send e-mail and SMS for status changes in many forms,",
            "Create discount rates or price definitions based on current accounts,",
            "Create promotion definitions and apply periodic promotions,",
            "Minimize error margin during data entry by defining mandatory fields,",
            "Set limit authorizations appropriate to company hierarchy by making document approval definitions,",
            "Assist your work with alert settings,",
            "Easily receive quotations from suppliers with E-Quotation feature,",
            "Make developments suitable for the purpose of use by using scripts,",
            "It helps to load products leaving the warehouse completely onto the vehicle by making shipping planning.",
            "Automatically update your balances without manual entry thanks to Online Bank and Open Banking Integrations.",
          ],
        },
      ],
    },
  },
  "wolvox-insan-kaynaklari": {
    slug: "wolvox-insan-kaynaklari",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX İnsan Kaynakları",
    description:
      "Puantajdan bordroya, izin yönetiminden performans değerlendirmesine kadar çalışan yaşam döngüsünü tek platformda yöneten modüler insan kaynakları çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Barkodlu proximity kartlar ve parmak izi okuyucu sistemler ile personel giriş-çıkışlarını kontrol altına almak isteyen işletmelere ve personel özlük bilgiler ile maaş takibinin yanı sıra bordro ve puantaj işlemlerini takip etmek isteyen işletmelere hitap etmektedir.",
        bullets: [
          "Personel giriş-çıkış kontrolü yapmak isteyen işletmeler",
          "Bordro ve puantaj işlemlerini dijitalleştirmek isteyen firmalar",
          "Personel özlük bilgileri ve maaş takibi gerektiren işletmeler",
          "E-Bildirge ve SGK bildirim süreçlerini otomatikleştirmek isteyen şirketler",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Personel işlemleri, puantaj bordro takibi, e-bildirge sistemine uygun XML dosya hazırlama, aylık bildirgeler, giriş-çıkış bildirgeleri, vizite kağıtları, işyeri bildirgeleri, raporlamalar, iş başvuru kayıt takibi ile iş ilan kayıt modüllerini ve ziyaretçi takip modüllerini içermektedir.",
        bullets: [
          "Personel işlemleri ve özlük bilgileri yönetimi",
          "Puantaj ve bordro takip modülleri",
          "E-Bildirge sistemine uygun XML dosya hazırlama",
          "Aylık bildirgeler, giriş-çıkış bildirgeleri ve vizite kağıtları",
          "İşyeri bildirgeleri ve raporlama modülleri",
          "İş başvuru kayıt takibi ve iş ilan kayıt modülleri",
          "Ziyaretçi takip modülleri",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Parmak izi, yüz tanıma, proximity ve barkodlu kartlar ile personellerinizin giriş-çıkış takibini yapabilirsiniz",
          "Personellerinizin geç kalma süresini tespit ederek dilerseniz maaşına yansıtabilirsiniz",
          "Personelinizin fazla çalışma süresini tespit ederek istediğiniz katsayıdan fazla mesai ücreti işlemesini sağlayabilirsiniz",
          "Personel kartlarına dosya ekleyebilirsiniz (Eklediğiniz dosyalar bilgisayarınızdan silinse dahi programda kayıtlı kalacaktır)",
          "Personellerinizin puantajlarını tek tek veya toplu olarak düzenleyebilirsiniz",
          "Online işlem merkezi özelliği sayesinde e-bildirge, SGK işe giriş ve ayrılış ve çalışmadığına dair bildirimleri göndermek için sistemin ilgili sayfalara otomatik giriş yapmasını sağlayabilirsiniz",
          "Web siteniz üzerinden iş başvurusu alarak iş başvurularının İnsan Kaynakları programına otomatik kaydolmasını sağlayabilirsiniz",
          "Personellerinizin web siteniz üzerinden kendi kullanıcı adı ve parolaları ile giriş yaparak aylık çalışma saatlerinin ve maaş durumlarının görüntülenmesini sağlayabilirsiniz",
          "Düzenlenen eğitim ve etkinliklere katılımla ilgili raporlamalar alabilirsiniz",
          "360 performans yönetimi ile çalışanlarınızın performansını değerlendirebilirsiniz",
        ],
      },
    ],
    en: {
      title: "WOLVOX Human Resources",
      description:
        "A modular human resources solution that manages the entire employee lifecycle from attendance to payroll, from leave management to performance evaluation on a single platform.",
      sections: [
        {
          heading: "Usage Areas",
          text: "It appeals to businesses that want to control employee entry-exit with barcode proximity cards and fingerprint reader systems, and businesses that want to track payroll and attendance processes in addition to employee personal information and salary tracking.",
          bullets: [
            "Businesses that want to perform employee entry-exit control",
            "Companies that want to digitize payroll and attendance processes",
            "Businesses requiring employee personal information and salary tracking",
            "Companies that want to automate E-Notification and SSI notification processes",
          ],
        },
        {
          heading: "Included Modules",
          text: "It includes personnel operations, attendance payroll tracking, XML file preparation compatible with e-notification system, monthly notifications, entry-exit notifications, visit papers, workplace notifications, reporting, job application record tracking and job posting record modules and visitor tracking modules.",
          bullets: [
            "Personnel operations and personal information management",
            "Attendance and payroll tracking modules",
            "XML file preparation compatible with E-Notification system",
            "Monthly notifications, entry-exit notifications and visit papers",
            "Workplace notifications and reporting modules",
            "Job application record tracking and job posting record modules",
            "Visitor tracking modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "You can track your employees' entry-exit with fingerprint, face recognition, proximity and barcode cards",
            "You can detect your employees' late arrival time and reflect it on their salary if you wish",
            "You can detect your employees' overtime and ensure that overtime pay is processed above the coefficient you want",
            "You can add files to employee cards (Files you add will remain in the program even if deleted from your computer)",
            "You can edit your employees' attendance records one by one or in bulk",
            "Thanks to the online transaction center feature, you can have the system automatically log in to the relevant pages to send e-notifications, SSI job entry and exit and non-working notifications",
            "You can receive job applications through your website and have job applications automatically registered to the Human Resources program",
            "You can have your employees log in through your website with their own username and password to view their monthly working hours and salary status",
            "You can get reports on participation in organized training and events",
            "You can evaluate your employees' performance with 360 performance management",
          ],
        },
      ],
    },
  },
  "octocloud": {
    slug: "octocloud",
    category: "Ticari",
    subCategory: "Ticari/Bulut",
    group: "Bulut",
    title: "OctoCloud",
    description:
      "İnternet üzerinden bulut ön muhasebe programı kullanmanın rahatlığını yaşayın. Bulut ön muhasebe ile dilediğiniz yerden programınıza bağlanın.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Ön muhasebe işlerinizi OctoCloud ile buluta taşıyın, istediğiniz zaman istediğiniz yerden erişmenin avantajını yaşayın.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Cari, kasa, stok, fatura, çek / senet, banka, teklif, sipariş, irsaliye, döviz, online tahsilat, banka online veri entegrasyonu, API erişim modülü, B2B müşteri bilgi portalı, takvim, görev takip",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Online tahsilat",
          "Mobil (responsive) uyumluluk",
          "Excel'den müşteri/tedarikçi ve ürün aktarımı",
          "Trend ürünleri görüntüleyebilme",
          "e-Fatura ve e-Arşiv düzenleyebilme",
          "Varyantlı ürün takibi",
          "Riskli müşteri belirleme",
          "Alış faturası, alış irsaliyesi, alınan teklif, verilen sipariş ve iade faturası girişleri",
          "Tasarlanabilir form dizaynı",
          "Görev takip ve takvim üzerinden günlük etkinlikleri görüntüleyebilme",
        ],
      },
    ],
    en: {
      title: "OctoCloud",
      description:
        "Experience the convenience of using cloud-based pre-accounting software over the internet. Connect to your program from anywhere with cloud pre-accounting.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Move your pre-accounting work to the cloud with OctoCloud, enjoy the advantage of accessing it anytime, anywhere.",
        },
        {
          heading: "Included Modules",
          text: "Current accounts, cash, inventory, invoice, check/promissory note, bank, quotation, order, waybill, currency, online collection, bank online data integration, API access module, B2B customer information portal, calendar, task tracking",
        },
        {
          heading: "Key Features",
          bullets: [
            "Online collection",
            "Mobile (responsive) compatibility",
            "Customer/supplier and product transfer from Excel",
            "Viewing trending products",
            "Issuing e-Invoice and e-Archive",
            "Variant product tracking",
            "Identifying risky customers",
            "Purchase invoice, purchase waybill, received quotation, given order and return invoice entries",
            "Designable form design",
            "Viewing daily activities through task tracking and calendar",
          ],
        },
      ],
    },
  },
  "eofis": {
    slug: "eofis",
    category: "Sektörel",
    group: "Wolvox",
    title: "eOfis",
    description:
      "Çağrı merkezi, teknik servis ve büro operasyonlarını tek ekranda toplayan eOfis; müşteri etkileşimlerini, iş emirlerini ve doküman paylaşımını uçtan uca yönetir.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Servis hizmeti veren işletmeler, çağrı merkezleri, satış sonrası destek ekipleri ve sahada çalışan ekiplerin koordinasyonu için idealdir.",
      },
      {
        heading: "İş Süreçleri",
        text: "Müşteri kayıt, çağrı karşılama, servis fişi, görev takibi, doküman arşivi, stok ve fatura bağlantıları tek panelden yönetilir.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Çağrı ekranı ile müşteri bilgilerini arama esnasında otomatik getirir",
          "Servis fişleri, randevu ve personel atamalarını tablolar üzerinden yönetme",
          "Müşteri ile paylaşılan sözleşme, teklif ve raporları güvenli biçimde arşivleme",
          "WOLVOX ERP ile çift yönlü veri alışverişi sayesinde stok, fatura ve cari bilgilerini senkron tutma",
        ],
      },
    ],
    en: {
      title: "eOfis",
      description:
        "eOfis, which brings together call center, technical service and office operations on a single screen, manages customer interactions, work orders and document sharing end-to-end.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for businesses providing service, call centers, post-sales support teams and coordination of field teams.",
        },
        {
          heading: "Business Processes",
          text: "Customer registration, call handling, service ticket, task tracking, document archive, inventory and invoice connections are managed from a single panel.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatically brings customer information during search with call screen",
            "Managing service tickets, appointments and personnel assignments through tables",
            "Securely archiving contracts, quotations and reports shared with customers",
            "Keeping inventory, invoice and current account information synchronized thanks to bidirectional data exchange with WOLVOX ERP",
          ],
        },
      ],
    },
  },
  "octoplus": {
    slug: "octoplus",
    category: "Ticari",
    subCategory: "Ticari/OctoPlus",
    group: "OctoPlus",
    title: "OctoPlus",
    description:
      "OctoPlus tüm sektörlere uyumlu, uygun fiyatlı, esnek bir ön muhasebe çözümüdür. Cari, stok, fatura, kasa, e-Fatura, e-Arşiv gibi ihtiyaçları tek pakette sunar.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Ön muhasebe kullanılan tüm ticari işletmelere hitap etmektedir. Tekstilciler, üreticiler, toptancılar, yedek parçacılar, nakliyatçılar, bilişim sektörü, mobilyacılar, marketler, mağazalar, plastikçiler, petrolcüler, pazarlamacılar, döviz büroları, beyaz eşyacılar ve hizmet sektörü gibi alanlarda kullanılmaktadır.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Çok kullanıcılı muhasebe otomasyonu, cari, kasa, stok, fatura, çek-senet, irsaliye, teklif, sipariş, döviz takip, depo, banka, kartoteks, pazarlama, üretim, seri no-garanti takip, taksit takip, servis, nakliye, seri senet basımı, valörlü hesap, e-Fatura, e-Arşiv modüllerinden oluşur.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "SQL tabanlı, hızlı ve özelleştirilebilir raporlama sistemi",
          "Modüller arasında tam entegrasyon",
          "Excel'den veri transferi ve Excel'e dışa aktarım",
          "Cari virman, valör ve yaşlandırma takibi",
          "Stok ve cari kayıtlarında seri etiket yazdırma",
          "Yurt içi ve yurt dışı satış faturaları oluşturma",
          "Teklif ve siparişleri irsaliye/fatura ile entegre takip edebilme",
          "Kredi kartı ve senet ile taksit planlama",
          "Üretim reçetesi oluşturup otomatik stok tamamlamaları yapabilme",
          "e-Fatura ve e-Arşiv desteği ile e-dönüşüm süreçlerini yönetme",
        ],
      },
    ],
    en: {
      title: "OctoPlus",
      description:
        "OctoPlus is an affordable, flexible pre-accounting solution compatible with all sectors. It offers current accounts, inventory, invoice, cash, e-Invoice, e-Archive and similar needs in a single package.",
      sections: [
        {
          heading: "Usage Areas",
          text: "It appeals to all commercial businesses using pre-accounting. It is used in areas such as textile manufacturers, manufacturers, wholesalers, spare parts dealers, transporters, IT sector, furniture manufacturers, markets, stores, plastic manufacturers, fuel dealers, marketers, currency exchange offices, white goods dealers and service sector.",
        },
        {
          heading: "Included Modules",
          text: "It consists of multi-user accounting automation, current accounts, cash, inventory, invoice, check-promissory note, waybill, quotation, order, currency tracking, warehouse, bank, card index, marketing, production, serial no-warranty tracking, installment tracking, service, transportation, serial promissory note printing, value date account, e-Invoice, e-Archive modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "SQL-based, fast and customizable reporting system",
            "Full integration between modules",
            "Data transfer from Excel and export to Excel",
            "Current account transfer, value date and aging tracking",
            "Serial label printing in inventory and current account records",
            "Creating domestic and international sales invoices",
            "Being able to track quotations and orders integrated with waybill/invoice",
            "Installment planning with credit card and promissory note",
            "Being able to create production recipes and make automatic inventory completions",
            "Managing e-transformation processes with e-Invoice and e-Archive support",
          ],
        },
      ],
    },
  },
  "wolvox-restoran": {
    slug: "wolvox-restoran",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Restoran",
    description:
      "Restoran, kafe, bar, otel, spa ve bilardo salonlarında adisyon, mutfak ve servis süreçlerini tek panelden yönetin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Restoran, kafe, bar, otel, spa ve bilardo salonlarında adisyon takibi yapmak isteyen işletmelere hitap eder.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX ERP, WOLVOX Otel, e-Adisyon, çevrimiçi yemek platformları, yazarkasa ve terazi modülleri ile doğrudan entegre çalışır.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "WOLVOX ERP, Genel Muhasebe ve Otel programları ile tam entegrasyon",
          "Market, mağaza veya kuruyemiş gibi alanlarda hızlı satış terminali olarak kullanılabilme",
          "Caller ID desteği ile telefon siparişlerinde müşteri tanımlama",
          "Kredili fiş/bilet ve barkod destekli harcama takibi",
          "Masa krokisi ile esnek masa yönetimi",
          "Rezzta, MyRezzta, Yemeksepeti, Getir Yemek, Trendyol Yemek entegrasyonu",
          "Gel-al siparişler için web tabanlı sıramatik sistemi",
          "MyFranchise entegrasyonu ile franchise yönetimi",
          "QR menü entegrasyonu",
          "Kurye çıkış/dönüş takibi için kurye paneli",
          "e-Adisyon entegrasyonu",
        ],
      },
    ],
    en: {
      title: "WOLVOX Restaurant",
      description:
        "Manage receipt, kitchen and service processes from a single panel in restaurants, cafes, bars, hotels, spas and billiard halls.",
      sections: [
        {
          heading: "Usage Areas",
          text: "It appeals to businesses that want to track receipts in restaurants, cafes, bars, hotels, spas and billiard halls.",
        },
        {
          heading: "Included Modules",
          text: "It works directly integrated with WOLVOX ERP, WOLVOX Hotel, e-Receipt, online food platforms, cash register and scale modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Full integration with WOLVOX ERP, General Accounting and Hotel programs",
            "Can be used as a fast sales terminal in areas such as markets, stores or nuts",
            "Customer identification in phone orders with Caller ID support",
            "Credit receipt/ticket and barcode supported expense tracking",
            "Flexible table management with table layout",
            "Rezzta, MyRezzta, Yemeksepeti, Getir Yemek, Trendyol Yemek integration",
            "Web-based queue system for take-out orders",
            "Franchise management with MyFranchise integration",
            "QR menu integration",
            "Courier panel for courier exit/return tracking",
            "e-Receipt integration",
          ],
        },
      ],
    },
  },
  "wolvox-hizli-satis": {
    slug: "wolvox-hizli-satis",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Hızlı Satış",
    description:
      "Market ve satış noktalarında hızlı, hatasız ve entegre satış deneyimi sunan POS çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Marketler, perakende satış noktaları ve hızlı POS ihtiyacı olan tüm işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX ERP ile tam entegre çalışan hızlı satış, yazarkasa ve terazi modüllerini içerir.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Barkodlu satış için optimize edilmiş hızlı arayüz",
          "Tema seçenekleri ve kişiselleştirilebilir görünüm",
          "Yeni nesil ödeme kaydedici cihaz ve akıllı terazi entegrasyonu",
          "İade ve değişim süreci yönetimi",
          "Bekleyen işlemleri tüm kasiyerlerle paylaşabilme",
          "e-Fatura ve e-Arşiv otomatik gönderimi",
          "Müşteriye özel fiyat ve limit kontrolü",
          "Web tabanlı müşteri ekranı desteği",
          "Caller ID entegrasyonu",
          "Kasiyer vardiya takibi",
        ],
      },
    ],
    en: {
      title: "WOLVOX Quick Sales",
      description:
        "POS solution offering fast, error-free and integrated sales experience in markets and sales points.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Markets, retail sales points and all businesses requiring fast POS.",
        },
        {
          heading: "Included Modules",
          text: "It includes fast sales, cash register and scale modules that work fully integrated with WOLVOX ERP.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Fast interface optimized for barcode sales",
            "Theme options and customizable appearance",
            "Next-generation payment recording device and smart scale integration",
            "Return and exchange process management",
            "Being able to share pending transactions with all cashiers",
            "Automatic e-Invoice and e-Archive sending",
            "Customer-specific price and limit control",
            "Web-based customer screen support",
            "Caller ID integration",
            "Cashier shift tracking",
          ],
        },
      ],
    },
  },
  "wolvox-crm": {
    slug: "wolvox-crm",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX CRM",
    description:
      "Satış, pazarlama ve destek ekiplerinin müşteri ilişkilerini yönetmesi için tasarlanan CRM çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Müşteri ilişkileri yönetimine önem veren tüm işletmeler için uygundur.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX ERP ile tam entegre çalışan müşteri yönetimi, kampanya, aktivite, anket ve ajanda modüllerini içerir.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Listeler üzerinden toplu müşteri işlemleri",
          "Kampanya tanımları ve sonuç karşılaştırmaları",
          "Proje ve satış fırsatı takibi",
          "Caller ID desteğiyle hızlı aktivite kaydı",
          "Anket ve anket raporlama modülü",
          "Destek süreçleri için özelleştirilebilir tanımlar",
          "Organizer ile toplantı, randevu ve görev yönetimi",
          "Ajanda üzerinden yoğunluk ve müsaitlik takibi",
          "Hatırlatma sistemiyle aktivite uyarıları",
          "Teknik destek kayıtlarını merkezi olarak saklama",
        ],
      },
    ],
    en: {
      title: "WOLVOX CRM",
      description:
        "CRM solution designed for sales, marketing and support teams to manage customer relationships.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for all businesses that value customer relationship management.",
        },
        {
          heading: "Included Modules",
          text: "It includes customer management, campaign, activity, survey and agenda modules that work fully integrated with WOLVOX ERP.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Bulk customer operations through lists",
            "Campaign definitions and result comparisons",
            "Project and sales opportunity tracking",
            "Fast activity recording with Caller ID support",
            "Survey and survey reporting module",
            "Customizable definitions for support processes",
            "Meeting, appointment and task management with Organizer",
            "Intensity and availability tracking through agenda",
            "Activity alerts with reminder system",
            "Storing technical support records centrally",
          ],
        },
      ],
    },
  },
  "wolvox-servis": {
    slug: "wolvox-servis",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Servis",
    description:
      "Servis fişleri, bakım paketleri ve teknik ekip planlamalarını tek noktadan yönetin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Otomotiv, bilişim, beyaz eşya ve teknik servis hizmeti veren işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX ERP ile tam entegre servis fişi, bakım paketleri, araç ve personel planlama modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Hizmet kalemlerine sabit işlem ücretleri tanımlama",
          "Servis verilen marka ve ürünleri takip etme",
          "Durum değişikliklerinde otomatik e-posta/SMS gönderimi",
          "Servis paketleri ve gerekli parça tanımları",
          "Araç tanımı ve araç sorumlusu ataması",
          "Personel iş yükü ve planlama raporları",
          "Servis grupları oluşturup raporlamalarda kullanma",
          "Dış servis yönlendirmelerini kayıt altına alma",
          "Giriş/teslim tutanakları yazdırma",
          "Bakım sözleşmeleri ve hatırlatmalar",
        ],
      },
    ],
    en: {
      title: "WOLVOX Service",
      description:
        "Manage service tickets, maintenance packages and technical team planning from a single point.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Businesses providing automotive, IT, white goods and technical service services.",
        },
        {
          heading: "Included Modules",
          text: "Fully integrated service ticket, maintenance packages, vehicle and personnel planning modules with WOLVOX ERP.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Defining fixed processing fees for service items",
            "Tracking brands and products serviced",
            "Automatic e-mail/SMS sending on status changes",
            "Service packages and required part definitions",
            "Vehicle definition and vehicle manager assignment",
            "Personnel workload and planning reports",
            "Creating service groups and using them in reporting",
            "Recording external service referrals",
            "Printing entry/delivery receipts",
            "Maintenance contracts and reminders",
          ],
        },
      ],
    },
  },
  "wolvox-genel-muhasebe": {
    slug: "wolvox-genel-muhasebe",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Genel Muhasebe",
    description:
      "Genel muhasebe, yevmiye, mizan ve mali tabloları tek panelden yönetin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Bilanço esasına göre defter tutan işletmeler için. WOLVOX ERP, İnsan Kaynakları, Beyanname, Demirbaş ve e-Defter modülleri ile entegre çalışır.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Hesap planı, fiş işlemleri, tanımlamalar, dönem sonu işlemleri, defterler, mizan ve raporlar, mali tablolar, bütçe modüllerini kapsar.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Açılış, tahsil, tediye, mahsup ve kapanış fişlerini hızlıca oluşturma",
          "Gelir-gider bütçesi planlama",
          "Serbest meslek makbuzu düzenleme ve kesinti tanımları",
          "Kira takip ve muhtasar beyanname entegrasyonu",
          "Dövizli muhasebe desteği",
          "Ön muhasebe, demirbaş ve IK modüllerinden otomatik fiş oluşturma",
          "Mali tablolar üzerinden analiz yapabilme",
          "BA/BS tanımlamalarını seri şekilde kaydetme",
          "Yevmiye defteri, defteri kebir ve yardımcı defter süreçleri",
          "MS Excel'den hızlı veri transferi",
        ],
      },
    ],
    en: {
      title: "WOLVOX General Accounting",
      description:
        "Manage general accounting, journal entries, trial balance and financial statements from a single panel.",
      sections: [
        {
          heading: "Usage Areas",
          text: "For businesses keeping books on a balance sheet basis. It works integrated with WOLVOX ERP, Human Resources, Declaration, Fixed Assets and e-Ledger modules.",
        },
        {
          heading: "Included Modules",
          text: "It covers chart of accounts, voucher operations, definitions, period-end operations, books, trial balance and reports, financial statements, budget modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Quickly creating opening, collection, payment, transfer and closing vouchers",
            "Income-expense budget planning",
            "Freelance receipt arrangement and deduction definitions",
            "Rent tracking and withholding declaration integration",
            "Foreign currency accounting support",
            "Automatic voucher creation from pre-accounting, fixed assets and HR modules",
            "Being able to analyze through financial statements",
            "Recording BA/BS definitions in series",
            "Journal book, general ledger and subsidiary ledger processes",
            "Fast data transfer from MS Excel",
          ],
        },
      ],
    },
  },
  "wolvox-terazi-otomasyon": {
    slug: "wolvox-terazi-otomasyon",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Terazi Otomasyon",
    description:
      "Akıllı terazi, yazarkasa ve POS cihazlarını WOLVOX ile entegre yönetin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Market, bakkal, şarküteri gibi barkodlu satış yapan işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Yazarkasa, POS ve elektronik terazi entegrasyon modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "WOLVOX Restoran ve Hızlı Satış için terazi/yazarkasa köprü yazılımı",
          "Elektronik terazilerden gramaj bilgisini otomatik alma",
        ],
      },
    ],
    en: {
      title: "WOLVOX Scale Automation",
      description:
        "Operate smart scales, cash registers and POS devices in full integration with WOLVOX.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Markets, grocery stores and delicatessens that sell with barcodes.",
        },
        {
          heading: "Included Modules",
          text: "Cash register, POS and electronic scale integration modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Bridge software between electronic scales/cash registers and WOLVOX Restaurant or Fast Sales",
            "Automatically capturing weight information coming from electronic scales",
          ],
        },
      ],
    },
  },
  "wolvox-online-ik": {
    slug: "wolvox-online-ik",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Online IK",
    description:
      "WOLVOX İnsan Kaynakları'nı web tabanlı olarak kullanın, personel etkileşimini artırın.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "WOLVOX İnsan Kaynakları kullanan ve sistemi online erişilebilir kılmak isteyen işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Yönetici paneli, personel giriş-çıkış ekranı, istek/öneri formları, anket, sınav ve istatistik rapor modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Personel maaş ve kesinti dökümlerini portal üzerinden inceleme",
          "Firma içi anket ve sınav katılımı",
          "İstek ve öneriler için yöneticiye bildirim",
          "Duyuru ve belge paylaşımı",
          "WOLVOX İnsan Kaynakları ile tam entegrasyon",
        ],
      },
    ],
    en: {
      title: "WOLVOX Online HR",
      description:
        "Use WOLVOX Human Resources through the web and increase employee interaction.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Companies that already use WOLVOX Human Resources and want to make the system accessible online.",
        },
        {
          heading: "Included Modules",
          text: "Manager panel, employee clock-in/out screen, request & suggestion forms, survey, exam and statistic report modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Viewing payroll and deduction slips via the portal",
            "Taking part in in-house surveys and exams",
            "Instant notifications to managers for employee requests and suggestions",
            "Announcement and document sharing",
            "Full integration with WOLVOX Human Resources",
          ],
        },
      ],
    },
  },
  "wolvox-kapi-ekrani": {
    slug: "wolvox-kapi-ekrani",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Kapı Ekranı",
    description:
      "Personel giriş-çıkışlarını ekran, ses ve görüntü entegrasyonu ile kontrol altına alın.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Personel giriş-çıkış takibini güvence altına almak isteyen işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX İnsan Kaynakları ile entegre çalışan kapı ekranı yönetimi.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "WOLVOX İnsan Kaynakları ile çift yönlü entegrasyon",
          "Barkod okuyucu, parmak izi, yüz tanıma cihazları ile çalışma",
          "Giriş/çıkış anında personellere mesaj gösterme",
          "Web kamerası ile giriş yapan kişinin görüntüsünü kaydetme",
        ],
      },
    ],
    en: {
      title: "WOLVOX Door Screen",
      description:
        "Control staff entrances and exits with screen, audio and video integration.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Businesses that need to secure employee check-in/check-out tracking.",
        },
        {
          heading: "Included Modules",
          text: "Door screen management that works integrated with WOLVOX Human Resources.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Two-way integration with WOLVOX Human Resources",
            "Works with barcode readers, fingerprint or facial recognition devices",
            "Displaying custom messages to employees at entry and exit",
            "Recording the person entering via web camera",
          ],
        },
      ],
    },
  },
  "wolvox-ziyaretci-takip": {
    slug: "wolvox-ziyaretci-takip",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Ziyaretçi Takip",
    description:
      "Ziyaretçi kayıtlarını dijitalleştirip güvenli hale getiren yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "İşletmeye gelen ziyaretçileri kayıt altına almak isteyen kurumlar.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX İnsan Kaynakları ile entegre ziyaretçi kayıt ve raporlama modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Ziyaretçi giriş-çıkışlarını kayıt altına alma",
          "Ziyaretçi fotoğrafı ekleme",
          "Gelişmiş arama kriterleriyle raporlama",
          "Kimlik tarama cihazı entegrasyonu",
        ],
      },
    ],
    en: {
      title: "WOLVOX Visitor Tracking",
      description:
        "A management solution that digitalizes visitor registrations and keeps them secure.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Institutions that need to log visitors entering the premises.",
        },
        {
          heading: "Included Modules",
          text: "Visitor registration and reporting modules integrated with WOLVOX Human Resources.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Recording each visitor’s entry and exit",
            "Adding visitor photos to the record",
            "Reporting with advanced search criteria",
            "Identity card scanner integration",
          ],
        },
      ],
    },
  },
  "wolvox-mobil-satis-server": {
    slug: "wolvox-mobil-satis-server",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Mobil Satış (Server)",
    description:
      "Saha ekiplerinin PDA üzerinden topladığı sipariş ve faturaları merkez ile senkronize edin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Saha satış ekiplerinin offline/online veri aktarımına ihtiyaç duyan tüm işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX Mobil Satış ile entegre çalışan sipariş ve fatura aktarım modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Mobil satış programları ile merkez veritabanı arasında çift yönlü veri akışı",
        ],
      },
    ],
    en: {
      title: "WOLVOX Mobile Sales (Server)",
      description:
        "Synchronize orders and invoices collected by field teams on PDAs with the head office.",
      sections: [
        {
          heading: "Usage Areas",
          text: "All companies whose field sales teams need offline/online data transfer.",
        },
        {
          heading: "Included Modules",
          text: "Order and invoice transfer modules integrated with WOLVOX Mobile Sales.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Two-way data exchange between mobile sales applications and the central database",
          ],
        },
      ],
    },
  },
  "wolvox-demirbas": {
    slug: "wolvox-demirbas",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Demirbaş",
    description:
      "Demirbaş envanteri, amortisman ve zimmet süreçlerini dijitalleştiren çözüm.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Demirbaş yönetimi yapan muhasebeci, mali müşavir ve şirketler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "Demirbaş kayıt, amortisman raporları, genel muhasebe ve işletme defteri entegrasyonu.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Demirbaş kaydı, demirbaş alış fişi ve enflasyon düzenlemeleri",
          "Detaylı demirbaş raporları",
          "Amortisman kontrolü ve muhasebeleştirme",
          "Makro tanımları ve kullanıcı kısayolları",
          "MDI ile esnek çalışma ve çoklu dil desteği",
          "Not: Genel Muhasebe veya Defter Beyan lisansı gerektirir",
        ],
      },
    ],
    en: {
      title: "WOLVOX Fixed Assets",
      description:
        "A solution that digitalizes fixed asset inventory, depreciation and assignment workflows.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Accountants, CPAs and companies that manage fixed assets.",
        },
        {
          heading: "Included Modules",
          text: "Fixed asset registry, depreciation reports, integration with general ledger and bookkeeping modules.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Recording assets, purchase vouchers and inflation adjustments",
            "Detailed fixed asset reports",
            "Depreciation control and posting",
            "Macro definitions and user shortcuts",
            "Flexible MDI interface with multi-language support",
            "Note: Requires General Accounting or Defter Beyan license",
          ],
        },
      ],
    },
  },
  "wolvox-veri-transfer": {
    slug: "wolvox-veri-transfer",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Veri Transfer",
    description:
      "Üçüncü parti yazılımlarla çift yönlü veri entegrasyonu sağlayan ara katman çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Kullandığı 3. parti yazılımlardan veri almak veya onlara veri göndermek isteyen işletmeler.",
      },
      {
        heading: "İçerdiği Modüller",
        text: "UTS, Yemek Sepeti, Getir Yemek, Trendyol Yemek, Panorama, Hotel Runner, sanal santral, GetirÇarşı, GoBD / GDPdU (Almanya) entegrasyon modülleri.",
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "3. parti yazılımlardan Wolvox ERP'ye veri alıp gönderme",
          "Alınan verileri Wolvox ERP ile tam entegre işleme",
          "İhtiyaç halinde AR-GE desteği ile yeni entegrasyon geliştirme",
        ],
      },
    ],
    en: {
      title: "WOLVOX Data Transfer",
      description:
        "Middleware that enables two-way data integration with third-party applications.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Businesses that need to pull data from or push data to third-party software.",
        },
        {
          heading: "Included Modules",
          text: "Integrations for UTS, Yemek Sepeti, Getir Yemek, Trendyol Yemek, Panorama, Hotel Runner, virtual PBX, GetirÇarşı, GoBD / GDPdU (Germany) and more.",
        },
        {
          heading: "Key Features",
          bullets: [
            "Sending and receiving data between third-party systems and WOLVOX ERP",
            "Processing imported data fully integrated with WOLVOX ERP",
            "Developing new integrations with R&D support when needed",
          ],
        },
      ],
    },
  },
  "yazarkasa-otomasyonu": {
    slug: "yazarkasa-otomasyonu",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Yazarkasa Otomasyonu",
    description:
      "Yazarkasa, POS ve elektronik terazi cihazlarıyla entegre çalışarak satış işlemlerini kolaylaştıran çözüm.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Marketler, restoranlar, bakkallar ve hızlı satış noktalarında yazarkasa ve POS cihazlarıyla entegre çalışmak isteyen işletmeler için tasarlanmıştır.",
        bullets: [
          "Marketler ve süpermarketler",
          "Restoranlar ve kafeler",
          "Bakkallar ve küçük perakende mağazaları",
          "Hızlı satış noktaları",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "WOLVOX Restoran ve Hızlı Satış programlarıyla yazarkasa ve terazi cihazları arasında ara yazılım olarak çalışır.",
        bullets: [
          "Yazarkasa - POS entegrasyon modülleri",
          "Elektronik terazi entegrasyon modülleri",
          "YNÖKC (Yeni Nesil Ödeme Kaydedici Cihaz) entegrasyonu",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "IBM Genius POS, Sharp ER-A495T, Hugin 425 TX, Olivetti OL7000 gibi çoklu yazarkasa desteği",
          "CAS, Densi, Baster gibi elektronik terazi entegrasyonları",
          "YNÖKC entegrasyonu ile satışların otomatik kaydı",
          "Tartı cihazlarıyla bağlantılı çalışarak gramaj bilgisi aktarımı",
          "Azerbaycan resmi onaylı OKC ile entegrasyon desteği",
        ],
      },
    ],
    en: {
      title: "WOLVOX Cash Register Automation",
      description:
        "A solution that works integrated with cash registers, POS devices and electronic scales to streamline sales operations.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for markets, restaurants, groceries and fast sales points that need seamless POS and cash register integration.",
          bullets: [
            "Supermarkets and grocery chains",
            "Restaurants and cafés",
            "Corner shops and small retailers",
            "Fast sales kiosks",
          ],
        },
        {
          heading: "Included Modules",
          text: "Acts as middleware between WOLVOX Restaurant/Fast Sales and cash register or scale devices.",
          bullets: [
            "Cash register / POS integration modules",
            "Electronic scale integration modules",
            "New Generation Payment Recorder (YNÖKC) integration",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Support for multiple cash register brands such as IBM Genius POS, Sharp ER-A495T, Hugin 425 TX, Olivetti OL7000",
            "Integration with scale brands like CAS, Densi and Baster",
            "Automatic recording of sales through YNÖKC integration",
            "Transferring weight information directly from connected scales",
            "Integration support for officially approved OKC devices in Azerbaijan",
          ],
        },
      ],
    },
  },
  "wolvox-otel": {
    slug: "wolvox-otel",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Otel",
    description:
      "Ön bürodan housekeeping'e kadar uçtan uca otel yönetim çözümü ile konaklama işletmelerinizi dijitalleştirin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Otel, motel, pansiyon, apart otel ve benzeri konaklama işletmeleri için tasarlanmıştır.",
        bullets: [
          "Otel ve otel zincirleri",
          "Motel ve pansiyonlar",
          "Apart oteller",
          "Butik oteller",
          "Resort ve tatil köyleri",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Rezervasyon yönetiminden faturalandırmaya, housekeeping'den raporlamaya kadar otel işletmeciliğinin tüm süreçlerini kapsar.",
        bullets: [
          "Rezervasyon ve ön büro yönetimi",
          "Oda yönetimi ve housekeeping",
          "Fiyat yönetimi ve paket tanımları",
          "Faturalandırma ve ödeme takibi",
          "Misafir ilişkileri yönetimi",
          "Raporlama ve analiz modülleri",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Hızlı ve kolay rezervasyon, check-In işlemi ve grup girişlerinizi tek tuş ile yapabilir",
          "AKBS ve Jandarma Bilgi Yönetim sistemine otelde konaklayan bilgilerini otomatik gönderebilir",
          "Tüm müşterilere toplu e-mail veya sms gönderebilir",
          "Acenta, grup ya da şirketlere özel kontrat girişleri yapabilir",
          "Acenta rezervasyonlarını raporlayabilir",
          "House keeping (Kat Hizmetleri H/KPG) raporları alınabilir",
          "Otelde wireless kullanan tüm misafirlerin internet kullanım ücretlerini foliolarına yansıtabilir",
          "Kayıtlı tüm rezervasyonlar için detaylı raporlar alabilir",
          "Giriş ve geceleme, XML ve BTM, otel durum raporları, günübirlik konaklama ve locater raporları, tarih ve tarife bazında raporlar, gelir departman ve genel durum raporları, otel Forecast raporları, pazar bazlı forecast raporları, satış forecast raporları, ülke bazlı forecast raporları, oda tipi forecast raporları, city Ledger raporları, günsonu raporları alınabilir",
          "Otelinizde düzenlenecek tüm organizasyonları liste veya çizelge üzerinden takip edebilirsiniz",
          "Konaklayan kişilere fatura düzenleyebilir ve e-Fatura/e-Arşiv olarak gönderim sağlayabilirsiniz",
        ],
      },
    ],
    en: {
      title: "WOLVOX Hotel",
      description:
        "Digitalize your accommodation business with an end-to-end hotel management solution covering everything from front office to housekeeping.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for hotels, motels, guesthouses, apart hotels and similar accommodation facilities.",
          bullets: [
            "Hotel chains and independent hotels",
            "Motels and guesthouses",
            "Apart hotels and boutique hotels",
            "Resorts and holiday villages",
          ],
        },
        {
          heading: "Included Modules",
          text: "Covers all hospitality operations from reservations to invoicing, housekeeping to reporting.",
          bullets: [
            "Reservation and front office management",
            "Room management and housekeeping",
            "Price management and package definitions",
            "Billing and payment tracking",
            "Guest relationship management",
            "Reporting and analytics modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "One-click reservations, check-in processes and group arrivals",
            "Automatic transfer of guest information to AKBS and Gendarmerie Information systems",
            "Bulk e-mail or SMS sending to all guests",
            "Contract management for agencies, groups or companies",
            "Detailed reporting of agency reservations",
            "Housekeeping (H/KPG) reports",
            "Posting Wi-Fi usage fees directly to guest folios",
            "Detailed reporting for all recorded reservations",
            "Comprehensive set of operational, forecast and financial reports",
            "Organizing and monitoring all in-hotel events via list or calendar views",
            "Issuing invoices to guests and sending them as e-Invoice/e-Archive",
          ],
        },
      ],
    },
  },
  "e-defter": {
    slug: "e-defter",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX e-Defter",
    description:
      "e-Defter süreçlerinizi güvenle yürüten, GIB ile entegre çalışan elektronik defter çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "e-Defter tutma zorunluluğu olan veya elektronik defter kullanmak isteyen tüm işletmeler için uygundur.",
        bullets: [
          "e-Defter tutma zorunluluğu olan işletmeler",
          "Elektronik defter kullanmak isteyen firmalar",
          "GIB entegrasyonu gerektiren muhasebe süreçleri",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "GIB e-Defter formatına uygun veri üretimi ve gönderimi sağlar.",
        bullets: [
          "e-Defter veri üretim modülü",
          "GIB entegrasyon modülü",
          "Otomatik gönderim ve onay takibi",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "GIB e-Defter formatına uygun veri üretimi",
          "Otomatik GIB'ye gönderim",
          "Gönderim onay takibi",
          "Hata kontrolü ve düzeltme imkanı",
          "Genel Muhasebe veya Defter Beyan lisansı gerektirir",
        ],
      },
    ],
    en: {
      title: "WOLVOX e-Ledger",
      description:
        "An electronic ledger solution that runs your e-ledger processes securely and is fully integrated with the Turkish Revenue Administration (GIB).",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for all companies that are obligated to keep e-ledgers or want to manage their ledgers electronically.",
          bullets: [
            "Businesses with e-ledger obligations",
            "Companies that prefer electronic ledger processes",
            "Accounting workflows requiring GIB integration",
          ],
        },
        {
          heading: "Included Modules",
          text: "Generates and submits data in accordance with the official GIB e-ledger format.",
          bullets: [
            "e-Ledger data generation module",
            "GIB integration module",
            "Automatic submission and approval tracking",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Producing data compliant with the GIB e-ledger format",
            "Automatic submission to GIB",
            "Tracking submission approvals",
            "Error checking and correction",
            "Requires General Accounting or Defter Beyan license",
          ],
        },
      ],
    },
  },
  "fiyatmatik": {
    slug: "fiyatmatik",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX FiyatMatik",
    description:
      "Fiyat etiketlerinizi dijital olarak güncelleyen, elektronik etiket yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Perakende mağazalar, marketler ve süpermarketlerde fiyat etiketlerini dijital olarak yönetmek isteyen işletmeler için tasarlanmıştır.",
        bullets: [
          "Perakende mağazalar",
          "Marketler ve süpermarketler",
          "Büyük mağaza zincirleri",
          "Fiyat güncellemeleri sık yapılan işletmeler",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Elektronik fiyat etiketi cihazlarıyla entegre çalışarak fiyat güncellemelerini otomatikleştirir.",
        bullets: [
          "Elektronik etiket yönetim modülü",
          "Fiyat senkronizasyon modülü",
          "Etiket yazdırma ve güncelleme araçları",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Elektronik fiyat etiketi cihazlarıyla entegrasyon",
          "Toplu fiyat güncelleme",
          "Stok ve fiyat senkronizasyonu",
          "Merkezi fiyat yönetimi",
          "Etiket yazdırma ve güncelleme",
        ],
      },
    ],
    en: {
      title: "WOLVOX FiyatMatik",
      description:
        "An electronic shelf label management solution that updates price tags digitally.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for retail stores, markets and supermarkets that want to manage price labels digitally.",
          bullets: [
            "Retail stores",
            "Markets and supermarkets",
            "Large store chains",
            "Businesses with frequent price changes",
          ],
        },
        {
          heading: "Included Modules",
          text: "Works integrated with electronic shelf label devices to automate price updates.",
          bullets: [
            "Electronic label management module",
            "Price synchronization module",
            "Label printing and update tools",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Integration with electronic shelf label devices",
            "Bulk price update",
            "Stock and price synchronization",
            "Centralized price management",
            "Label printing and refresh",
          ],
        },
      ],
    },
  },
  "akaryakit-veri-aktarimi": {
    slug: "akaryakit-veri-aktarimi",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Akaryakıt Veri Aktarımı",
    description:
      "Akaryakıt pompa verilerini otomatik olarak Wolvox ERP'ye aktaran entegrasyon çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Akaryakıt istasyonları ve pompa verilerini ERP sistemine entegre etmek isteyen işletmeler için tasarlanmıştır.",
        bullets: [
          "Akaryakıt istasyonları",
          "Pompa verilerini ERP'ye aktarmak isteyen işletmeler",
          "Otomatik veri aktarımı gerektiren operasyonlar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Pompa sistemleriyle entegre çalışarak satış verilerini otomatik olarak Wolvox ERP'ye aktarır.",
        bullets: [
          "Pompa entegrasyon modülü",
          "Veri aktarım ve senkronizasyon modülü",
          "Satış verisi işleme modülü",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Pompa sistemleriyle otomatik entegrasyon",
          "Gerçek zamanlı veri aktarımı",
          "Satış verilerinin otomatik kaydı",
          "Stok ve cari hesap senkronizasyonu",
          "Raporlama ve analiz desteği",
        ],
      },
    ],
    en: {
      title: "WOLVOX Fuel Data Transfer",
      description:
        "An integration solution that automatically transfers fuel pump data into WOLVOX ERP.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Developed for fuel stations and businesses that want to integrate pump data with their ERP systems.",
          bullets: [
            "Fuel stations",
            "Companies needing pump-to-ERP data transfer",
            "Operations that require automatic data flow",
          ],
        },
        {
          heading: "Included Modules",
          text: "Works in sync with pump systems to transfer sales data into WOLVOX ERP automatically.",
          bullets: [
            "Pump integration module",
            "Data transfer and synchronization module",
            "Sales data processing module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic integration with pump systems",
            "Real-time data transfer",
            "Automatic recording of sales data",
            "Stock and account synchronization",
            "Reporting and analysis support",
          ],
        },
      ],
    },
  },
  "webconnect": {
    slug: "webconnect",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX WebConnect",
    description:
      "Wolvox modüllerine web üzerinden erişim sağlayan, bulut tabanlı erişim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Wolvox ERP modüllerine uzaktan erişim ihtiyacı olan işletmeler için tasarlanmıştır.",
        bullets: [
          "Uzaktan çalışma gerektiren işletmeler",
          "Çok şubeli yapılar",
          "Mobil erişim ihtiyacı olan kullanıcılar",
          "Bulut tabanlı çalışma modeli tercih eden firmalar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Wolvox ERP modüllerine web üzerinden güvenli erişim sağlar.",
        bullets: [
          "Web erişim modülü",
          "Güvenlik ve yetkilendirme modülü",
          "Senkronizasyon modülü",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Web tabanlı erişim",
          "Güvenli bağlantı ve yetkilendirme",
          "Çoklu kullanıcı desteği",
          "Mobil uyumlu arayüz",
          "Gerçek zamanlı veri senkronizasyonu",
        ],
      },
    ],
    en: {
      title: "WOLVOX WebConnect",
      description:
        "A cloud-based access solution that lets you reach WOLVOX modules through the web.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for businesses that need remote access to WOLVOX ERP modules.",
          bullets: [
            "Organizations that support remote work",
            "Companies with multiple branches",
            "Users who require mobile access",
            "Firms that prefer a cloud-based operating model",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides secure web access to WOLVOX ERP modules.",
          bullets: [
            "Web access module",
            "Security and authorization module",
            "Synchronization module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Web-based access",
            "Secure connection and authorization",
            "Multi-user support",
            "Mobile-friendly interface",
            "Real-time data synchronization",
          ],
        },
      ],
    },
  },
  "web-entegrasyon": {
    slug: "web-entegrasyon",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Web Entegrasyon",
    description:
      "E-ticaret platformlarından gelen siparişleri otomatik olarak Wolvox ERP'ye senkronlayan entegrasyon çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "E-ticaret sitelerinden sipariş alan ve bu siparişleri ERP sistemine entegre etmek isteyen işletmeler için tasarlanmıştır.",
        bullets: [
          "E-ticaret işletmeleri",
          "Online satış yapan firmalar",
          "Çoklu kanal satış yapan işletmeler",
          "Sipariş entegrasyonu gerektiren operasyonlar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "E-ticaret platformlarıyla entegre çalışarak sipariş verilerini otomatik olarak Wolvox ERP'ye aktarır.",
        bullets: [
          "E-ticaret entegrasyon modülü",
          "Sipariş senkronizasyon modülü",
          "Stok ve fiyat senkronizasyon modülü",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "E-ticaret platformlarıyla otomatik entegrasyon",
          "Siparişlerin otomatik aktarımı",
          "Stok ve fiyat senkronizasyonu",
          "Çoklu e-ticaret platformu desteği",
          "Gerçek zamanlı veri güncelleme",
        ],
      },
    ],
    en: {
      title: "WOLVOX Web Integration",
      description:
        "An integration solution that automatically synchronizes orders coming from e-commerce platforms with WOLVOX ERP.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Built for businesses that receive orders from e-commerce sites and need them integrated into their ERP systems.",
          bullets: [
            "E-commerce companies",
            "Firms selling online",
            "Businesses with multi-channel sales",
            "Operations requiring order integration",
          ],
        },
        {
          heading: "Included Modules",
          text: "Works with e-commerce platforms and automatically transfers order data to WOLVOX ERP.",
          bullets: [
            "E-commerce integration module",
            "Order synchronization module",
            "Stock and price synchronization module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic integration with e-commerce platforms",
            "Automatic transfer of orders",
            "Stock and price synchronization",
            "Support for multiple e-commerce platforms",
            "Real-time data updates",
          ],
        },
      ],
    },
  },
  "online-is-merkezi": {
    slug: "online-is-merkezi",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Online İş Merkezi",
    description:
      "MRP II süreçlerinizi buluta taşıyan, sahadan iş emri durumlarını gerçek zamanlı takip eden çözüm.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Üretim yapan işletmelerde sahadan iş emri durumlarını takip etmek ve MRP II süreçlerini bulut üzerinden yönetmek isteyen firmalar için tasarlanmıştır.",
        bullets: [
          "Üretim yapan işletmeler",
          "Saha operasyonları olan firmalar",
          "İş emri takibi gerektiren operasyonlar",
          "MRP II kullanan üretim tesisleri",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "MRP II modülüyle entegre çalışarak iş emri durumlarını bulut üzerinden yönetir.",
        bullets: [
          "Online iş merkezi modülü",
          "İş emri takip modülü",
          "Saha entegrasyon modülü",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "Sahadan iş emri durumlarını gerçek zamanlı takip",
          "Bulut tabanlı erişim",
          "MRP II ile tam entegrasyon",
          "Mobil uyumlu arayüz",
          "Anlık raporlama ve analiz",
        ],
      },
    ],
    en: {
      title: "WOLVOX Online Work Center",
      description:
        "A solution that moves your MRP II processes to the cloud and tracks shop-floor work orders in real time.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for manufacturers that need to monitor shop-floor work orders and manage MRP II processes in the cloud.",
          bullets: [
            "Manufacturing companies",
            "Businesses with field operations",
            "Operations that require work order tracking",
            "Production plants using MRP II",
          ],
        },
        {
          heading: "Included Modules",
          text: "Works with the MRP II module to manage work order statuses via the cloud.",
          bullets: [
            "Online work center module",
            "Work order tracking module",
            "Field integration module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Real-time monitoring of work orders from the field",
            "Cloud-based access",
            "Full integration with MRP II",
            "Mobile-friendly interface",
            "Instant reporting and analytics",
          ],
        },
      ],
    },
  },
  "beyanname": {
    slug: "beyanname",
    category: "Ticari",
    subCategory: "Ticari/Wolvox",
    group: "Wolvox",
    title: "WOLVOX Beyanname",
    description:
      "Beyanname hazırlama süreçlerini kısaltan, GIB ile entegre çalışan beyanname yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Beyanname hazırlama ve GIB'ye gönderim işlemlerini dijitalleştirmek isteyen tüm işletmeler için uygundur.",
        bullets: [
          "Beyanname hazırlama gerektiren işletmeler",
          "GIB entegrasyonu gerektiren muhasebe süreçleri",
          "Otomatik beyanname gönderimi isteyen firmalar",
        ],
      },
      {
        heading: "İçerdiği Modüller",
        text: "GIB beyanname formatına uygun veri üretimi ve gönderimi sağlar.",
        bullets: [
          "Beyanname hazırlama modülü",
          "GIB entegrasyon modülü",
          "Otomatik gönderim ve onay takibi",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: [
          "GIB beyanname formatına uygun veri üretimi",
          "Otomatik GIB'ye gönderim",
          "Gönderim onay takibi",
          "Hata kontrolü ve düzeltme imkanı",
          "Genel Muhasebe veya Defter Beyan lisansı gerektirir",
        ],
      },
    ],
    en: {
      title: "WOLVOX Declaration",
      description:
        "A declaration management solution that shortens preparation processes and integrates with the Turkish Revenue Administration (GIB).",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for all companies that need to prepare declarations and submit them to GIB digitally.",
          bullets: [
            "Businesses that must prepare declarations",
            "Accounting processes requiring GIB integration",
            "Firms that want automatic declaration submission",
          ],
        },
        {
          heading: "Included Modules",
          text: "Generates and submits data compliant with the official GIB declaration format.",
          bullets: [
            "Declaration preparation module",
            "GIB integration module",
            "Automatic submission and approval tracking",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Producing data compliant with the GIB declaration format",
            "Automatic submission to GIB",
            "Submission approval tracking",
            "Error checking and correction",
            "Requires General Accounting or Defter Beyan license",
          ],
        },
      ],
    },
  },
  "rezzta": {
    slug: "rezzta",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "Rezzta",
    description: "Franchise restoranlar için dijital sipariş ve rezervasyon yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Franchise restoran zincirleri ve çoklu şube yapısına sahip restoran işletmeleri için tasarlanmıştır.",
        bullets: ["Franchise restoran zincirleri", "Çoklu şube yapısına sahip restoranlar", "Merkezi sipariş yönetimi gerektiren işletmeler", "Dijital sipariş ve rezervasyon sistemi isteyen firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Sipariş yönetimi, rezervasyon takibi ve merkezi raporlama modüllerini içerir.",
        bullets: ["Dijital sipariş yönetim modülü", "Rezervasyon takip modülü", "Merkezi raporlama modülü", "Çoklu şube yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Franchise yapılar için merkezi yönetim", "Dijital sipariş ve rezervasyon sistemi", "Çoklu şube takibi", "Merkezi raporlama ve analiz", "Mobil uyumlu arayüz"],
      },
    ],
    en: {
      title: "Rezzta",
      description: "A digital order and reservation management solution for franchise restaurants.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Built for franchise restaurant chains and multi-branch food businesses.",
          bullets: [
            "Franchise restaurant chains",
            "Restaurants with multiple branches",
            "Operations requiring centralized order management",
            "Companies that want digital ordering and reservation",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides order management, reservation tracking and centralized reporting modules.",
          bullets: [
            "Digital order management module",
            "Reservation tracking module",
            "Centralized reporting module",
            "Multi-branch management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Central management for franchise structures",
            "Digital ordering and reservation system",
            "Multi-branch monitoring",
            "Centralized reporting and analytics",
            "Mobile-friendly interface",
          ],
        },
      ],
    },
  },
  "myrezzta": {
    slug: "myrezzta",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "MyRezzta",
    description: "Restoranlara özel domain üzerinden sipariş alın, müşteri deneyimini dijitalleştirin.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Kendi domain'i üzerinden sipariş almak isteyen restoranlar ve kafe işletmeleri için tasarlanmıştır.",
        bullets: ["Restoranlar ve kafeler", "Özel domain ile sipariş almak isteyen işletmeler", "Marka kimliğini koruyarak dijital sipariş almak isteyen firmalar", "Müşteri deneyimini özelleştirmek isteyen işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Özel domain üzerinden çalışan dijital menü, sipariş ve ödeme modüllerini içerir.",
        bullets: ["Özel domain entegrasyon modülü", "Dijital menü modülü", "Online sipariş modülü", "Ödeme entegrasyon modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Özel domain üzerinden sipariş alma", "Marka kimliğine uygun tasarım", "Dijital menü yönetimi", "Online ödeme entegrasyonları", "Müşteri tercih ve geçmiş takibi"],
      },
    ],
    en: {
      title: "MyRezzta",
      description: "Take orders through your own domain and digitalize the guest experience.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for restaurants and cafés that want to accept orders via their own domain.",
          bullets: [
            "Restaurants and cafés",
            "Businesses wanting to receive orders via a custom domain",
            "Companies that want to keep their brand identity while accepting digital orders",
            "Operations aiming to personalize the customer experience",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains digital menu, ordering and payment modules working on a dedicated domain.",
          bullets: [
            "Custom domain integration module",
            "Digital menu module",
            "Online ordering module",
            "Payment integration module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Receiving orders through your own domain",
            "Brand-compliant design",
            "Digital menu management",
            "Online payment integrations",
            "Tracking customer preferences and history",
          ],
        },
      ],
    },
  },
  "e-ticaret": {
    slug: "e-ticaret",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "E-Ticaret",
    description: "Online satış yönetiminizi kolaylaştıran, e-ticaret platformlarıyla entegre çalışan çözüm.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Online satış yapan tüm işletmeler için tasarlanmıştır. E-ticaret sitelerinden sipariş alan ve bu siparişleri yönetmek isteyen firmalar için uygundur.",
        bullets: ["E-ticaret işletmeleri", "Online satış yapan firmalar", "Çoklu kanal satış yapan işletmeler", "Sipariş ve stok yönetimi gerektiren operasyonlar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "E-ticaret platformlarıyla entegre çalışarak sipariş, stok ve müşteri yönetimi sağlar.",
        bullets: ["Sipariş yönetim modülü", "Stok senkronizasyon modülü", "Müşteri yönetim modülü", "Ödeme entegrasyon modülleri", "Kargo entegrasyon modülleri"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["E-ticaret platformlarıyla otomatik entegrasyon", "Siparişlerin otomatik aktarımı ve işlenmesi", "Stok ve fiyat senkronizasyonu", "Çoklu e-ticaret platformu desteği", "Gerçek zamanlı veri güncelleme", "Müşteri ve sipariş takibi"],
      },
    ],
    en: {
      title: "E-Commerce",
      description: "A solution that simplifies online sales management and integrates with e-commerce platforms.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Developed for all businesses selling online and managing orders from e-commerce sites.",
          bullets: [
            "E-commerce businesses",
            "Companies selling online",
            "Businesses with multi-channel sales",
            "Operations requiring order and stock management",
          ],
        },
        {
          heading: "Included Modules",
          text: "Integrates with e-commerce platforms to manage orders, stock and customers.",
          bullets: [
            "Order management module",
            "Stock synchronization module",
            "Customer management module",
            "Payment integration modules",
            "Cargo integration modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic integration with e-commerce platforms",
            "Automatic transfer and processing of orders",
            "Stock and price synchronization",
            "Support for multiple e-commerce platforms",
            "Real-time data updates",
            "Customer and order tracking",
          ],
        },
      ],
    },
  },
  "myfranchise": {
    slug: "myfranchise",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "MyFranchise",
    description: "Franchise satış raporlarını merkezden yöneten, çoklu şube takibi sağlayan çözüm.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Franchise yapıya sahip işletmeler ve çoklu şube yönetimi gerektiren firmalar için tasarlanmıştır.",
        bullets: ["Franchise işletmeler", "Çoklu şube yapısına sahip firmalar", "Merkezi raporlama gerektiren işletmeler", "Satış performans takibi yapan şirketler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Franchise ve şube yönetimi için merkezi raporlama ve analiz modüllerini içerir.",
        bullets: ["Merkezi raporlama modülü", "Şube performans takip modülü", "Satış analiz modülü", "Finansal raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Merkezi satış raporlama", "Şube bazlı performans analizi", "Gerçek zamanlı veri toplama", "Detaylı finansal raporlar", "Karşılaştırmalı analiz araçları"],
      },
    ],
    en: {
      title: "MyFranchise",
      description: "A solution that centrally manages franchise sales reports and multi-branch tracking.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Created for businesses operating with franchise structures or multiple branches.",
          bullets: [
            "Franchise businesses",
            "Companies with multiple branches",
            "Organizations that need centralized reporting",
            "Firms tracking sales performance",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains centralized reporting and analysis modules for franchise and branch management.",
          bullets: [
            "Central reporting module",
            "Branch performance tracking module",
            "Sales analysis module",
            "Financial reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Centralized sales reporting",
            "Branch-based performance analysis",
            "Real-time data collection",
            "Detailed financial reports",
            "Comparative analysis tools",
          ],
        },
      ],
    },
  },
  "limondesk": {
    slug: "limondesk",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "LimonDesk",
    description: "Destek ticket süreçlerinizi akıllandıran, müşteri destek yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Müşteri destek süreçlerini dijitalleştirmek isteyen tüm işletmeler için uygundur.",
        bullets: ["Müşteri destek merkezleri", "Teknik destek ekipleri", "Çağrı merkezleri", "IT destek birimleri"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Ticket yönetimi, müşteri takibi ve destek süreçleri için modüller içerir.",
        bullets: ["Ticket yönetim modülü", "Müşteri takip modülü", "SLA yönetim modülü", "Raporlama ve analiz modülleri"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Otomatik ticket oluşturma ve yönlendirme", "SLA takibi ve uyarı sistemi", "Müşteri geçmişi ve etkileşim takibi", "Detaylı raporlama ve analiz", "Ekip performans takibi"],
      },
    ],
    en: {
      title: "LimonDesk",
      description: "A customer support management solution that streamlines support ticket processes.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for any business that wants to digitalize its customer support operations.",
          bullets: [
            "Customer support centers",
            "Technical support teams",
            "Call centers",
            "IT help desks",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides modules for ticket management, customer tracking and support workflows.",
          bullets: [
            "Ticket management module",
            "Customer tracking module",
            "SLA management module",
            "Reporting and analytics modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic ticket creation and routing",
            "SLA tracking and alerting",
            "Customer history and interaction tracking",
            "Detailed reporting and analytics",
            "Team performance tracking",
          ],
        },
      ],
    },
  },
  "qr-menu": {
    slug: "qr-menu",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "QR Menü",
    description: "QR kodlu dijital menü deneyimini sunan, temassız menü çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Restoran, kafe, bar ve benzeri işletmelerde dijital menü kullanmak isteyen firmalar için tasarlanmıştır.",
        bullets: ["Restoranlar ve kafeler", "Barlar ve eğlence mekanları", "Temassız hizmet sunmak isteyen işletmeler", "Dijital menü deneyimi arayan firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "QR kod yönetimi, dijital menü ve sipariş modüllerini içerir.",
        bullets: ["QR kod oluşturma modülü", "Dijital menü yönetim modülü", "Sipariş entegrasyon modülü", "Müşteri etkileşim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["QR kod ile hızlı menü erişimi", "Görsel ve interaktif menü tasarımı", "Sipariş entegrasyonu", "Çoklu dil desteği", "Mobil uyumlu arayüz"],
      },
    ],
    en: {
      title: "QR Menu",
      description: "A touchless menu solution that delivers a QR code-powered digital menu experience.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for restaurants, cafés, bars and similar venues that want to offer digital menus.",
          bullets: [
            "Restaurants and cafés",
            "Bars and entertainment venues",
            "Businesses wanting to offer contactless service",
            "Companies looking for a digital menu experience",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains QR code management, digital menu and ordering modules.",
          bullets: [
            "QR code creation module",
            "Digital menu management module",
            "Order integration module",
            "Customer engagement module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Fast menu access via QR codes",
            "Visual and interactive menu design",
            "Order integration",
            "Multi-language support",
            "Mobile-friendly interface",
          ],
        },
      ],
    },
  },
  "taskpano": {
    slug: "taskpano",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "TaskPano",
    description: "Görev ve proje takibini tek panelde toplayan, ekip yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Proje ve görev yönetimi gerektiren tüm işletmeler için uygundur.",
        bullets: ["Proje yönetimi yapan ekipler", "Görev takibi gerektiren işletmeler", "Ekip yönetimi yapan firmalar", "İş akışı yönetimi gerektiren operasyonlar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Görev yönetimi, proje takibi ve ekip koordinasyonu için modüller içerir.",
        bullets: ["Görev yönetim modülü", "Proje takip modülü", "Ekip koordinasyon modülü", "Raporlama ve analiz modülleri"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Görev oluşturma ve atama", "Proje ilerleme takibi", "Ekip üyeleri arası iletişim", "Zaman takibi ve raporlama", "Dashboard ve analitik araçlar"],
      },
    ],
    en: {
      title: "TaskPano",
      description: "A team management solution that unifies task and project tracking on a single panel.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for every business that needs project and task management.",
          bullets: [
            "Project management teams",
            "Businesses that require task tracking",
            "Companies managing teams",
            "Operations that depend on workflow management",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes modules for task management, project tracking and team coordination.",
          bullets: [
            "Task management module",
            "Project tracking module",
            "Team coordination module",
            "Reporting and analytics modules",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Creating and assigning tasks",
            "Tracking project progress",
            "Communication between team members",
            "Time tracking and reporting",
            "Dashboards and analytics tools",
          ],
        },
      ],
    },
  },
  "prokuafor": {
    slug: "prokuafor",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "ProKuaför",
    description: "Kuaför rezervasyon ve müşteri takibini yöneten, güzellik salonu çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Kuaför, güzellik salonu ve benzeri işletmeler için tasarlanmıştır.",
        bullets: ["Kuaför salonları", "Güzellik salonları", "Rezervasyon yönetimi gerektiren işletmeler", "Müşteri takibi yapan firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Rezervasyon yönetimi, müşteri takibi ve randevu sistemi modüllerini içerir.",
        bullets: ["Rezervasyon yönetim modülü", "Müşteri takip modülü", "Randevu sistemi modülü", "Hizmet yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Online rezervasyon sistemi", "Müşteri geçmişi ve tercih takibi", "Randevu yönetimi ve hatırlatma", "Hizmet ve fiyat yönetimi", "Gelir ve performans raporları"],
      },
    ],
    en: {
      title: "ProKuaför",
      description: "A beauty salon solution that manages hairdresser reservations and customer tracking.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for hair salons, beauty salons and similar businesses.",
          bullets: [
            "Hair salons",
            "Beauty salons",
            "Businesses that need reservation management",
            "Companies tracking customer relations",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides reservation management, customer tracking and appointment system modules.",
          bullets: [
            "Reservation management module",
            "Customer tracking module",
            "Appointment system module",
            "Service management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Online reservation system",
            "Tracking customer history and preferences",
            "Appointment management and reminders",
            "Service and price management",
            "Income and performance reports",
          ],
        },
      ],
    },
  },
  "e-mutabakat": {
    slug: "e-mutabakat",
    category: "Sektörel",
    subCategory: "Sektörel/Bulut",
    group: "Bulut",
    title: "E-Mutabakat",
    description: "Cari mutabakat süreçlerini dijitalleştiren, otomatik mutabakat çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Cari hesap mutabakatı yapan tüm işletmeler için uygundur.",
        bullets: ["Cari hesap mutabakatı gerektiren firmalar", "Tedarikçi ve müşteri mutabakatı yapan işletmeler", "Finansal süreçleri dijitalleştirmek isteyen şirketler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "E-mutabakat süreçleri için dijital imza ve onay modüllerini içerir.",
        bullets: ["E-mutabakat modülü", "Dijital imza modülü", "Onay akışı modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Otomatik mutabakat oluşturma", "Dijital imza ve onay süreçleri", "E-posta ile mutabakat gönderimi", "Mutabakat geçmişi takibi", "Raporlama ve analiz"],
      },
    ],
    en: {
      title: "E-Reconciliation",
      description: "An automatic reconciliation solution that digitalizes balance confirmation processes.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for every business that performs current account reconciliations.",
          bullets: [
            "Companies that need current account reconciliation",
            "Businesses reconciling with suppliers and customers",
            "Organizations aiming to digitalize financial workflows",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides digital signature and approval modules for e-reconciliation processes.",
          bullets: [
            "E-reconciliation module",
            "Digital signature module",
            "Approval workflow module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic reconciliation creation",
            "Digital signature and approval processes",
            "Sending reconciliations via e-mail",
            "Tracking reconciliation history",
            "Reporting and analytics",
          ],
        },
      ],
    },
  },
  "cafeplus": {
    slug: "cafeplus",
    category: "Sektörel",
    subCategory: "Sektörel/Cafe",
    group: "Wolvox",
    title: "CafePlus",
    description: "İnternet kafe ve benzeri işletmeleri yöneten, zaman bazlı hizmet çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "İnternet kafe, oyun salonu ve zaman bazlı hizmet sunan işletmeler için tasarlanmıştır.",
        bullets: ["İnternet kafeler", "Oyun salonları", "Zaman bazlı hizmet sunan işletmeler", "Bilgisayar kullanımı ücretlendiren firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Zaman takibi, ücretlendirme ve müşteri yönetimi modüllerini içerir.",
        bullets: ["Zaman takip modülü", "Ücretlendirme modülü", "Müşteri yönetim modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Otomatik zaman takibi", "Esnek ücretlendirme seçenekleri", "Müşteri kartı yönetimi", "Gelir raporları", "Bilgisayar durumu takibi"],
      },
    ],
    en: {
      title: "CafePlus",
      description: "A time-based service solution that manages internet cafés and similar businesses.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for internet cafés, game halls and businesses that sell time-based services.",
          bullets: [
            "Internet cafés",
            "Game halls",
            "Businesses offering time-based services",
            "Companies charging for computer usage",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes modules for time tracking, pricing and customer management.",
          bullets: [
            "Time tracking module",
            "Pricing module",
            "Customer management module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic time tracking",
            "Flexible pricing options",
            "Customer card management",
            "Income reports",
            "Monitoring computer status",
          ],
        },
      ],
    },
  },
  "netsurucu-plus": {
    slug: "netsurucu-plus",
    category: "Sektörel",
    group: "Wolvox",
    title: "NetSürücü Plus",
    description: "Sürücü kursu süreçlerinizi dijitalleştiren, eğitim yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Sürücü kursları ve benzeri eğitim kurumları için tasarlanmıştır.",
        bullets: ["Sürücü kursları", "Eğitim kurumları", "Öğrenci takibi gerektiren işletmeler", "Sınav yönetimi yapan firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Öğrenci yönetimi, ders takibi ve sınav yönetimi modüllerini içerir.",
        bullets: ["Öğrenci yönetim modülü", "Ders takip modülü", "Sınav yönetim modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Öğrenci kayıt ve takip sistemi", "Ders programı yönetimi", "Sınav ve değerlendirme takibi", "Ödeme ve mali işlemler", "Raporlama ve analiz"],
      },
    ],
    en: {
      title: "NetSürücü Plus",
      description: "An education management solution that digitalizes driving school processes.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for driving schools and similar training institutions.",
          bullets: [
            "Driving schools",
            "Training institutions",
            "Businesses needing student tracking",
            "Companies managing exams",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes student management, lesson tracking and exam management modules.",
          bullets: [
            "Student management module",
            "Lesson tracking module",
            "Exam management module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Student registration and tracking system",
            "Lesson schedule management",
            "Exam and evaluation tracking",
            "Payment and financial processes",
            "Reporting and analytics",
          ],
        },
      ],
    },
  },
  "otopark": {
    slug: "otopark",
    category: "Sektörel",
    group: "Wolvox",
    title: "OtoPark",
    description: "Otopark giriş, süre ve ödemelerini yöneten, otomatik otopark çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Otopark işletmeleri ve park yönetimi gerektiren tüm işletmeler için uygundur.",
        bullets: ["Otopark işletmeleri", "Park yönetimi gerektiren tesisler", "Zaman bazlı ücretlendirme yapan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Giriş-çıkış takibi, ücretlendirme ve ödeme modüllerini içerir.",
        bullets: ["Giriş-çıkış takip modülü", "Ücretlendirme modülü", "Ödeme yönetim modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Otomatik giriş-çıkış takibi", "Zaman bazlı ücretlendirme", "Ödeme entegrasyonları", "Gelir raporları", "Kapasite yönetimi"],
      },
    ],
    en: {
      title: "OtoPark",
      description: "An automated parking solution that manages entries, durations and payments.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for parking operators and any facility that needs parking management.",
          bullets: [
            "Parking lot operators",
            "Facilities requiring parking management",
            "Businesses that charge based on time",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides entry-exit tracking, pricing and payment modules.",
          bullets: [
            "Entry-exit tracking module",
            "Pricing module",
            "Payment management module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Automatic entry-exit tracking",
            "Time-based pricing",
            "Payment integrations",
            "Revenue reports",
            "Capacity management",
          ],
        },
      ],
    },
  },
  "netemlak": {
    slug: "netemlak",
    category: "Sektörel",
    group: "Wolvox",
    title: "NetEmlak",
    description: "Emlak portföyünüzü akıllıca yöneten, emlak yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Emlak ofisleri ve emlak yönetimi yapan işletmeler için tasarlanmıştır.",
        bullets: ["Emlak ofisleri", "Emlak yönetim şirketleri", "Gayrimenkul danışmanlık firmaları", "Portföy yönetimi yapan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Emlak portföyü, müşteri takibi ve işlem yönetimi modüllerini içerir.",
        bullets: ["Emlak portföy yönetim modülü", "Müşteri takip modülü", "İşlem yönetim modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Emlak portföyü yönetimi", "Müşteri ve talep takibi", "İlan yönetimi", "Görüntüleme ve randevu takibi", "Satış ve kiralama raporları"],
      },
    ],
    en: {
      title: "NetEmlak",
      description: "A real estate management solution that helps you run your property portfolio intelligently.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for real estate offices and companies that manage property portfolios.",
          bullets: [
            "Real estate agencies",
            "Property management companies",
            "Real estate consulting firms",
            "Businesses handling portfolio management",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes property portfolio, client tracking and transaction management modules.",
          bullets: [
            "Property portfolio management module",
            "Client tracking module",
            "Transaction management module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Property portfolio management",
            "Tracking client requests",
            "Listing management",
            "Viewing and appointment tracking",
            "Sales and rental reports",
          ],
        },
      ],
    },
  },
  "rentagent": {
    slug: "rentagent",
    category: "Sektörel",
    group: "Wolvox",
    title: "RentAgent",
    description: "Araç kiralama süreçlerinizi dijitalleştiren, araç kiralama yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Araç kiralama şirketleri ve araç yönetimi yapan işletmeler için uygundur.",
        bullets: ["Araç kiralama şirketleri", "Araç yönetimi yapan firmalar", "Filo yönetimi gerektiren işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Araç yönetimi, kiralama süreçleri ve müşteri takibi modüllerini içerir.",
        bullets: ["Araç yönetim modülü", "Kiralama süreç modülü", "Müşteri takip modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Araç envanter yönetimi", "Kiralama rezervasyon sistemi", "Müşteri ve sözleşme takibi", "Gelir ve performans raporları", "Bakım ve servis takibi"],
      },
    ],
    en: {
      title: "RentAgent",
      description: "A vehicle rental management solution that digitalizes rent-a-car processes.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for car rental companies and businesses that manage vehicle fleets.",
          bullets: [
            "Car rental companies",
            "Businesses managing vehicle fleets",
            "Operations that need fleet management",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains modules for vehicle management, rental workflows and customer tracking.",
          bullets: [
            "Vehicle management module",
            "Rental process module",
            "Customer tracking module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Vehicle inventory management",
            "Rental reservation system",
            "Customer and contract tracking",
            "Revenue and performance reports",
            "Maintenance and service tracking",
          ],
        },
      ],
    },
  },
  "kurs-otomasyonu": {
    slug: "kurs-otomasyonu",
    category: "Sektörel",
    group: "Wolvox",
    title: "Kurs Otomasyonu",
    description: "Kurs ve etüt merkezlerini zahmetsiz yöneten, eğitim yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Kurs, etüt merkezi ve benzeri eğitim kurumları için tasarlanmıştır.",
        bullets: ["Kurs merkezleri", "Etüt merkezleri", "Eğitim kurumları", "Öğrenci takibi gerektiren işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Öğrenci yönetimi, ders takibi ve ödeme yönetimi modüllerini içerir.",
        bullets: ["Öğrenci yönetim modülü", "Ders takip modülü", "Ödeme yönetim modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Öğrenci kayıt ve takip sistemi", "Ders programı yönetimi", "Devamsızlık takibi", "Ödeme ve mali işlemler", "Başarı raporları"],
      },
    ],
    en: {
      title: "Course Automation",
      description: "An education management solution that effortlessly runs course and study centers.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Tailored for courses, study centers and similar education institutions.",
          bullets: [
            "Course centers",
            "Study centers",
            "Educational institutions",
            "Businesses that need student tracking",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides student management, lesson tracking and payment management modules.",
          bullets: [
            "Student management module",
            "Lesson tracking module",
            "Payment management module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Student registration and tracking",
            "Lesson schedule management",
            "Absence tracking",
            "Payment and financial operations",
            "Achievement reports",
          ],
        },
      ],
    },
  },
  "hipokrat": {
    slug: "hipokrat",
    category: "Sektörel",
    group: "Wolvox",
    title: "Hipokrat",
    description: "Doktorlar için hasta takip platformu, sağlık yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Doktor muayenehaneleri, klinikler ve sağlık kurumları için tasarlanmıştır.",
        bullets: ["Doktor muayenehaneleri", "Klinikler", "Sağlık kurumları", "Hasta takibi gerektiren işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Hasta yönetimi, randevu sistemi ve tıbbi kayıt modüllerini içerir.",
        bullets: ["Hasta yönetim modülü", "Randevu sistemi modülü", "Tıbbi kayıt modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Hasta kayıt ve takip sistemi", "Randevu yönetimi", "Tıbbi geçmiş kayıtları", "Reçete ve rapor yönetimi", "Ödeme takibi"],
      },
    ],
    en: {
      title: "Hipokrat",
      description: "A healthcare management solution and patient tracking platform for doctors.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Developed for doctor offices, clinics and healthcare institutions.",
          bullets: [
            "Doctor practices",
            "Clinics",
            "Healthcare institutions",
            "Businesses that need patient tracking",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides patient management, appointment scheduling and medical record modules.",
          bullets: [
            "Patient management module",
            "Appointment system module",
            "Medical record module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Patient registration and tracking system",
            "Appointment management",
            "Medical history records",
            "Prescription and report management",
            "Payment tracking",
          ],
        },
      ],
    },
  },
  "prosemp": {
    slug: "prosemp",
    category: "Sektörel",
    group: "Wolvox",
    title: "ProSemp",
    description: "Etkinlik ve sempozyum katılımcı takibini yöneten, etkinlik yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Etkinlik, sempozyum ve konferans düzenleyen işletmeler için uygundur.",
        bullets: ["Etkinlik organizatörleri", "Sempozyum düzenleyen kurumlar", "Konferans yönetimi yapan firmalar", "Katılımcı takibi gerektiren işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Etkinlik yönetimi, katılımcı takibi ve biletleme modüllerini içerir.",
        bullets: ["Etkinlik yönetim modülü", "Katılımcı takip modülü", "Biletleme modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Etkinlik oluşturma ve yönetimi", "Katılımcı kayıt sistemi", "Bilet satış ve takibi", "Katılımcı iletişim yönetimi", "Raporlama ve analiz"],
      },
    ],
    en: {
      title: "ProSemp",
      description: "An event management solution that tracks participants for events and symposiums.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for businesses that organize events, symposiums and conferences.",
          bullets: [
            "Event organizers",
            "Institutions running symposiums",
            "Companies managing conferences",
            "Businesses needing participant tracking",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes event management, participant tracking and ticketing modules.",
          bullets: [
            "Event management module",
            "Participant tracking module",
            "Ticketing module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Creating and managing events",
            "Participant registration system",
            "Ticket sales and tracking",
            "Participant communication management",
            "Reporting and analytics",
          ],
        },
      ],
    },
  },
  "netgaleri": {
    slug: "netgaleri",
    category: "Sektörel",
    group: "Wolvox",
    title: "NetGaleri",
    description: "Oto alım satım süreçlerini tek panelde yöneten, galeri yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Oto galerileri ve araç alım-satım yapan işletmeler için tasarlanmıştır.",
        bullets: ["Oto galerileri", "Araç alım-satım yapan işletmeler", "İkinci el araç ticareti yapan firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Araç envanteri, müşteri takibi ve satış süreçleri modüllerini içerir.",
        bullets: ["Araç envanter yönetim modülü", "Müşteri takip modülü", "Satış süreç modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Araç envanter yönetimi", "Müşteri ve talep takibi", "Satış ve kiralama süreçleri", "Gelir raporları", "Araç özellik ve fotoğraf yönetimi"],
      },
    ],
    en: {
      title: "NetGaleri",
      description: "A dealership management solution that centralizes auto buying and selling processes.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for car dealerships and businesses trading vehicles.",
          bullets: [
            "Car dealerships",
            "Businesses buying and selling vehicles",
            "Companies dealing in second-hand cars",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides vehicle inventory, customer tracking and sales process modules.",
          bullets: [
            "Vehicle inventory management module",
            "Customer tracking module",
            "Sales process module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Vehicle inventory management",
            "Tracking customers and inquiries",
            "Sales and rental workflows",
            "Revenue reports",
            "Vehicle specification and photo management",
          ],
        },
      ],
    },
  },
  "mobil-satis-android": {
    slug: "mobil-satis-android",
    category: "Mobil",
    subCategory: "Mobil/Android",
    group: "Wolvox",
    title: "WOLVOX Mobil Satış (Android)",
    description: "Araç içi satış süreçlerinizi Android ile yöneten, mobil satış çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Saha satış ekipleri ve mobil satış yapan işletmeler için tasarlanmıştır.",
        bullets: ["Saha satış ekipleri", "Mobil satış yapan işletmeler", "Araç içi satış yapan firmalar", "Sipariş toplama operasyonları"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Mobil satış, sipariş yönetimi ve senkronizasyon modüllerini içerir.",
        bullets: ["Mobil satış modülü", "Sipariş yönetim modülü", "Senkronizasyon modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Android tabanlı mobil uygulama", "Offline çalışma desteği", "Wolvox ERP ile senkronizasyon", "Sipariş ve fatura oluşturma", "Müşteri ve ürün bilgisi erişimi"],
      },
    ],
    en: {
      title: "WOLVOX Mobile Sales (Android)",
      description: "A mobile sales solution that manages in-vehicle sales processes on Android.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Built for field sales teams and businesses conducting mobile sales.",
          bullets: [
            "Field sales teams",
            "Companies performing mobile sales",
            "Businesses selling from vehicles",
            "Order collection operations",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains mobile sales, order management and synchronization modules.",
          bullets: [
            "Mobile sales module",
            "Order management module",
            "Synchronization module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Android-based mobile app",
            "Offline working capability",
            "Synchronization with WOLVOX ERP",
            "Creating orders and invoices",
            "Access to customer and product data",
          ],
        },
      ],
    },
  },
  "mobil-fiyatgor-android": {
    slug: "mobil-fiyatgor-android",
    category: "Mobil",
    subCategory: "Mobil/Android",
    group: "Wolvox",
    title: "WOLVOX Mobil FiyatGör (Android)",
    description: "Mobil fiyat göster deneyimini hızlandıran, Android tabanlı fiyat görüntüleme çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Mobil cihazlardan fiyat görüntüleme yapmak isteyen işletmeler için uygundur.",
        bullets: ["Satış ekipleri", "Fiyat görüntüleme gerektiren operasyonlar", "Mobil cihaz kullanan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Fiyat görüntüleme ve senkronizasyon modüllerini içerir.",
        bullets: ["Fiyat görüntüleme modülü", "Senkronizasyon modülü", "Ürün bilgisi modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Android tabanlı mobil uygulama", "Gerçek zamanlı fiyat güncelleme", "Wolvox ERP ile senkronizasyon", "Ürün bilgisi görüntüleme", "Offline çalışma desteği"],
      },
    ],
    en: {
      title: "WOLVOX Mobile PriceView (Android)",
      description: "An Android price display solution that accelerates mobile price lookup.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Fits any business that wants to display prices from mobile devices.",
          bullets: [
            "Sales teams",
            "Operations that require price display",
            "Businesses using mobile devices",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes price viewing and synchronization modules.",
          bullets: [
            "Price viewing module",
            "Synchronization module",
            "Product information module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Android-based mobile application",
            "Real-time price updates",
            "Synchronization with WOLVOX ERP",
            "Displaying product information",
            "Offline working support",
          ],
        },
      ],
    },
  },
  "mobil-fiyatgor-ios": {
    slug: "mobil-fiyatgor-ios",
    category: "Mobil",
    subCategory: "Mobil/IOS",
    group: "Wolvox",
    title: "WOLVOX Mobil FiyatGör (IOS)",
    description: "IOS tabanlı fiyat göster çözümü, mobil fiyat görüntüleme platformu.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "IOS cihazlardan fiyat görüntüleme yapmak isteyen işletmeler için uygundur.",
        bullets: ["IOS cihaz kullanan satış ekipleri", "Fiyat görüntüleme gerektiren operasyonlar", "Apple cihaz kullanan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Fiyat görüntüleme ve senkronizasyon modüllerini içerir.",
        bullets: ["Fiyat görüntüleme modülü", "Senkronizasyon modülü", "Ürün bilgisi modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["IOS tabanlı mobil uygulama", "Gerçek zamanlı fiyat güncelleme", "Wolvox ERP ile senkronizasyon", "Ürün bilgisi görüntüleme", "Offline çalışma desteği"],
      },
    ],
    en: {
      title: "WOLVOX Mobile PriceView (iOS)",
      description: "An iOS-based price display solution for mobile price viewing.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for businesses that want to display prices via iOS devices.",
          bullets: [
            "Sales teams using iOS devices",
            "Operations that require price display",
            "Companies relying on Apple devices",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains price viewing and synchronization modules.",
          bullets: [
            "Price viewing module",
            "Synchronization module",
            "Product information module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "iOS-based mobile application",
            "Real-time price updates",
            "Synchronization with WOLVOX ERP",
            "Displaying product information",
            "Offline working support",
          ],
        },
      ],
    },
  },
  "keybox-ios": {
    slug: "keybox-ios",
    category: "Mobil",
    subCategory: "Mobil/IOS",
    group: "Wolvox",
    title: "KeyBox Password Manager (IOS)",
    description: "Tek şifreyle tüm bilgilerinizi güvenle saklayan, IOS tabanlı şifre yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Şifre yönetimi gerektiren tüm kullanıcılar için uygundur.",
        bullets: ["Bireysel kullanıcılar", "İşletmeler", "Güvenli şifre yönetimi isteyen kullanıcılar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Şifre yönetimi, güvenlik ve senkronizasyon modüllerini içerir.",
        bullets: ["Şifre yönetim modülü", "Güvenlik modülü", "Senkronizasyon modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Güvenli şifre saklama", "Otomatik şifre oluşturma", "Çoklu cihaz senkronizasyonu", "Biyometrik güvenlik", "Şifre paylaşım özellikleri"],
      },
    ],
    en: {
      title: "KeyBox Password Manager (iOS)",
      description: "An iOS password management solution that keeps all your credentials safe with a single password.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for every user who needs password management.",
          bullets: [
            "Individual users",
            "Businesses",
            "Users that require secure password management",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides password management, security and synchronization modules.",
          bullets: [
            "Password management module",
            "Security module",
            "Synchronization module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Secure password storage",
            "Automatic password generation",
            "Multi-device synchronization",
            "Biometric security",
            "Password sharing features",
          ],
        },
      ],
    },
  },
  "mobil-satis-windows-mobile": {
    slug: "mobil-satis-windows-mobile",
    category: "Mobil",
    subCategory: "Mobil/Windows Mobil",
    group: "Wolvox",
    title: "WOLVOX Mobil Satış (Windows Mobile)",
    description: "Windows Mobile üzerinden saha satış yönetin, mobil satış çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Windows Mobile cihaz kullanan saha satış ekipleri için tasarlanmıştır.",
        bullets: ["Windows Mobile cihaz kullanan satış ekipleri", "Saha satış yapan işletmeler", "Mobil satış operasyonları"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Mobil satış, sipariş yönetimi ve senkronizasyon modüllerini içerir.",
        bullets: ["Mobil satış modülü", "Sipariş yönetim modülü", "Senkronizasyon modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Windows Mobile tabanlı uygulama", "Offline çalışma desteği", "Wolvox ERP ile senkronizasyon", "Sipariş ve fatura oluşturma", "Müşteri ve ürün bilgisi erişimi"],
      },
    ],
    en: {
      title: "WOLVOX Mobile Sales (Windows Mobile)",
      description: "A mobile sales solution that lets you manage field sales via Windows Mobile devices.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for field sales teams that rely on Windows Mobile devices.",
          bullets: [
            "Sales teams using Windows Mobile devices",
            "Businesses conducting field sales",
            "Mobile sales operations",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes mobile sales, order management and synchronization modules.",
          bullets: [
            "Mobile sales module",
            "Order management module",
            "Synchronization module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Windows Mobile-based application",
            "Offline working support",
            "Synchronization with WOLVOX ERP",
            "Creating orders and invoices",
            "Access to customer and product data",
          ],
        },
      ],
    },
  },
  "officemessenger": {
    slug: "officemessenger",
    category: "Araçlar",
    group: "Wolvox",
    title: "OfficeMessenger",
    description: "Kurumiçi anlık mesajlaşma deneyimi, işletme içi iletişim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Kurumiçi iletişim gerektiren tüm işletmeler için uygundur.",
        bullets: ["İşletme içi iletişim gerektiren firmalar", "Ekip iletişimi yapan işletmeler", "Anlık mesajlaşma ihtiyacı olan kurumlar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Anlık mesajlaşma, dosya paylaşımı ve grup yönetimi modüllerini içerir.",
        bullets: ["Anlık mesajlaşma modülü", "Dosya paylaşım modülü", "Grup yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Anlık mesajlaşma", "Dosya ve belge paylaşımı", "Grup sohbetleri", "Mesaj geçmişi", "Güvenli iletişim"],
      },
    ],
    en: {
      title: "OfficeMessenger",
      description: "An internal communication solution that delivers enterprise instant messaging.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for any organization that needs internal communication.",
          bullets: [
            "Companies requiring internal communication",
            "Teams that collaborate frequently",
            "Institutions needing instant messaging",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides instant messaging, file sharing and group management modules.",
          bullets: [
            "Instant messaging module",
            "File sharing module",
            "Group management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Instant messaging",
            "File and document sharing",
            "Group chats",
            "Conversation history",
            "Secure communication",
          ],
        },
      ],
    },
  },
  "yedekleme": {
    slug: "yedekleme",
    category: "Araçlar",
    group: "Wolvox",
    title: "Yedekleme",
    description: "Dosya ve veritabanı yedeklerinizi otomatik alan, yedekleme çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Veri yedekleme gerektiren tüm işletmeler için uygundur.",
        bullets: ["Veri yedekleme gerektiren işletmeler", "Otomatik yedekleme isteyen firmalar", "Veri güvenliği önemli olan kurumlar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Otomatik yedekleme, geri yükleme ve yedek yönetimi modüllerini içerir.",
        bullets: ["Otomatik yedekleme modülü", "Geri yükleme modülü", "Yedek yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Otomatik yedekleme planlama", "Dosya ve veritabanı yedekleme", "Geri yükleme işlemleri", "Yedek geçmişi takibi", "Bildirim ve uyarı sistemi"],
      },
    ],
    en: {
      title: "Backup",
      description: "An automated backup solution that protects your files and databases.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Suitable for all businesses that require data backups.",
          bullets: [
            "Companies that need data backups",
            "Firms wanting automated backups",
            "Organizations focused on data security",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes automatic backup, restore and backup management modules.",
          bullets: [
            "Automatic backup module",
            "Restore module",
            "Backup management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Scheduling automatic backups",
            "Backing up files and databases",
            "Restore operations",
            "Tracking backup history",
            "Notification and alert system",
          ],
        },
      ],
    },
  },
  "barkod": {
    slug: "barkod",
    category: "Araçlar",
    group: "Wolvox",
    title: "Barkod",
    description: "Pratik şekilde barkod basımı sağlayan, barkod yazdırma çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Barkod basımı gerektiren tüm işletmeler için uygundur.",
        bullets: ["Barkod basımı yapan işletmeler", "Etiket yazdırma gerektiren firmalar", "Ürün etiketleme yapan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Barkod oluşturma, yazdırma ve yönetim modüllerini içerir.",
        bullets: ["Barkod oluşturma modülü", "Yazdırma modülü", "Barkod yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Çeşitli barkod formatları", "Toplu barkod basımı", "Barkod tasarım araçları", "Yazıcı entegrasyonları", "Barkod geçmişi takibi"],
      },
    ],
    en: {
      title: "Barcode",
      description: "A barcode printing solution that lets you create labels quickly.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for any business that needs barcode printing.",
          bullets: [
            "Businesses printing barcodes",
            "Companies that need label printing",
            "Operations performing product labeling",
          ],
        },
        {
          heading: "Included Modules",
          text: "Provides barcode creation, printing and management modules.",
          bullets: [
            "Barcode creation module",
            "Printing module",
            "Barcode management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Multiple barcode formats",
            "Bulk barcode printing",
            "Barcode design tools",
            "Printer integrations",
            "Barcode history tracking",
          ],
        },
      ],
    },
  },
  "santral-server": {
    slug: "santral-server",
    category: "Araçlar",
    group: "Wolvox",
    title: "Santral Server",
    description: "Telefon trafiğinizi analitikle takip eden, santral yönetim çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Santral sistemi kullanan işletmeler için tasarlanmıştır.",
        bullets: ["Santral sistemi kullanan işletmeler", "Çağrı merkezleri", "Telefon trafiği takibi gerektiren firmalar"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Santral yönetimi, çağrı takibi ve raporlama modüllerini içerir.",
        bullets: ["Santral yönetim modülü", "Çağrı takip modülü", "Raporlama modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Çağrı trafiği takibi", "Detaylı çağrı raporları", "Santral yönetimi", "Performans analizi", "Maliyet takibi"],
      },
    ],
    en: {
      title: "Switchboard Server",
      description: "A switchboard management solution that monitors your phone traffic with analytics.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Designed for businesses operating switchboard systems.",
          bullets: [
            "Companies using PBX systems",
            "Call centers",
            "Businesses that must track phone traffic",
          ],
        },
        {
          heading: "Included Modules",
          text: "Contains switchboard management, call tracking and reporting modules.",
          bullets: [
            "Switchboard management module",
            "Call tracking module",
            "Reporting module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Tracking call traffic",
            "Detailed call reports",
            "Switchboard management",
            "Performance analysis",
            "Cost monitoring",
          ],
        },
      ],
    },
  },
  "senet-basimi": {
    slug: "senet-basimi",
    category: "Araçlar",
    group: "Wolvox",
    title: "Senet Basımı",
    description: "Senet basım süreçlerinizi kolaylaştıran, senet yazdırma çözümü.",
    sections: [
      {
        heading: "Kullanım Alanları",
        text: "Senet basımı gerektiren tüm işletmeler için uygundur.",
        bullets: ["Senet basımı yapan işletmeler", "Çek-senet yönetimi gerektiren firmalar", "Finansal belge basımı yapan işletmeler"],
      },
      {
        heading: "İçerdiği Modüller",
        text: "Senet oluşturma, basım ve yönetim modüllerini içerir.",
        bullets: ["Senet oluşturma modülü", "Basım modülü", "Senet yönetim modülü"],
      },
      {
        heading: "Öne Çıkan Özellikler",
        bullets: ["Standart senet formatları", "Toplu senet basımı", "Senet tasarım araçları", "Yazıcı entegrasyonları", "Senet geçmişi takibi"],
      },
    ],
    en: {
      title: "Promissory Note Printing",
      description: "A printing solution that streamlines promissory note preparation.",
      sections: [
        {
          heading: "Usage Areas",
          text: "Ideal for every business that needs to print promissory notes.",
          bullets: [
            "Businesses printing promissory notes",
            "Companies managing cheques and notes",
            "Operations producing financial documents",
          ],
        },
        {
          heading: "Included Modules",
          text: "Includes modules for creating, printing and managing notes.",
          bullets: [
            "Note creation module",
            "Printing module",
            "Note management module",
          ],
        },
        {
          heading: "Key Features",
          bullets: [
            "Standard promissory note formats",
            "Bulk note printing",
            "Note design tools",
            "Printer integrations",
            "Note history tracking",
          ],
        },
      ],
    },
  },
}

export const AKINSOFT_PRODUCT_SLUGS = Object.keys(AKINSOFT_PRODUCT_DETAILS) as Array<keyof typeof AKINSOFT_PRODUCT_DETAILS>

export function getAkinsoftProductDetail(slug: string, locale: string = "tr"): ProductDetail | undefined {
  const product = AKINSOFT_PRODUCT_DETAILS[slug as keyof typeof AKINSOFT_PRODUCT_DETAILS]

  if (!product) {
    return undefined
  }

  if (locale === "en" && product.en) {
    return {
      ...product,
      title: product.en.title,
      description: product.en.description,
      sections: product.en.sections,
    }
  }

  return product
}

export function getProductById(id: string, locale: string = "tr"): ProductDetail | null {
  const productSlugs = Object.keys(AKINSOFT_PRODUCT_DETAILS)
  const productIndex = parseInt(id, 10) - 1
  if (productIndex < 0 || productIndex >= productSlugs.length) return null
  const productSlug = productSlugs[productIndex]
  return getAkinsoftProductDetail(productSlug, locale) || null
}

export function getAllProducts(locale: string = "tr"): ProductDetail[] {
  return Object.keys(AKINSOFT_PRODUCT_DETAILS).map(slug => 
    getAkinsoftProductDetail(slug, locale)
  ).filter((p): p is ProductDetail => p !== undefined)
}

export function getProductBySlug(slug: string, locale: string = "tr"): ProductDetail | null {
  return getAkinsoftProductDetail(slug, locale) || null
}
