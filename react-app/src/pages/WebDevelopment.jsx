import { Box } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import ServiceHero from '../components/sections/ServiceHero'
import ServiceOfferings from '../components/sections/ServiceOfferings'
import { Code2, Brain, Sparkles, Laptop, Monitor, Award } from 'lucide-react'
import serviceImage from '../assets/images/pic1-service1.png'

const WebDevelopment = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Web Development' },
  ]

  const technologies = [
    {
      number: '01',
      title: 'Java Development',
      description: "We're committed to building sustainable and high-quality Java solutions.",
    },
    {
      number: '02',
      title: 'PHP Development',
      description: "We're committed to building sustainable and high-quality PHP solutions.",
    },
    {
      number: '03',
      title: 'C++ Development',
      description: "We're committed to building sustainable and high-quality C++ solutions.",
    },
    {
      number: '04',
      title: '.NET Development',
      description: "We're committed to building sustainable and high-quality Qt solutions.",
    },
  ]

  const offerings = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Support and Evolution',
    },
    {
      icon: Sparkles,
      title: 'Artificial Intelligence',
      description: 'Support and Evolution',
    },
    {
      icon: Laptop,
      title: 'Augmented Reality',
      description: 'Support and Evolution',
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
    },
    {
      icon: Monitor,
      title: 'QA & Testing',
      description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
    },
    {
      icon: Award,
      title: 'UI/UX Design',
      description: 'Build the product you need on time with an experienced team that uses a clear and effective design process.',
    },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="Web Development" breadcrumbs={breadcrumbs} />
      <ServiceHero
        image={serviceImage}
        subtitle="About Service"
        title={
          <>
            We Provide Best <br />
            Web Development
          </>
        }
        technologies={technologies}
      />
      <ServiceOfferings
        subtitle="Our Services"
        title={
          <>
            We Offer a Wide <br />
            Variety of IT Services
          </>
        }
        offerings={offerings}
      />
      <Footer />
    </Box>
  )
}

export default WebDevelopment

