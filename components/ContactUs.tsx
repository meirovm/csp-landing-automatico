import React, { useState } from "react";
import Image from "next/image";
import Button from "./foundational/Button";
import Link from "./foundational/Link";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@automatico.kz?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-linear-gradient text-white" id="contactus">
      <div className="flex flex-1 flex-col px-4 py-8 md:flex-row md:justify-center md:items-center">
        {/* Left Section */}
        <div className="flex flex-1 justify-center sm:justify-end sm:pr-[14rem] pb-24 sm:pb-0">
          <div className="flex flex-col space-y-8 md:space-y-12 md:items-start items-center sm:items-start">
            <div className="space-y-10 text-center sm:text-left md:text-left">
              <h2 className="text-4xl font-bold leading-[1.25] md:text-7xl">
                Давай обсудим
              </h2>
              <p className="text-zinc-400">
                Аренда GPU юридическим лицам и физическим лицам
              </p>
            </div>
            <div className="space-y-4 text-center sm:text-left md:text-left">
              <h3 className="text-xl font-semibold">Email</h3>
              <p>info@automatico.kz</p>
            </div>
            <div className="space-y-4 text-center sm:text-left md:text-left">
              <h3 className="text-xl font-semibold">Socials</h3>
              <p>
                <Link
                  href="https://discord.gg/zPKKFjfK"
                  className="text-white underline"
                >
                  Discord
                </Link>
                <br/>
                <Link
                  href="https://wa.me/77066868101"
                  className="text-white underline"
                >
                  WhatsApp +7 706 686 8101
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 justify-center sm:justify-start sm:pl-24">
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm">Ваше имя</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#18181B] p-3 text-white placeholder-gray-400 focus:outline-none"
              />
              <h3 className="text-sm">Тема</h3>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#18181B] p-3 text-white placeholder-gray-400 focus:outline-none"
              />
              <h3 className="text-sm">Сообщение</h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-40 bg-[#18181B] p-3 text-white placeholder-gray-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="w-full rounded bg-[#4770DB] py-3 text-white transition-colors duration-300 hover:bg-[#003bb3]"
              >
                Get in touch
              </Button>
              <div className="mt-8 text-center text-gray-400">
                Powered by Automatico
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;