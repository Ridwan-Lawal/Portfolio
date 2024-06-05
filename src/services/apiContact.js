// create an async function and copy the code to add data to the api from the app, then the use the useMutation to add the data from the form to the api

import supabase from "./Supabase";

export async function addContact(newContact) {
  console.log(newContact);
  const { data, error } = await supabase.from("message").insert([newContact]);

  if (error) {
    console.error(error);
    throw new Error("Could not send message!");
  }

  return data;
}
