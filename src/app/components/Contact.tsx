import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ContactCard = (props: {
  image: string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="p-4 bg-fuchsia-100 shadow-lg rounded-xl flex items-center justify-between w-full gap-4 hover:bg-fuchsia-200 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-gray-800">
            {props.title}
          </h3>
          <p className="text-sm text-gray-600 font-display">
            {props.description}
          </p>
        </div>
      </div>
      <ArrowUpRight
        className="text-gray-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
        size={20}
      />
    </Link>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-6 md:p-12 bg-slate-800 rounded-lg shadow-md text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-8 font-sans">
        Me contacter
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <ContactCard
          url="https://www.instagram.com/nininails.75/"
          image="./icons/instagram.png"
          title="Instagram"
          description="nininails.75"
        />
        <ContactCard
          url="mailto:nininails75@gmail.com"
          image="./icons/mail.png"
          title="Email"
          description="nininails75@gmail.com"
        />
      </div>
    </section>
  );
};

export default Contact;
