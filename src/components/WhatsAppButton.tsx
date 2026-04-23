// Floating WhatsApp CTA. Replace the phone number with the real one.
const PHONE = "910000000000"; // country code + number, no +
const MESSAGE = "Hi Eddy Power Cell, I'd like to enquire about your batteries.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 4C9.39 4 4 9.39 4 16.01c0 2.12.55 4.19 1.6 6.01L4 28l6.18-1.62a11.97 11.97 0 0 0 5.84 1.49h.01c6.62 0 12.01-5.39 12.01-12.01S22.65 4 16.02 4zm0 21.85h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.67.96.98-3.58-.23-.37a9.82 9.82 0 0 1-1.5-5.27c0-5.43 4.42-9.84 9.85-9.84 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.96c-.01 5.43-4.42 9.83-9.85 9.83z"/>
      </svg>
    </a>
  );
}
