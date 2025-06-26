import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
    <footer className="flex flex-col items-center mt-20 text-center text-surface bg-black text-white w-full overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 pt-4">
        <div className="flex justify-center gap-2">
          <a
            href="https://wa.me/5511984316645"
            type="button"
            className="rounded-full bg-transparent p-2 sm:p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-azul dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
              <BsWhatsapp size="100%" color="currentColor" />
            </span>
          </a>
          <a
            href="https://www.instagram.com/danielftvn"
            type="button"
            className="rounded-full bg-transparent p-2 sm:p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-azul dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
              <BsInstagram size="100%" color="currentColor"/>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-vieira-novais-3a644a148"
            type="button"
            className="rounded-full bg-transparent p-2 sm:p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-azul dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
              <BsLinkedin size="100%" color="currentColor"/>
            </span>
          </a>

          <a
            href="https://github.com/FlyingHigh520741"
            type="button"
            className="rounded-full bg-transparent p-2 sm:p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-azul dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
              <BsGithub size="100%" color="currentColor"/>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full bg-black/5 p-4 text-center">
        <a href="https://github.com/FlyingHigh520741" className="text-xs sm:text-sm font-semibold">Desenvolvido por Daniel Vieira © 2024</a>
      </div>
    </footer>
    );
}

export default Footer;
