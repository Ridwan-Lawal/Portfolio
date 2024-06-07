import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addContact } from "../services/apiContact";

export function useAddContact() {
  const { isLoading: isSubmitting, mutate: createContact } = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      toast.success("Message successfully sent!");
    },
    onError: () => {
      toast.error("Message couldn't go through!");
    },
  });

  return { isSubmitting, createContact };
}
