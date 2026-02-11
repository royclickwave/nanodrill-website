export const triggerLeadModal = (type: "quote" | "download") => {
    const event = new CustomEvent("open-lead-modal", { detail: { type } });
    window.dispatchEvent(event);
};
