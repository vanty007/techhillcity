import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/ui/PageHeader";
import ServiceOfferings from "../components/sections/ServiceOfferings";
import {
  Code2,
  TestTube,
  Smartphone,
  FileText,
  Monitor,
  Award,
} from "lucide-react";

const ITServices = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "IT Services" },
  ];

  const offerings = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description:
        "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    },
    {
      icon: FileText,
      title: "IT Consultancy",
      description:
        "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    },
    {
      icon: Award,
      title: "Dedicated Team",
      description:
        "Over the past decade, our customers succeeded by leveraging Intellectsoft's process of building, motivating.",
    },
  ];

  return (
    <Box>
      <Navbar />
      <PageHeader title="IT Services" breadcrumbs={breadcrumbs} />
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
  );
};

export default ITServices;
