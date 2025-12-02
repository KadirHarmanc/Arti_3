export interface ServiceSectionContent {
  title: string
  description: string[]
  images: string[]
  imageAlts: string[]
  linkTo: string
  linkText: string
  reverse?: boolean
  showHeader?: boolean
  headerTitle?: string
  sectionClass?: string
}

export const getServiceSections = (locale: 'tr' | 'en'): ServiceSectionContent[] => [
  {
    title: locale === 'tr' ? 'Zayıf Akım Sistemleri' : 'Low Current Systems',
    description: [
      locale === 'tr'
        ? 'Güvenlik sistemleri, erişim kontrolü, kamera sistemleri ve otomasyon çözümleri ile işletmenizin güvenliğini ve verimliliğini artırıyoruz. Yangın algılama ve ihbar sistemleri, interkom ve telefon santrali kurulumları, projeksiyon ve ses sistemleri gibi kapsamlı zayıf akım hizmetleri sunuyoruz.'
        : 'We increase your business security and efficiency with security systems, access control, camera systems and automation solutions. We provide comprehensive low current services such as fire detection and alarm systems, intercom and telephone exchange installations, projection and sound systems.',
      locale === 'tr'
        ? 'Profesyonel ekibimiz, modern teknoloji ve kaliteli ekipmanlar kullanarak güvenlik kamerası kurulumu, erişim kontrol sistemleri, yangın alarm sistemleri ve veri merkezi altyapı çözümleri sağlıyoruz. Tüm projelerimizde müşteri memnuniyetini ön planda tutarak, güvenilir ve sürdürülebilir sistemler kuruyoruz.'
        : 'Our professional team provides security camera installation, access control systems, fire alarm systems and data center infrastructure solutions using modern technology and quality equipment. We install reliable and sustainable systems, keeping customer satisfaction at the forefront in all our projects.'
    ],
    images: [
      '/photos/guvenlik_odasi.jpg',
      '/photos/yangin_alarmi.jpg',
      '/photos/projeksiyon_sinema_odasi.jpg',
      '/photos/server_cabinet.jpg'
    ],
    imageAlts: [
      locale === 'tr' ? 'Güvenlik odası kurulumu - Artı 3 Bilişim' : 'Security room installation - Artı 3 Bilişim',
      locale === 'tr' ? 'Yangın alarm sistemi - Artı 3 Bilişim' : 'Fire alarm system - Artı 3 Bilişim',
      locale === 'tr' ? 'Projeksiyon ve sinema odası - Artı 3 Bilişim' : 'Projection and cinema room - Artı 3 Bilişim',
      locale === 'tr' ? 'Server kabini kurulumu - Artı 3 Bilişim' : 'Server cabinet installation - Artı 3 Bilişim'
    ],
    linkTo: '/services/weak-current',
    linkText: locale === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More',
    reverse: false,
    showHeader: true,
    headerTitle: locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services',
    sectionClass: 'home-service-section-1'
  },
  {
    title: locale === 'tr' ? 'Elektrik Proje Taahhüt' : 'Electrical Project Contracting',
    description: [
      locale === 'tr'
        ? 'Elektrik projeleri, tesisat kurulumu, aydınlatma sistemleri ve elektrik altyapı çözümleri ile profesyonel hizmet sunuyoruz. Yüksek gerilim sistemleri, güç dağıtım panoları, aydınlatma projeleri ve elektrik danışmanlık hizmetleri konularında uzman ekibimizle hizmet veriyoruz.'
        : 'We provide professional services with electrical projects, installation, lighting systems and electrical infrastructure solutions. We serve with our expert team in high voltage systems, power distribution panels, lighting projects and electrical consulting services.',
      locale === 'tr'
        ? 'Modern elektrik teknolojileri ve kaliteli malzemeler kullanarak elektrik panel kurulumu, aydınlatma sistemleri, güç dağıtım çözümleri ve elektrik altyapı projeleri gerçekleştiriyoruz. Tüm elektrik işlerinizde güvenlik standartlarına uygun, verimli ve sürdürülebilir çözümler sunuyoruz.'
        : 'We carry out electrical panel installation, lighting systems, power distribution solutions and electrical infrastructure projects using modern electrical technologies and quality materials. We provide safe, efficient and sustainable solutions that comply with safety standards in all your electrical work.'
    ],
    images: [
      '/photos/elektrik_panel_1.jpg',
      '/photos/aydinlatma.jpg',
      '/photos/Elektrik_panosu.jpg',
      '/photos/Mutfak_aydinlatma.jpg'
    ],
    imageAlts: [
      locale === 'tr' ? 'Elektrik panel kurulumu - Artı 3 Bilişim' : 'Electrical panel installation - Artı 3 Bilişim',
      locale === 'tr' ? 'Aydınlatma sistemi - Artı 3 Bilişim' : 'Lighting system - Artı 3 Bilişim',
      locale === 'tr' ? 'Elektrik panosu - Artı 3 Bilişim' : 'Electrical panel - Artı 3 Bilişim',
      locale === 'tr' ? 'Elektrik aydınlatma kurulumu - Artı 3 Bilişim' : 'Electrical lighting installation - Artı 3 Bilişim'
    ],
    linkTo: '/services/electrical',
    linkText: locale === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More',
    reverse: true,
    showHeader: false,
    headerTitle: '',
    sectionClass: 'home-service-section-2'
  },
  {
    title: locale === 'tr' ? 'Bilişim Hizmetleri' : 'IT Services',
    description: [
      locale === 'tr'
        ? 'IT altyapı kurulumu, network çözümleri, sunucu yönetimi ve bilişim danışmanlığı ile dijital dönüşümünüze destek oluyoruz. Kurumsal IT altyapısı, bulut çözümleri, yazılım geliştirme ve teknik destek hizmetleri sunuyoruz.'
        : 'We support your digital transformation with IT infrastructure installation, network solutions, server management and IT consulting. We provide corporate IT infrastructure, cloud solutions, software development and technical support services.',
      locale === 'tr'
        ? 'Profesyonel IT ekibimiz, modern teknoloji ve güvenilir çözümler kullanarak sunucu kurulumu, network altyapısı, siber güvenlik ve bulut hizmetleri sağlıyoruz. Uzaktan destek, yerinde destek, sistem bakımı ve acil müdahale hizmetleri ile işletmenizin IT ihtiyaçlarını karşılıyoruz.'
        : 'Our professional IT team provides server installation, network infrastructure, cybersecurity and cloud services using modern technology and reliable solutions. We meet your business IT needs with remote support, on-site support, system maintenance and emergency response services.'
    ],
    images: [
      '/photos/Dell_servers.jpg',
      '/photos/server_tamir.jpg',
      '/photos/servers_cables.jpg',
      '/photos/bilgisayar_odasi.jpg'
    ],
    imageAlts: [
      locale === 'tr' ? 'Sunucu kurulumu - Artı 3 Bilişim' : 'Server installation - Artı 3 Bilişim',
      locale === 'tr' ? 'Server tamiri - Artı 3 Bilişim' : 'Server repair - Artı 3 Bilişim',
      locale === 'tr' ? 'Server kablolama - Artı 3 Bilişim' : 'Server cabling - Artı 3 Bilişim',
      locale === 'tr' ? 'Bilgisayar odası kurulumu - Artı 3 Bilişim' : 'Computer room installation - Artı 3 Bilişim'
    ],
    linkTo: '/services/it',
    linkText: locale === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More',
    reverse: false,
    showHeader: false,
    headerTitle: '',
    sectionClass: 'home-service-section-3'
  },
  {
    title: locale === 'tr' ? 'Taşeron Hizmetler' : 'Subcontracting Services',
    description: [
      locale === 'tr'
        ? 'Profesyonel taşeron hizmetleri, proje yönetimi ve teknik destek ile işletmenizin ihtiyaçlarına uygun çözümler sunuyoruz. Tesisat işleri, elektrik kablolama, montaj hizmetleri ve genel taşeron hizmetleri konularında deneyimli ekibimizle hizmet veriyoruz.'
        : 'We provide solutions tailored to your business needs with professional subcontracting services, project management and technical support. We serve with our experienced team in installation work, electrical cabling, assembly services and general subcontracting services.',
      locale === 'tr'
        ? 'Kaliteli işçilik ve zamanında teslimat prensibiyle tesisat kurulumu, elektrik kablolama, montaj işleri ve genel taşeron hizmetleri gerçekleştiriyoruz. Proje yönetimi, teknik danışmanlık ve sürekli destek hizmetleri ile müşterilerimizin projelerini başarıyla tamamlıyoruz.'
        : 'We carry out installation work, electrical cabling, assembly work and general subcontracting services with quality workmanship and on-time delivery principle. We successfully complete our customers projects with project management, technical consulting and continuous support services.'
    ],
    images: [
      '/photos/tesisatci.jpg',
      '/photos/ev_elektrik_kablolari.jpg',
      '/photos/electricity_cabin_worker.jpg',
      '/photos/Halatli_isci.jpg'
    ],
    imageAlts: [
      locale === 'tr' ? 'Tesisat kurulumu - Artı 3 Bilişim' : 'Installation work - Artı 3 Bilişim',
      locale === 'tr' ? 'Elektrik kablolama - Artı 3 Bilişim' : 'Electrical cabling - Artı 3 Bilişim',
      locale === 'tr' ? 'Taşeron hizmetler - Artı 3 Bilişim' : 'Subcontracting services - Artı 3 Bilişim',
      locale === 'tr' ? 'Taşeron hizmetler - Artı 3 Bilişim' : 'Subcontracting services - Artı 3 Bilişim'
    ],
    linkTo: '/services/subcontracting',
    linkText: locale === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More',
    reverse: true,
    showHeader: false,
    headerTitle: '',
    sectionClass: 'home-service-section-4'
  }
]

