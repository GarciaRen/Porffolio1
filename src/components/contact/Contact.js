import React from "react";
import { messageMe } from "../../assets/index";
import Title from "../layouts/Title";
import { BiSend } from "react-icons/bi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="w-full min-h-screen font-titleFont pt-24 flex flex-col gap-3 pb-10"
    >
      <Title des={"contact"} title={"Contact with me"} />
      <div className="flex grow w-full">
        <div className="basis-2/5 px-10">
          <div className="h-full bg-bodyColor shadow-shadowOne rounded-xl">
            <div className="p-6 flex justify-center items-center">
              <img
                src={messageMe}
                alt="messageMe"
                className="h-[200px] w-full rounded-lg"
              />
            </div>
            <div className=" px-6 mt-2 flex flex-col gap-4 text-gray-400">
              <h1 className="font-bold text-2xl text-white">Thomas Shelby</h1>
              <h3 className="text-md font-medium">MERN Stack Developer</h3>
              <p className="">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <h3>
                Phone: <span className="text-white">+939 8836287</span>
              </h3>
              <h3>
                Email:{" "}
                <span className="text-white">rensantos.garcia@gmail.com</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="basis-3/5 px-10">
          <div className="h-full bg-bodyColor shadow-shadowOne rounded-xl p-8 text-xl uppercase text-gray-400">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label>Name</label>
              <input className="contactInput" type="text" />
              <label>Email</label>
              <input className="contactInput" type="text" />
              <label>Message</label>
              <textarea className="contactTextArea" cols={30} rows={8} />
              <button className="w-full h-12 mt-6 bg-[#141518] rounded-lg text-lg text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent flex justify-center items-center gap-2">
                Send Message{" "}
                <span>
                  <BiSend size={25} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
