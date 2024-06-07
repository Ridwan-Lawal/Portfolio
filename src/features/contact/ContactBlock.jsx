import ContactForm from "./ContactForm";

function ContactBlock() {
  return (
    <div
      id='contact'
      className="mt-32  flex flex-col md:flex-row  gap-8 md:gap-12  md:max-w-[1150px] mx-auto "
    >
      <div className="space-y-2 mt-24 md:space-y-4">
        <h2 className="text-white text-[29px] font-semibold md:text-[49px] leading-[50px]">
          Let&apos;s work together
        </h2>
        <p className="text-gray-200 md:text-xl">
          I&apos;d love to hear about what you&apos;re working on and how i
          could help.{" "}
        </p>
      </div>
      <div className=" md:w-[85%] lg:w-[70%]">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactBlock;
