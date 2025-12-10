import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-2">
          Get in touch
        </h2>
        <div className="mb-8 font-[500] text-[16px] text-smallTextColor">
            <p className="mb-2"><i class="ri-mail-line drop-shadow-xl text-primaryColor"></i> nzumahezron@gmail.com</p>
            <p className="mb-2"><i class="ri-phone-line drop-shadow-xl text-primaryColor"></i> +254 745758857</p>
            <p><i class="ri-map-pin-line drop-shadow-xl text-primaryColor"></i> Maasai Lodge, Rongai</p>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://maps.google.com/maps?q=Maasai+Lodge+Rongai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-[#e6f0ff]
            px-4 lg:px-8 py-8"
          >
            <form action="" className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              text-center hover:bg-headingColor ease-linear transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
