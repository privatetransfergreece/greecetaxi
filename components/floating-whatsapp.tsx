import type { Locale } from "@/lib/i18n/config"
import { siteConfig } from "@/lib/site-config"

const ariaLabel: Record<Locale, string> = {
  en: "Chat with us on WhatsApp",
  el: "Συνομιλήστε μαζί μας στο WhatsApp",
}

function FloatingWhatsApp({ locale }: { locale: Locale }) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel[locale]}
      className="fixed right-4 bottom-20 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#20BD5A] lg:right-6 lg:bottom-6"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-7"
        fill="currentColor"
      >
        <path d="M16.004 0C7.164 0 0 7.163 0 16.001c0 2.822.738 5.573 2.14 7.996L0 32l8.2-2.14a15.94 15.94 0 0 0 7.804 2.036h.007c8.838 0 16.001-7.163 16.001-16.001C31.997 7.163 24.838.005 16.004 0Zm0 29.288a13.24 13.24 0 0 1-6.752-1.849l-.484-.288-4.868 1.271 1.298-4.744-.315-.487a13.24 13.24 0 0 1-2.028-7.19c0-7.316 5.953-13.269 13.273-13.269 3.545 0 6.877 1.381 9.383 3.888a13.176 13.176 0 0 1 3.883 9.386c-.004 7.316-5.957 13.282-13.29 13.282Zm7.278-9.94c-.399-.2-2.36-1.166-2.726-1.298-.365-.133-.63-.2-.896.2-.266.398-1.029 1.298-1.262 1.564-.232.266-.464.3-.863.1-.399-.2-1.685-.62-3.209-1.98-1.186-1.058-1.988-2.365-2.22-2.764-.233-.398-.025-.613.175-.812.18-.179.4-.465.599-.698.2-.232.266-.398.4-.664.132-.266.066-.498-.034-.697-.1-.2-.896-2.16-1.228-2.958-.323-.777-.652-.671-.896-.684-.232-.011-.498-.014-.764-.014-.266 0-.697.1-1.062.498-.365.398-1.396 1.365-1.396 3.328s1.429 3.858 1.628 4.124c.2.266 2.813 4.298 6.818 6.026.953.411 1.696.657 2.276.84.956.304 1.827.261 2.515.158.767-.114 2.36-.965 2.693-1.897.332-.931.332-1.73.232-1.896-.099-.166-.365-.266-.764-.465Z" />
      </svg>
    </a>
  )
}

export { FloatingWhatsApp }
