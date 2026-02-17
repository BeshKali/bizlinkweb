import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { name: "Print Media & Digital Marketing", link: "/services/print-media-digital" },
    { name: "Experiential Public Relations", link: "/services/experiential-pr" },
    { name: "Outdoor Visibility Solutions", link: "/services/outdoor-visibility" },
    { name: "Brand Identity Enhancement", link: "/services/brand-identity" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black mb-10 text-center">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Link
            key={i}
            to={s.link}
            className="p-8 rounded-3xl bg-bizYellow text-bizBlue font-black text-xl shadow-xl hover:scale-105 transition"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
