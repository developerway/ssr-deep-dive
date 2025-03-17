import { AppleLogo } from "@fe/icons/logos/apple-logo";
import { GithubLogo } from "@fe/icons/logos/github-logo";
import { GoogleLogo } from "@fe/icons/logos/google-logo";

export const SocialSignIn = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <a
        href="#"
        className="border blink-border-container-white shadow-[0_0_24px_0px_rgba(0,0,0,0.04)] min-h-14 sm:min-h-10 flex gap-2 blink-text-primary rounded items-center justify-center text-base leading-none blink-surface-default hover:bg-blinkGray200 dark:hover:bg-blinkGray800"
      >
        <AppleLogo /> Continue with Apple
      </a>
      <a
        href="#"
        className="border blink-border-container-white shadow-[0_0_24px_0px_rgba(0,0,0,0.04)] min-h-14 sm:min-h-10 flex gap-2 blink-text-primary rounded items-center justify-center text-base leading-none blink-surface-default hover:bg-blinkGray200 dark:hover:bg-blinkGray800"
      >
        <GoogleLogo />
        Continue with Google
      </a>
      <a
        href="#"
        className="border blink-border-container-white shadow-[0_0_24px_0px_rgba(0,0,0,0.04)] min-h-14 sm:min-h-10 flex gap-2 blink-text-primary rounded items-center justify-center text-base leading-none blink-surface-default hover:bg-blinkGray200 dark:hover:bg-blinkGray800"
      >
        <GithubLogo />
        Continue with Github
      </a>
    </div>
  );
};
