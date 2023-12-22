import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message successfully sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="contact-container m-2 scroll-mt-32">
      <h1 className="text-3xl md:text-4xl text-main underline decoration-2 decoration-accent1 mb-4 text-center font-bold">
        Contact
      </h1>
      <div className="mt-6 w-11/12 md:w-3/4 m-auto flex flex-col justify-center">
        <p className="text-lg md:text-xl text-main text-center m-2">
          If you are interested in hiring me or would like to learn more about
          me, please use the form below to reach out!
        </p>
        <form
          name="contact"
          className="my-6 bg-main px-8 py-6 rounded-xl shadow-lg"
          // eslint-disable-next-line react/no-unknown-property
          netlify
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-start mb-6 gap-y-3">
            <label htmlFor="name" className="text-accent3 text-2xl font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-accent2 rounded-lg h-12 focus:border focus:border-4 focus:border-accent1 outline-none text-accent1 font-bold p-2 shadow focus:shadow-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mb-6 gap-y-3">
            <label htmlFor="email" className="text-accent3 text-2xl font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-accent2 rounded-lg h-12 focus:border focus:border-4 focus:border-accent1 outline-none text-accent1 font-bold p-2 shadow focus:shadow-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mb-6 gap-y-3">
            <label
              htmlFor="message"
              className="text-accent3 text-2xl font-bold"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              className="bg-accent2 rounded-lg h-64 focus:border focus:border-4 focus:border-accent1 outline-none text-accent1 font-bold p-2 shadow focus:shadow-lg"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="block m-auto text-center bg-accent1 transition duration-300 ease-in hover:-translate-y-1 hover:scale-105 p-4 text-accent3 font-bold text-lg rounded-xl w-1/3 border border-2 border-accent2 hover:bg-accent2 hover:text-main"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
