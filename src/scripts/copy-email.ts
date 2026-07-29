const buttons = document.querySelectorAll<HTMLButtonElement>("[data-copy-email]");

const legacyCopy = (value: string) => {
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const { execCommand } = document as unknown as {
    execCommand: (command: string) => boolean;
  };
  const copied = execCommand.call(document, "copy");
  field.remove();
  return copied;
};

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.email;
    const status = button
      .closest(".reveal-wrapper")
      ?.querySelector<HTMLElement>("[data-copy-status]");

    if (!email) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (!legacyCopy(email)) {
        throw new Error("Clipboard unavailable");
      }

      button.textContent = "Copied";
      if (status) status.textContent = "Email copied to clipboard.";
    } catch {
      if (status) {
        status.textContent = "Copy failed — select the email address instead.";
      }
    }

    window.setTimeout(() => {
      button.textContent = "Copy email";
      if (status) status.textContent = "";
    }, 2600);
  });
});
