import Button from "../../ui/Button";
import FormInput from "./FormInput";

import { useForm } from "react-hook-form";
import { useAddContact } from "../../hooks/useAddContact";

function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, createContact } = useAddContact();

  const { errors } = formState;

  async function onSubmit(data) {
    createContact(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" space-y-10 mt-2 contact-form"
    >
      <FormInput label="Name" error={errors?.name?.message}>
        <input
          type="text"
          name="name"
          id="name"
          className="duration-500"
          placeholder="Please enter your name"
          disabled={isSubmitting}
          {...register("name", {
            required: "Kindly fill in your name",
          })}
        />
      </FormInput>
      <FormInput label="Email" error={errors?.email?.message}>
        <input
          type="text"
          name="email"
          id="email"
          className="duration-500"
          placeholder="Please enter your email"
          disabled={isSubmitting}
          {...register("email", {
            required: "Kindly fill in your email",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Kindly input a valid email address!",
            },
          })}
        />
      </FormInput>
      <FormInput label="Subject" error={errors?.subject?.message}>
        <input
          type="text"
          name="subject"
          id="subject"
          className="duration-500"
          placeholder="Please enter your subject"
          disabled={isSubmitting}
          {...register("subject", {
            required: "Your message needs a subject",
          })}
        />
      </FormInput>

      <FormInput label="Message" error={errors?.message?.message}>
        <textarea
          type="text"
          name="message"
          id="message"
          rows="6"
          className="duration-500 w-full placeholder:text-sm "
          placeholder="Please enter your subject"
          disabled={isSubmitting}
          {...register("message", {
            required: "Kindly leave a message",
          })}
        />
      </FormInput>

      <Button disabled={isSubmitting}>
        {isSubmitting ? "Sending Message..." : "Send Message"}{" "}
      </Button>
    </form>
  );
}

export default ContactForm;
