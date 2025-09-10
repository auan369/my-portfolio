// pages/contact.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Import data and new components
import { portfolioData } from '../data/portfolioData';
import PageWrapper from '../components/layout/PageWrapper';
import Socials from '../components/ui/Socials';
import ContactForm from '../components/sections/ContactForm';

const ContactPage: NextPage = () => {
  const { owner, contact } = portfolioData;

  // Create the social links array here, at the page level
  const socialLinks = [
    { href: contact.github, icon: <FaGithub />, label: "GitHub" },
    { href: contact.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
    { href: contact.instagram, icon: <FaInstagram />, label: "Instagram" },
    { href: `mailto:${contact.email}`, icon: <FaEnvelope />, label: "Email" },
  ];

  return (
    <>
      <Head>
        <title>Contact | {owner.name}</title>
        <meta name="description" content="Get in touch with me for project inquiries or to connect on social media." />
      </Head>

      <motion.section
        id="contact"
        className="w-full bg-[#f0f4f8] text-[#333] font-sans py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <PageWrapper>
          <h1 className="text-4xl font-semibold text-center text-[#2d2d2d] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-center text-[#555] max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to connect? Send me a message or find me on social media.
          </p>

          {/* Use the new ContactForm component */}
          <ContactForm />

          {/* Divider and title for the Socials section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
              Or Find Me Here
            </h2>
            {/* Use the new Socials component and pass the links as a prop */}
            <Socials links={socialLinks} />
          </div>
        </PageWrapper>
      </motion.section>
    </>
  );
};

export default ContactPage;