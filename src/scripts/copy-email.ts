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
      .closest("section")
      ?.querySelector<HTMLElement>("[data-copy-status]");

    const label = button.querySelector<HTMLElement>("[data-copy-label]");

    if (!email) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (!legacyCopy(email)) {
        throw new Error("Clipboard unavailable");
      }

      if (label) label.textContent = "Copied";
      button.dataset.state = "copied";
      if (status) status.textContent = "Email copied to clipboard.";
    } catch {
      if (status) {
        status.textContent = "Copy failed — select the email address instead.";
      }
    }

    window.setTimeout(() => {
      if (label) label.textContent = "Copy email";
      delete button.dataset.state;
      if (status) status.textContent = "";
    }, 2600);
  });
});
