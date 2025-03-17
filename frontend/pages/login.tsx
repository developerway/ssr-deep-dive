import { useEffect } from "react";

import { ProductLogo } from "@fe/icons/logos/product-logo";
import { EmailSignIn } from "@fe/patterns/email-sign-in";
import { SocialSignIn } from "@fe/patterns/social-sign-in";
import { Link } from "@fe/utils/link";
import { updateTitle } from "@fe/utils/update-title";

export const LoginPage = () => {
  useEffect(() => {
    updateTitle("Study project: Login");
  }, []);

  return (
    <div className="blink-text-primary flex flex-col w-full h-screen items-center justify-center blink-surface-background overflow-auto">
      <div className="w-full max-h-full py-6 sm:py-8 overflow-auto flex flex-col items-center">
        <div className="w-full sm:w-[52rem] sm:max-w-[90%] flex flex-col gap-[3.75rem] px-10 items-center">
          <div className="flex flex-col gap-5 sm:gap-6 items-center">
            <Link href="/" className="flex items-center justify-center">
              <ProductLogo />
            </Link>
            <h1 className="font-blink-title text-5xl italic text-center">
              <Link href="/">Welcome to Product!</Link>
            </h1>
            <p className="text-sm leading-none blink-text-subdued">
              Don’t have an account?{" "}
              <a
                href="#"
                className="blink-text-primary underline hover:no-underline"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="flex w-full justify-between flex-col md:flex-row">
            <div className="w-full md:max-w-72 flex-grow">
              <EmailSignIn />
            </div>
            <div className="text-sm uppercase blink-text-subdued leading-none md:h-full flex flex-row md:flex-col gap-6 justify-center items-center md:min-h-72 md:min-w-16 my-4 md:my-0">
              <div className="flex-grow border-t md:border-t-0 md:border-l blink-border-container-white"></div>
              or
              <div className="flex-grow border-t md:border-t-0 md:border-l blink-border-container-white"></div>
            </div>
            <div className="w-full md:max-w-72 flex-grow md:py-5">
              <SocialSignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
