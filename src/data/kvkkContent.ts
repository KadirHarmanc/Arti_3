export type KvkkCategory = {
  title: string
  items: string[]
}

export type KvkkContent = {
  hero: {
    lawNumber: string
    title: string
  }
  dataController: {
    title: string
    companyName: string
    intro1: string
    intro2: string
  }
  processedData: {
    title: string
    description: string
    personalDataLabel: string
    specialDataLabel: string
  }
  personalDataCategories: KvkkCategory[]
  specialDataCategories: KvkkCategory[]
  processingPurposes: {
    title: string
    description: string
    header: string
    list: string[]
  }
  dataCollection: {
    title: string
    text1: string
    text2: string
  }
  dataSharingDomestic: {
    title: string
    description: string
    header: string
    footerNote: string
    list: string[]
  }
  dataSharingAbroad: {
    title: string
    text: string
  }
  rights: {
    title: string
    intro: string
    text: string
  }
  requests: {
    title: string
    intro: string
    methods: string
    warningTitle: string
    warningText: string
  }
  contact: {
    title: string
    companyName: string
    dataControllerLabel: string
    addressLabel: string
    phoneLabel: string
    emailLabel: string
    kepLabel: string
    webLabel: string
    address: string
    phone: string
    email: string
    kep: string
    web: string
  }
}

const kvkkContent: Record<'tr' | 'en', KvkkContent> = {
  tr: {
    hero: {
      lawNumber: '6698 Sayılı Kanun',
      title: 'Kişisel Verilerinin Korunma Kanunu'
    },
    dataController: {
      title: 'Veri Sorumlusu',
      companyName: 'Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi',
      intro1:
        'Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi (Artı 3 Bilişim) olarak müşterilerimizin, potansiyel müşterilerimizin, ürün ve hizmet tedarikçilerimizin, çalışanlarımızın, çalışanlarımızın yakınlarının, çalışan adaylarımızın, ziyaretçilerimizin, stajyerlerimizin, bayilerimizin yetkili ve çalışanlarının, hissedarlarımızın ve diğer üçüncü kişilerin kişisel verilerine önem veriyoruz.',
      intro2:
        'Veri Sorumlusu olarak uhdemizde bulunan kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun belirttiği sınırlar dâhilinde, hukuka ve dürüstlük kurallarına uygun olarak işliyoruz.'
    },
    processedData: {
      title: 'İşlenen Kişisel ve Özel Nitelikli Kişisel Verileriniz',
      description: 'Aşağıda belirtilen türlerdeki kişisel ve özel nitelikli kişisel verileriniz Artı 3 Bilişim tarafından işlenmektedir.',
      personalDataLabel: 'Kişisel Veriler',
      specialDataLabel: 'Özel Nitelikli Kişisel Veriler'
    },
    personalDataCategories: [
      {
        title: 'Kimlik',
        items: [
          'Ad-Soyad',
          'Kimlik numarası',
          'Anne baba adı',
          'İlk soyadı',
          'Doğum yeri ve tarihi',
          'Uyruk',
          'Medeni durum',
          'Nüfus cüzdanında, ehliyette ve pasaportta yer alan diğer kimlik bilgileri',
          'Vergi kimlik numarası',
          'SGK sicil numarası',
          'İmza vb. kimlik bilgileri'
        ]
      },
      {
        title: 'İletişim',
        items: ['Ev ve cep telefon numarası', 'Ev ve işyeri adresi', 'Yurt dışı ikamet adresi', 'E-posta adresi', 'Faks numarası']
      },
      {
        title: 'Lokasyon',
        items: ['Konum ve güzergah bilgileri', 'Konaklama ve ulaşım bilgileri']
      },
      {
        title: 'Özlük',
        items: [
          'Özgeçmiş bilgileri',
          'Askerlik bilgileri',
          'Disiplin ve performans bilgileri',
          'İzin bilgileri',
          'Yönetici değerlendirmeleri',
          'Staj bilgileri',
          'Sosyal güvenlik bilgileri',
          'Tespit tutanakları',
          'Bordroda yer alan bilgiler',
          'Asgari geçim indirimi bilgileri',
          'İş kazası ve meslek hastalığı bilgileri',
          'İş sürekliliğinin sağlanması amacıyla takip edilen bilgiler vb. özlük bilgileri'
        ]
      },
      {
        title: 'Hukuki İşlem',
        items: [
          'Şirketimize açılan ya da Şirketimizin açmış olduğu dava dosyalarında yer alan ve adli makamlar ile yapılan yazışmalarda yer alan kişisel hukuki bilgiler',
          'İcra dosyalarında yer alan kişisel hukuki bilgiler',
          'İmza sirkülerleri',
          'Vekaletnamelerde yer alan kişisel hukuki bilgiler'
        ]
      },
      {
        title: 'Müşteri İşlem ve Pazarlama',
        items: [
          'Fatura bilgileri',
          'Çek ve senet bilgileri',
          'Cari hesap işlem bilgileri',
          'Sipariş bilgileri',
          'Alışveriş geçmişi bilgileri',
          'Çerez kayıtları',
          'Üyelik bilgileri',
          'Müşteri yorumları',
          'Talep ve şikayet bilgileri vb. müşteri işlem bilgileri'
        ]
      },
      {
        title: 'Fiziksel Mekan Güvenliği',
        items: ['İç ve dış mekan güvenlik kameraları tarafından kaydedilen veriler ile fiziksel mekan güvenliği kapsamında ziyaretçilerden edinilen bilgiler']
      },
      {
        title: 'İşlem Güvenliği',
        items: [
          'Erişim logları',
          'Kullanıcı adı ile şifre ve parola bilgileri',
          'Kurumsal e-posta bilgileri',
          'İnternet sitesi üyelik kullanıcı adı ve parola bilgileri',
          'Üyelik ve bayilik paneli giriş, çıkış ve işlem bilgileri',
          'İnternet protokol adresleri (IP)',
          'İnternet sitesi trafik bilgileri'
        ]
      },
      {
        title: 'Risk Yönetimi',
        items: [
          'Ticari risklerin yönetilebilmesi amacıyla edinilen kişisel risk verileri',
          'İş sağlığı ve güvenliği kapsamında yapılan risk ve tehlike bildirimleri'
        ]
      },
      {
        title: 'Finans',
        items: ['Banka hesap bilgileri', 'Kredi kartı bilgileri', 'IBAN numaraları', 'Borç ve alacak bilgileri', 'Malvarlığı bilgileri']
      },
      {
        title: 'Mesleki Deneyim',
        items: [
          'İş deneyimleri',
          'Yabancı dil seviyesi',
          'Teknik yetiler',
          'Sürücü belgesi',
          'Önceki çalışılan yer bilgileri',
          'Eğitimler, kurslar',
          'Diploma bilgileri (mezun olunan okul/bölüm)',
          'Sertifika bilgileri'
        ]
      },
      {
        title: 'Görsel ve İşitsel Kayıtlar',
        items: ['Fotoğraf ve görüntü kayıtları', 'Çağrı merkezi ses kayıtları']
      }
    ],
    specialDataCategories: [
      {
        title: 'Sağlık Bilgileri',
        items: [
          'Sağlık raporları',
          'İşe giriş ve periyodik muayene raporları',
          'Mazeret raporları',
          'Engel bilgileri ve raporları',
          'Kan grubu ve aşı bilgileri',
          'İş kazası ve meslek hastalığı bilgileri',
          'Kullanılan cihaz ve protez bilgileri',
          'Teşhis, tanı, tedavi bilgileri',
          'Doğum ve hamilelik bilgileri',
          'Ateş ölçümü bilgileri',
          'HES kodu bilgileri'
        ]
      },
      {
        title: 'Ceza Mahkûmiyeti ve Güvenlik Tedbirleri',
        items: ['Adli sicil bilgileri']
      },
      {
        title: 'Biyometrik Veri',
        items: ['Çalışanlarımızın biyometrik verileri']
      }
    ],
    processingPurposes: {
      title: 'Kişisel ve Özel Nitelikli Kişisel Verilerin İşlenme Amaçları',
      description: 'Artı 3 Bilişim, yukarıda genel hatları ile belirtilen, uhdesindeki kişisel verileri aşağıdaki amaçlarla işlemektedir:',
      header: 'İşlenme Amacı',
      list: [
        'Acil Durum Yönetimi Süreçlerinin Yürütülmesi',
        'Bilgi Güvenliği Süreçlerinin Yürütülmesi',
        'Çalışan Adaylarının Seçme ve Yerleştirme Süreçlerinin Yürütülmesi',
        'Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi',
        'Çalışanlar İçin İş Akdi ve Mevzuattan Kaynaklı Yükümlülüklerin Yerine Getirilmesi',
        'Çalışanlar İçin Yan Haklar ve Menfaatleri Süreçlerinin Yürütülmesi',
        'Denetim / Etik Faaliyetlerinin Yürütülmesi',
        'Eğitim Faaliyetlerinin Yürütülmesi',
        'Erişim Yetkilerinin Yürütülmesi',
        'Faaliyetlerin Mevzuata Uygun Yürütülmesi',
        'Finans ve Muhasebe İşlerinin Yürütülmesi',
        'Fiziksel Mekan Güvenliğinin Temini',
        'Görevlendirme Süreçlerinin Yürütülmesi',
        'Hukuk İşlerinin Takibi ve Yürütülmesi',
        'İç Denetim ve Soruşturma Faaliyetlerinin Yürütülmesi',
        'İletişim Faaliyetlerinin Yürütülmesi',
        'İnsan Kaynakları Süreçlerinin Planlanması',
        'İş Faaliyetlerinin Yürütülmesi / Denetimi',
        'İş Sağlığı / Güvenliği Faaliyetlerinin Yürütülmesi',
        'İş Süreçlerinin İyileştirilmesine Yönelik Önerilerin Alınması ve Değerlendirilmesi',
        'İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi',
        'Lojistik Faaliyetlerinin Yürütülmesi',
        'Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi',
        'Mal / Hizmet Satış Süreçlerinin Yürütülmesi',
        'Mal / Hizmet Üretim ve Operasyon Süreçlerinin Yürütülmesi',
        'Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi',
        'Organizasyon ve Etkinlik Yönetimi',
        'Pazarlama Analiz Çalışmalarının Yürütülmesi',
        'Performans Değerlendirme Süreçlerinin Yürütülmesi',
        'Risk Yönetimi Süreçlerinin Yürütülmesi',
        'Sözleşme Süreçlerinin Yürütülmesi',
        'Saklama ve Arşiv Faaliyetlerinin Yürütülmesi',
        'Talep ve Şikayetlerin Takibi',
        'Taşınır Mal ve Kaynakların Güvenliğinin Temini',
        'Tedarik Zinciri Yönetimi Süreçlerinin Yürütülmesi',
        'Ücret Politikasının Yürütülmesi',
        'Ürün ve Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi',
        'Veri Sorumlusu Operasyonlarının Güvenliğinin Temini',
        'Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi',
        'Yönetim Faaliyetlerinin Yürütülmesi',
        'Ziyaretçi Kayıtlarının Oluşturulması ve Takibi'
      ]
    },
    dataCollection: {
      title: 'Kişisel ve Özel Nitelikli Kişisel Verilerin Toplanma Şekli ve Verilerinizi İşlememizin Hukuki Dayanakları',
      text1:
        'Artı 3 Bilişim, kişisel ve özel nitelikli kişisel verilerinizi 6698 sayılı Kanun\'un 5. maddesinde yer alan kanunlarda açıkça öngörülmesi, sözleşmenin kurulması veya ifası, veri sorumlusunun hukuki sorumluluğunu yerine getirmesi, bir hakkın tesisi, kullanılması veya korunması için zorunlu olması, kişisel verinin ilgili kişinin kendisi tarafından alenileştirilmiş olması, ilgili kişilerin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati ve açık rıza şartlarından en az birinin var olması durumunda işlemektedir.',
      text2:
        'Kişisel veriler; iş başvuru formları, Şirket\'e ibraz edilen muhtelif belgeler, insan kaynakları, muhasebe ve iş süreçlerinde Şirket nezdinde oluşturulan bilgi ve belgeler, faturalar, irsaliyeler, fiyat teklif formları, Şirket\'e iletilen posta ve e-postalar, Şirket internet siteleri, Şirket\'in hizmet verdiği yahut hizmet aldığı kişi ve şirketler ile iş ortakları, hizmet/ürün tedarik ettiği firmalar gibi üçüncü kişiler, kurumsal iletişim hesapları, güvenlik kameraları, göz tanıma sistemi ile Şirket araçlarındaki GPS, taşıt tanıma, otomatik geçiş sistemleri vb. sistemler kanalıyla toplanmaktadır.'
    },
    dataSharingDomestic: {
      title: 'Kişisel Verilerinizin Yurt İçinde Bulunan Üçüncü Kişilerle Paylaşımı',
      description: 'Artı 3 Bilişim, veri sorumlusu sıfatıyla elde ettiği verileri 6698 sayılı Kanun\'un 8. maddesinde sayılan hukuki gerekçeler kapsamında aşağıdaki amaçlar için paylaşabilmektedir:',
      header: 'Paylaşım Amacı',
      footerNote:
        'Yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olan verilerle sınırlı olarak; hissedarlara, yetkili kamu kurum ve kuruluşlarına, gerçek veya tüzel kişilere (Şirket\'in akdi veya kanuni yükümlülüklerini yerine getirmek amacıyla işbirliği yaptığı kuruluşlar: sigorta şirketleri, hukuk büroları, mali ve hukuki danışmanlar, bankalar ile Şirket\'in iş sağlığı ve güvenliği, denetim, güvenlik, seyahat, konaklama, organizasyon, reklam, arşivleme vb. konularda hizmet aldığı kişi ve kuruluşlar ile Şirket\'in iş ilişkisi içinde olduğu diğer kişi ve kuruluşlar) kişisel veriler aktarılabilmektedir.',
      list: [
        'Acil Durum Yönetimi Süreçlerinin Yürütülmesi',
        'Bilgi Güvenliği Süreçlerinin Yürütülmesi',
        'Çalışanlar İçin İş Akdi ve Mevzuattan Kaynaklı Yükümlülüklerin Yerine Getirilmesi',
        'Çalışanlar İçin Yan Haklar ve Menfaatleri Süreçlerinin Yürütülmesi',
        'Eğitim Faaliyetlerinin Yürütülmesi',
        'Faaliyetlerin Mevzuata Uygun Yürütülmesi',
        'Finans ve Muhasebe İşlerinin Yürütülmesi',
        'Hukuk İşlerinin Takibi ve Yürütülmesi',
        'İletişim Faaliyetlerinin Yürütülmesi',
        'İş Faaliyetlerinin Yürütülmesi / Denetimi',
        'İş Sağlığı / Güvenliği Faaliyetlerinin Yürütülmesi',
        'Lojistik Faaliyetlerinin Yürütülmesi',
        'Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi',
        'Mal / Hizmet Satış Süreçlerinin Yürütülmesi',
        'Mal / Hizmet Üretim ve Operasyon Süreçlerinin Yürütülmesi',
        'Organizasyon ve Etkinlik Yönetimi',
        'Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi',
        'Risk Yönetimi Süreçlerinin Yürütülmesi',
        'Sözleşme Süreçlerinin Yürütülmesi',
        'Tedarik Zinciri Yönetimi Süreçlerinin Yürütülmesi',
        'Ürün ve Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi',
        'Veri Sorumlusu Operasyonlarının Güvenliğinin Temini',
        'Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi',
        'Yönetim Faaliyetlerinin Yürütülmesi'
      ]
    },
    dataSharingAbroad: {
      title: 'Kişisel Verilerinizin Yurt Dışında Bulunan Üçüncü Kişilerle Paylaşımı',
      text: 'Artı 3 Bilişim, hiçbir kişisel veriyi yurt dışında bulunan üçüncü kişiler ile paylaşmamaktadır.'
    },
    rights: {
      title: 'Kişisel Verilerinize İlişkin Haklarınız',
      intro:
        'Artı 3 Bilişim nezdinde kişisel verileri olan kişiler, Kişisel Verilerin Korunması Kanunu\'nun 11. maddesinde belirtilen bütün haklara sahiptir. Kanunun 11. maddesi çerçevesinde ilgili kişi Artı 3 Bilişim\'e başvurarak kendisi ile ilgili:',
      text:
        'Kişisel verilerinin işlenip işlenmediğini öğrenme, kişisel verileri işlenmişse buna ilişkin bilgi talep etme, kişisel verilerinin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme, kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, kişisel verilerin silinmesini veya yok edilmesini isteme, kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesine ilişkin işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, işlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme, kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.'
    },
    requests: {
      title: 'Kişisel Verilerinize İlişkin Talepleriniz',
      intro:
        '6698 sayılı Kanun\'un 11. maddesinde sayılan haklarınız kapsamındaki taleplerinizi, Kanun\'un 13. maddesi ile Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ\'in 5. maddesi gereği aşağıdaki yöntemlerden biri ile iletebilirsiniz. Talebinize 6698 sayılı Kanun\'un 13. maddesi gereğince 30 gün içerisinde ücretsiz cevap verilecektir. Ancak işlemin ayrıca bir maliyet gerektirmesi halinde anılan Tebliğde belirlenen ücret dışında bir ücret talep edilmeyecektir.',
      methods:
        'Başvurularınızı Artı 3 Bilişim KVKK İlgili Kişi Başvuru Formu\'nu doldurarak formu elden teslim ederek, noter vasıtasıyla, KEP adresinizle veya tarafınızca şirketimize daha önce bildirilen ve sistemimizde kayıtlı bulunan e-posta ile yapabilirsiniz.',
      warningTitle: 'Önemli Uyarı',
      warningText:
        'Başvurucu, kimliğini ispat edecek olan belge ve dokümanlarla beraber başvuruda bulunacaktır. Başvurularınızda ad, soyad ve başvuru yazılı ise imza, TCKN, tebligata esas yerleşim yeri veya işyeri adresi, varsa bildirime esas elektronik posta adresi, telefon, varsa faks numarası ve talep konusu yazılması zorunludur. Bu belgelerin teyidi yapılamadığı takdirde olumlu yanıt verilmeyecektir.'
    },
    contact: {
      title: 'İletişim Bilgileri',
      companyName: 'Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi',
      dataControllerLabel: 'Veri Sorumlusu',
      addressLabel: 'Adres',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Posta',
      kepLabel: 'KEP Adresi',
      webLabel: 'Web',
      address: 'Mustafa Kemalpaşa Mah. Cami Sok. No:48/A\nAvcılar/İstanbul',
      phone: '0212 423 27 84',
      email: 'info@arti3.net',
      kep: 'arti3@hs01.kep.tr',
      web: 'www.arti3.net'
    }
  },
  en: {
    hero: {
      lawNumber: 'Law No. 6698',
      title: 'Personal Data Protection Law'
    },
    dataController: {
      title: 'Data Controller',
      companyName: 'Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi',
      intro1:
        'As Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi (Artı 3 Bilişim), we value the personal data of our customers, potential customers, product and service suppliers, employees, relatives of our employees, job candidates, visitors, interns, authorized personnel and employees of our dealers, shareholders, and other third parties.',
      intro2:
        'As Data Controller, we process the personal data in our possession in accordance with the limits specified in Law No. 6698 on the Protection of Personal Data, in accordance with the law and the rules of honesty.'
    },
    processedData: {
      title: 'Your Personal and Special Category Personal Data Processed',
      description: 'Your personal and special category personal data of the types specified below are processed by Artı 3 Bilişim.',
      personalDataLabel: 'Personal Data',
      specialDataLabel: 'Special Category Personal Data'
    },
    personalDataCategories: [
      {
        title: 'Identity',
        items: [
          'Name-Surname',
          'ID number',
          "Parents' names",
          'First surname',
          'Place and date of birth',
          'Nationality',
          'Marital status',
          'Other identity information contained in identity card, driver\'s license and passport',
          'Tax ID number',
          'SSI registration number',
          'Signature and other identity information'
        ]
      },
      {
        title: 'Contact',
        items: ['Home and mobile phone number', 'Home and workplace address', 'Foreign residence address', 'E-mail address', 'Fax number']
      },
      {
        title: 'Location',
        items: ['Location and route information', 'Accommodation and transportation information']
      },
      {
        title: 'Personnel',
        items: [
          'Resume information',
          'Military service information',
          'Discipline and performance information',
          'Leave information',
          'Manager evaluations',
          'Internship information',
          'Social security information',
          'Determination minutes',
          'Information in payroll',
          'Minimum living allowance information',
          'Work accident and occupational disease information',
          'Information tracked for the purpose of ensuring business continuity and other personnel information'
        ]
      },
      {
        title: 'Legal Transaction',
        items: [
          'Personal legal information contained in case files opened against our Company or opened by our Company and in correspondence with judicial authorities',
          'Personal legal information contained in enforcement files',
          'Signature circulars',
          'Personal legal information contained in power of attorney'
        ]
      },
      {
        title: 'Customer Transaction and Marketing',
        items: [
          'Invoice information',
          'Check and promissory note information',
          'Current account transaction information',
          'Order information',
          'Purchase history information',
          'Cookie records',
          'Membership information',
          'Customer comments',
          'Request and complaint information and other customer transaction information'
        ]
      },
      {
        title: 'Physical Space Security',
        items: ['Data recorded by indoor and outdoor security cameras and information obtained from visitors within the scope of physical space security']
      },
      {
        title: 'Transaction Security',
        items: [
          'Access logs',
          'Username, password and code information',
          'Corporate e-mail information',
          'Website membership username and password information',
          'Membership and dealer panel login, logout and transaction information',
          'Internet Protocol addresses (IP)',
          'Website traffic information'
        ]
      },
      {
        title: 'Risk Management',
        items: ['Personal risk data acquired for the purpose of managing commercial risks', 'Risk and hazard notifications made within the scope of occupational health and safety']
      },
      {
        title: 'Finance',
        items: ['Bank account information', 'Credit card information', 'IBAN numbers', 'Debt and receivables information', 'Asset information']
      },
      {
        title: 'Professional Experience',
        items: [
          'Work experience',
          'Foreign language level',
          'Technical skills',
          "Driver's license",
          'Previous workplace information',
          'Trainings, courses',
          'Diploma information (school/department graduated)',
          'Certificate information'
        ]
      },
      {
        title: 'Visual and Audio Recordings',
        items: ['Photo and image recordings', 'Call center voice recordings']
      }
    ],
    specialDataCategories: [
      {
        title: 'Health Information',
        items: [
          'Health reports',
          'Pre-employment and periodic examination reports',
          'Excuse reports',
          'Disability information and reports',
          'Blood type and vaccination information',
          'Work accident and occupational disease information',
          'Information on devices and prostheses used',
          'Diagnosis, diagnosis, treatment information',
          'Birth and pregnancy information',
          'Fever measurement information',
          'HES code information'
        ]
      },
      {
        title: 'Criminal Conviction and Security Measures',
        items: ['Criminal record information']
      },
      {
        title: 'Biometric Data',
        items: ['Biometric data of our employees']
      }
    ],
    processingPurposes: {
      title: 'Purposes of Processing Personal and Special Category Personal Data',
      description: 'Artı 3 Bilişim processes the personal data in its possession, outlined above, for the following purposes:',
      header: 'Processing Purpose',
      list: [
        'Conduct of Emergency Management Processes',
        'Conduct of Information Security Processes',
        'Conduct of Selection and Placement Processes for Job Candidates',
        'Conduct of Application Processes for Job Candidates',
        'Fulfillment of Employment Contract and Legal Obligations for Employees',
        'Conduct of Side Rights and Benefits Processes for Employees',
        'Conduct of Audit / Ethics Activities',
        'Conduct of Training Activities',
        'Conduct of Access Authorizations',
        'Conduct of Activities in Compliance with Legislation',
        'Conduct of Finance and Accounting Works',
        'Ensuring Physical Space Security',
        'Conduct of Assignment Processes',
        'Follow-up and Conduct of Legal Works',
        'Conduct of Internal Audit and Investigation Activities',
        'Conduct of Communication Activities',
        'Planning of Human Resources Processes',
        'Conduct / Audit of Business Activities',
        'Conduct of Occupational Health / Safety Activities',
        'Receiving and Evaluation of Suggestions for Improvement of Business Processes',
        'Conduct of Business Continuity Activities',
        'Conduct of Logistics Activities',
        'Conduct of Goods / Services Procurement Processes',
        'Conduct of Goods / Services Sales Processes',
        'Conduct of Goods / Services Production and Operations Processes',
        'Conduct of Customer Relationship Management Processes',
        'Organization and Event Management',
        'Conduct of Marketing Analysis Studies',
        'Conduct of Performance Evaluation Processes',
        'Conduct of Risk Management Processes',
        'Conduct of Contract Processes',
        'Conduct of Storage and Archive Activities',
        'Follow-up of Requests and Complaints',
        'Ensuring Security of Movable Assets and Resources',
        'Conduct of Supply Chain Management Processes',
        'Conduct of Wage Policy',
        'Conduct of Product and Services Marketing Processes',
        'Ensuring Security of Data Controller Operations',
        'Providing Information to Authorized Persons, Institutions and Organizations',
        'Conduct of Management Activities',
        'Creation and Follow-up of Visitor Records'
      ]
    },
    dataCollection: {
      title: 'Method of Collection of Personal and Special Category Personal Data and Legal Basis for Processing Your Data',
      text1:
        'Artı 3 Bilişim processes your personal and special category personal data in cases where at least one of the conditions specified in Article 5 of Law No. 6698 exists: where it is clearly provided for in the laws, where it is necessary for the establishment or performance of a contract, where it is necessary for the data controller to fulfill its legal obligations, where it is necessary for the establishment, exercise or protection of a right, where the personal data has been made public by the data subject, or where processing is necessary for the legitimate interests of the data controller, provided that it does not violate the fundamental rights and freedoms of the data subject, and where explicit consent has been obtained.',
      text2:
        'Personal data is collected through job application forms, various documents submitted to the Company, information and documents created within the Company in human resources, accounting and business processes, invoices, delivery notes, price quotation forms, mail and e-mails sent to the Company, Company websites, third parties such as individuals and companies with whom the Company provides or receives services, business partners, companies that supply services/products, corporate communication accounts, security cameras, eye recognition systems, GPS in Company vehicles, vehicle recognition, automatic passage systems and similar systems.'
    },
    dataSharingDomestic: {
      title: 'Sharing of Your Personal Data with Third Parties Located in Turkey',
      description: 'As Data Controller, Artı 3 Bilişim may share the data it has obtained within the scope of the legal grounds listed in Article 8 of Law No. 6698 for the following purposes:',
      header: 'Sharing Purpose',
      footerNote:
        'Personal data may be transferred to shareholders, authorized public institutions and organizations, real or legal persons (organizations with which the Company cooperates to fulfill its contractual or legal obligations: insurance companies, law firms, financial and legal advisors, banks, and individuals and organizations from whom the Company receives services in areas such as occupational health and safety, audit, security, travel, accommodation, organization, advertising, archiving, and other individuals and organizations with whom the Company has business relations), limited to the data necessary for the realization of the purposes specified above.',
      list: [
        'Conduct of Emergency Management Processes',
        'Conduct of Information Security Processes',
        'Fulfillment of Employment Contract and Legal Obligations for Employees',
        'Conduct of Side Rights and Benefits Processes for Employees',
        'Conduct of Training Activities',
        'Conduct of Activities in Compliance with Legislation',
        'Conduct of Finance and Accounting Works',
        'Follow-up and Conduct of Legal Works',
        'Conduct of Communication Activities',
        'Conduct / Audit of Business Activities',
        'Conduct of Occupational Health / Safety Activities',
        'Conduct of Logistics Activities',
        'Conduct of Goods / Services Procurement Processes',
        'Conduct of Goods / Services Sales Processes',
        'Conduct of Goods / Services Production and Operations Processes',
        'Organization and Event Management',
        'Conduct of Customer Relationship Management Processes',
        'Conduct of Risk Management Processes',
        'Conduct of Contract Processes',
        'Conduct of Supply Chain Management Processes',
        'Conduct of Product and Services Marketing Processes',
        'Ensuring Security of Data Controller Operations',
        'Providing Information to Authorized Persons, Institutions and Organizations',
        'Conduct of Management Activities'
      ]
    },
    dataSharingAbroad: {
      title: 'Sharing of Your Personal Data with Third Parties Located Abroad',
      text: 'Artı 3 Bilişim does not share any personal data with third parties located abroad.'
    },
    rights: {
      title: 'Your Rights Regarding Your Personal Data',
      intro:
        'Individuals whose personal data is held by Artı 3 Bilişim have all the rights specified in Article 11 of the Law on the Protection of Personal Data. Within the framework of Article 11 of the Law, the relevant person may apply to Artı 3 Bilişim regarding themselves:',
      text:
        'to learn whether their personal data is being processed, and if so, to request information about it, to learn the purpose of processing their personal data and whether it is used in accordance with its purpose, to know the third parties to whom personal data is transferred domestically or abroad, to request the correction of personal data if it is incomplete or inaccurate, to request the deletion or destruction of personal data, to request that the third parties to whom personal data has been transferred be notified of the operations carried out as per the correction, deletion or destruction of personal data, to object to the emergence of a result against the person themselves by analyzing the processed data exclusively through automated systems, to request compensation for the damage suffered as a result of the unlawful processing of personal data.'
    },
    requests: {
      title: 'Your Requests Regarding Your Personal Data',
      intro:
        'You may submit your requests within the scope of the rights listed in Article 11 of Law No. 6698 by one of the following methods in accordance with Article 13 of the Law and Article 5 of the Regulation on the Procedures and Principles of Application to the Data Controller. Your request will be answered free of charge within 30 days in accordance with Article 13 of Law No. 6698. However, if the transaction requires an additional cost, no fee will be charged other than the fee specified in the said Regulation.',
      methods:
        'You can submit your applications by filling out the Artı 3 Bilişim KVKK Data Subject Application Form and submitting it in person, through a notary, with your KEP address, or via the e-mail address you have previously notified to our company and which is registered in our system.',
      warningTitle: 'Important Notice',
      warningText:
        'The applicant will submit the application together with documents and documents proving their identity. In your applications, it is mandatory to write your name, surname and signature if the application is in writing, TR ID number, residence address or workplace address for notification, if any, the e-mail address for notification, telephone, if any, fax number and the subject of the request. If these documents cannot be verified, no positive response will be given.'
    },
    contact: {
      title: 'Contact Information',
      companyName: 'Artı 3 Bilişim ve Teknoloji Ürünleri Ticaret Limited Şirketi',
      dataControllerLabel: 'Data Controller',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      kepLabel: 'KEP Address',
      webLabel: 'Web',
      address: 'Mustafa Kemalpaşa Mah. Cami Sok. No:48/A\nAvcılar/İstanbul',
      phone: '+90 212 423 27 84',
      email: 'info@arti3.net',
      kep: 'arti3@hs01.kep.tr',
      web: 'www.arti3.net'
    }
  }
}

export const getKvkkContent = (locale: string): KvkkContent => {
  const lang = locale === 'en' ? 'en' : 'tr'
  return kvkkContent[lang]
}

