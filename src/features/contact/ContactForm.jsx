import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormInput from "./FormInput";
import { useMutation } from "@tanstack/react-query";
import { addContact } from "../../services/apiContact";
import toast from "react-hot-toast";

function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  // create a dummy table in supabase

  const { isLoading: isSending, mutate } = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      toast.success("Message sent!");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className=" space-y-10 mt-2"
    >
      <FormInput label="Name" error={errors?.name?.message}>
        <input
          type="text"
          name="name"
          id="name"
          className="duration-500"
          placeholder="Please enter your name"
          {...register("name", {
            required: "Your name is required!",
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
          {...register("email", {
            required: "Your email address is required!",
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
          {...register("subject", {
            required: "Please add a subject!",
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
          {...register("message", {
            required: "Kindly leave a message!",
          })}
        />
      </FormInput>

      <Button disabled={isSending}>
        {isSending ? "Sending Message..." : "Send Message"}{" "}
      </Button>
    </form>
  );
}

export default ContactForm;
