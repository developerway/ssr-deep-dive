import { NormalToLargeButton } from "@fe/components/button";
import { NormalToLargeInput } from "@fe/components/input/base-input";
import { InputWithIconsNormalToLarge } from "@fe/components/input/input-with-icons";
import { EyeOffIcon } from "@fe/icons/eye-off-icon";

export const EmailSignIn = () => {
  return (
    <form className="flex flex-col gap-4 sm:gap-6 w-full">
      <div>
        <label htmlFor="email" className="block text-sm sm:text-xs mb-1">
          * Email
        </label>
        <NormalToLargeInput
          placeholder="Enter email address"
          id="email"
          aria-required="true"
          className="w-full"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm sm:text-xs mb-1 w-full"
        >
          * Password
        </label>
        <InputWithIconsNormalToLarge
          placeholder="Enter password"
          id="password"
          aria-required="true"
          after={
            <EyeOffIcon className="w-6 h-6 sm:w-4 sm:h-4 blink-text-subdued" />
          }
        />
      </div>
      <div className="mb-4">
        <a
          href="#"
          className="text-sm underline hover:no-underline leading-none"
        >
          Forgot password?
        </a>
      </div>
      <NormalToLargeButton className="w-full">Login</NormalToLargeButton>
    </form>
  );
};
