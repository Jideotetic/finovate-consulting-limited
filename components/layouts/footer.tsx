import Image from "next/image";
import * as motion from "motion/react-client";
import SectionContainer from "../section-container";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 bg-[#4A4A4A]"
      >
        <SectionContainer>
          <div>
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="lg:pr-8"
            >
              <Image
                className="h-auto w-15"
                src="/finovate.jpeg"
                alt="Company logo"
                width={68}
                height={49}
                priority
              />

              <p className="text-base leading-relaxed text-gray-400 mt-7">
                Empowering your financial strategies
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="https://www.linkedin.com/company/consult-finovate"
                    title="Linkedin"
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#008080] focus:bg-[#008080]"
                  >
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/consult_finovate/"
                    title="Instagram"
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#008080] focus:bg-[#008080]"
                  >
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/consultfinovate"
                    title="X"
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#008080] focus:bg-[#008080]"
                  >
                    <FaXTwitter />
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:finovateconsults@gmail.com"
                    title="Send a mail"
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#008080] focus:bg-[#008080]"
                  >
                    <CiMail />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: -99, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <hr className="mt-16 mb-10 border-gray-500" />
          </motion.div>

          <motion.div
            initial={{ x: -99, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <p className="text-sm text-center text-gray-400">
              © {currentYear} FINOVATE Consulting Limited. All rights reserved.
            </p>
          </motion.div>
        </SectionContainer>
      </motion.div>
    </footer>
  );
}
