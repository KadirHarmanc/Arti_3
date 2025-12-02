import React from 'react'
import { Helmet } from 'react-helmet-async'
import './DownloadableContent.css'

const contractFiles = [
  {
    title: 'Bakım Sözleşmesi - Kurum',
    description: 'Kurumsal altyapı bakım hizmeti kapsamı, taraf yükümlülükleri ve servis seviyeleri.',
    filename: 'Bakım Sözleşmesi - Kurum - Yeni.docx'
  },
  {
    title: 'Ek-1 Mevcut Cihaz Listesi',
    description: 'Sözleşme kapsamına dahil edilen mevcut cihaz ve varlıkların ayrıntılı listesi.',
    filename: 'Ek 1 - Sözleşme Kapsamına Giren Mevcut Cihazlar Listesi.docx'
  },
  {
    title: 'Ek-3 İletişim Bilgileri',
    description: 'Artı 3 Bilişim proje ve destek süreçlerinde kullanılacak resmi iletişim kanalları.',
    filename: 'Ek 3 - Artı 3 Bilişim İletişim Bilgileri.docx'
  },
  {
    title: 'Ek-4 Satın Alma Koşulları',
    description: 'Satın alma genel teklif koşulları ve tedarik sözleşmesi hükümleri.',
    filename: 'Ek 4 - Satın Alma Genel Teklif Koşulları ve Tedarik Sözleşmesi.docx'
  },
  {
    title: 'Ek-5 Gizlilik Sözleşmesi',
    description: 'Taraflar arasında paylaşılan gizli bilgilerin korunmasına ilişkin hükümler.',
    filename: 'Ek 5 - Gizlilik Sözleşmesi.docx'
  }
]

const buildFilePath = (name: string) => encodeURI(`/Downloads/${name}`)

const DownloadableContent: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>İndirilebilir Dokümanlar | Arti 3 Bilişim</title>
        <meta name="description" content="Artı 3 Bilişim kurumsal dokümanlarını indirin." />
        <link rel="canonical" href={`${window.location.origin}/downloadable-content`} />
      </Helmet>

      <div className="downloads-page">
        <header className="downloads-header">
          <h1>Kurumsal Belgeler</h1>
          <p>Hizmet süreçlerimizde talep edilen temel dokümanları buradan indirebilirsiniz.</p>
        </header>

        <section className="downloads-list">
          {contractFiles.map(doc => (
            <article key={doc.title} className="downloads-card">
              <div>
                <h2>{doc.title}</h2>
                <p>{doc.description}</p>
              </div>
              <a href={buildFilePath(doc.filename)} download className="downloads-link">
                İndir
              </a>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default DownloadableContent

