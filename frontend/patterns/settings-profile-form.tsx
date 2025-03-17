import { NormalToLargeButton } from "@fe/components/button";
import { PhotoUpload } from "@fe/components/file-upload/photo-upload";
import { NormalToLargeInput } from "@fe/components/input/base-input";
import { BaseTextarea } from "@fe/components/textarea/base-textarea";

export const SettingsProfileForm = ({ ...props }) => {
  return (
    <form className="max-w-[34rem] mx-auto" {...props}>
      <div className="mb-4">
        <PhotoUpload
          id="profile-photo-upload"
          url="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
          name="Sheera.Gottstein"
          aria-label="Profile photo upload"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-xs mb-1">
          Name
        </label>
        <NormalToLargeInput
          defaultValue="Sheera Gottstein"
          id="name"
          aria-required="true"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xs mb-1">
          Email
        </label>
        <NormalToLargeInput
          defaultValue="Sheera.Gottstein@gmail.com"
          id="email"
          type="email"
          aria-required="true"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pronouns" className="block text-xs mb-1">
          Pronouns
        </label>
        <NormalToLargeInput
          defaultValue="She/Her"
          id="pronouns"
          aria-required="true"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-xs mb-1">
          Bio
        </label>
        <BaseTextarea
          defaultValue="Sheera is a human with a big heart. She’s studied law, music and sociology, and she is currently working as a death doula and activist for imprisoned women."
          id="bio"
          aria-required="true"
        />
      </div>
      <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row justify-end">
        <NormalToLargeButton
          appearance="text"
          className="h-14 sm:h-10 text-lg sm:text-sm w-full sm:w-auto flex sm:inline-flex"
          aria-label="Discard changes"
        >
          Discard
        </NormalToLargeButton>
        <NormalToLargeButton
          appearance="primary"
          className="h-14 sm:h-10 text-lg sm:text-sm w-full sm:w-auto flex sm:inline-flex"
          aria-label="Save changes"
        >
          Save
        </NormalToLargeButton>
      </div>
    </form>
  );
};
