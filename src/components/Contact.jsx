import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="my-10 text-center text-3xl"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className= "text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-block cursor-pointer"
          >
            Get in Touch
          </a>
        </motion.h1>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
