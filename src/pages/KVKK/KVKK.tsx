import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { getKvkkContent } from '../../data/kvkkContent'
import './KVKK.css'

const KVKK: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLocale = (i18n.language as 'tr' | 'en') || 'tr'
  const content = useMemo(() => getKvkkContent(currentLocale), [currentLocale])

  return (
    <>
      <Helmet>
        <title>{`${content.hero.title} | Arti 3 Bilişim`}</title>
        <meta name="description" content={content.dataController.intro1} />
        <link rel="canonical" href={`${window.location.origin}/kvkk`} />
        <html lang={currentLocale} />
      </Helmet>

      <article className="kvkk-document">
        <header className="kvkk-header">
          <p className="kvkk-law-number">{content.hero.lawNumber}</p>
          <h1>{content.hero.title}</h1>
        </header>

        <section className="kvkk-block">
          <h2>{content.dataController.title}</h2>
          <p className="kvkk-strong">{content.dataController.companyName}</p>
          <p>{content.dataController.intro1}</p>
          <p>{content.dataController.intro2}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.processedData.title}</h2>
          <p>{content.processedData.description}</p>

          <h3>{content.processedData.personalDataLabel}</h3>
          <ol className="kvkk-list">
            {content.personalDataCategories.map((category, index) => (
              <li key={`personal-${index}`}>
                <p className="kvkk-strong">{category.title}</p>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3>{content.processedData.specialDataLabel}</h3>
          <ol className="kvkk-list">
            {content.specialDataCategories.map((category, index) => (
              <li key={`special-${index}`}>
                <p className="kvkk-strong">{category.title}</p>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="kvkk-block">
          <h2>{content.processingPurposes.title}</h2>
          <p>{content.processingPurposes.description}</p>
          <ol className="kvkk-numbered">
            {content.processingPurposes.list.map((purpose, index) => (
              <li key={purpose}>
                <span className="kvkk-index">{index + 1}.</span>
                <span>{purpose}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="kvkk-block">
          <h2>{content.dataCollection.title}</h2>
          <p>{content.dataCollection.text1}</p>
          <p>{content.dataCollection.text2}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.dataSharingDomestic.title}</h2>
          <p>{content.dataSharingDomestic.description}</p>
          <ol className="kvkk-numbered">
            {content.dataSharingDomestic.list.map((purpose, index) => (
              <li key={purpose}>
                <span className="kvkk-index">{index + 1}.</span>
                <span>{purpose}</span>
              </li>
            ))}
          </ol>
          <p>{content.dataSharingDomestic.footerNote}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.dataSharingAbroad.title}</h2>
          <p>{content.dataSharingAbroad.text}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.rights.title}</h2>
          <p>{content.rights.intro}</p>
          <p>{content.rights.text}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.requests.title}</h2>
          <p>{content.requests.intro}</p>
          <p>{content.requests.methods}</p>
          <p className="kvkk-strong">{content.requests.warningTitle}</p>
          <p>{content.requests.warningText}</p>
        </section>

        <section className="kvkk-block">
          <h2>{content.contact.title}</h2>
          <p className="kvkk-strong">{content.contact.companyName}</p>
          <dl className="kvkk-contact-list">
            <div>
              <dt>{content.contact.dataControllerLabel}</dt>
              <dd>{content.contact.companyName}</dd>
            </div>
            <div>
              <dt>{content.contact.addressLabel}</dt>
              <dd>{content.contact.address}</dd>
            </div>
            <div>
              <dt>{content.contact.phoneLabel}</dt>
              <dd>{content.contact.phone}</dd>
            </div>
            <div>
              <dt>{content.contact.emailLabel}</dt>
              <dd>{content.contact.email}</dd>
            </div>
            <div>
              <dt>{content.contact.kepLabel}</dt>
              <dd>{content.contact.kep}</dd>
            </div>
            <div>
              <dt>{content.contact.webLabel}</dt>
              <dd>{content.contact.web}</dd>
            </div>
          </dl>
        </section>
      </article>
    </>
  )
}

export default KVKK

