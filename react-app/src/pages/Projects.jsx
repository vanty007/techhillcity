import { Box } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import PortfolioGallery from '../components/sections/PortfolioGallery'

const Projects = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects' },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="Our Projects" breadcrumbs={breadcrumbs} />
      <PortfolioGallery />
      <Footer />
    </Box>
  )
}

export default Projects

