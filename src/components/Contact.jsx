import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/60 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-700/50
            bg-slate-900/35
            px-6
            py-8
            text-center
            shadow-lg
            shadow-slate-950/10
            backdrop-blur-md
            sm:px-8
            sm:py-10
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-20
              bg-gradient-to-b
              from-sky-500/[0.05]
              to-transparent
            "
          />

          <div className="relative z-10">
            <p className="text-sm text-slate-400 sm:text-base">
              Built, broken, debugged, and rebuilt.
            </p>

            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              React · Tailwind CSS · Framer Motion
            </p>

            <p className="mt-5 text-xs text-slate-600">
              © {new Date().getFullYear()} Achyuth S.S
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;