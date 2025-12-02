import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader'
import './App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Services = React.lazy(() => import('./pages/Services/Services'))
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail/ServiceDetail'))
const Products = React.lazy(() => import('./pages/Products/Products'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail/ProductDetail'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const About = React.lazy(() => import('./pages/About/About'))
const Demo = React.lazy(() => import('./pages/Demo/Demo'))
const Support = React.lazy(() => import('./pages/Support/Support'))
const DownloadableContent = React.lazy(() => import('./pages/DownloadableContent/DownloadableContent'))
const KVKK = React.lazy(() => import('./pages/KVKK/KVKK'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceType" element={<ServiceDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/support" element={<Support />} />
              <Route path="/downloadable-content" element={<DownloadableContent />} />
              <Route path="/kvkk" element={<KVKK />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App

