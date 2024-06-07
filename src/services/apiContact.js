export async function addContact(newContact) {
  const response = await fetch("https://formspree.io/f/mayrgkqa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newContact),
  });

  return response;
}
