import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductRow from "../components/ProductRow";
import { waLink, buildOrderMessage } from "../lib/wa"; // [WA] import helper

const best = [
  { name: "1. Es Jeruk Murni", price: "Rp20.000" },
  { name: "2. Jeruk Sundae", price: "Rp13.000" },
  { name: "3. Jeruk Hangat Madu", price: "Rp25.000" },
];

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  // [WA] siapkan pesan WA untuk CTA
  const waCta = waLink(
    buildOrderMessage({
      name: "Es Jeruk Murni",
      qty: 1,
      note: "Boleh rekomendasikan menu best seller ya",
    })
  );

  return (
    <>
      {/* HERO */}
      <section className="container py-6 sm:py-12 text-center">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fade}
          className="title-fluid font-extrabold mb-4"
        >
          LOAFFOOD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-rose-600">
            ES JERUK
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fade}
          className="text-slate-700/90 dark:text-slate-300 max-w-prose mx-auto mb-6"
        >
          Berbagai produk varian Jeruk yang tidak akan kalian dapatkan di tempat lain.
        </motion.p>

        <div className="flex justify-center gap-3">
          {/* (tidak direvisi) */}
          <Link to="/menu" className="btn-ghost">
            Lihat Menu
          </Link>

          {/* [WA] CTA langsung ke WhatsApp dengan pesan prefill */}
          <a
            href={waCta}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      {/* BEST SELLER */}
      <section className="container pb-10 sm:pb-12">
        <h2 className="text-lg font-bold mb-3">TOP 3 Paling Laris</h2>
        <div className="surface-quiet rounded-2xl">
          <ul className="divide-hairline">
            {best.map((it) => (
              <ProductRow key={it.name} {...it} />
            ))}
          </ul>
        </div>
      </section>

      {/* DESKRIPSI & BAHAN PREMIUM */}
      <section className="container pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Kenapa Pilih Kami?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Semua minuman dibuat dengan sepenuh hati serta bahan premium pilihan, agar rasa tetap
            konsisten dan segar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="surface p-6 text-center"
          >
            <span className="text-4xl">🍊</span>
            <h3 className="mt-3 font-bold">Jeruk Premium</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Jeruk pilihan asli Indonesia, dukung produk
              lokal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="surface p-6 text-center"
          >
            <span className="text-4xl">🧊</span>
            <h3 className="mt-3 font-bold">Es Batu Berkualitas</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Es batu diproduksi sendiri, dan dijaga kualitasnya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="surface p-6 text-center"
          >
            <span className="text-4xl">🍚</span>
            <h3 className="mt-3 font-bold">Gula Asli</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Gula murni, tanpa pemanis buatan, manis alami.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
