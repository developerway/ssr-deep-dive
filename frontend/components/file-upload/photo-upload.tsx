import React, { ChangeEvent } from "react";

import { AvatarImage } from "@fe/components/avatar";
import { NormalToLargeButton } from "@fe/components/button";
import { EmptyAvatarRounded } from "@fe/icons/empty-avatar";
import { merge } from "@fe/utils/merge-classnames";

type PhotoUploadProps = {
  id: string;
  className?: string;
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  url?: string;
  name?: string;
};

export const PhotoUpload = ({
  id,
  className,
  onFileChange,
  url,
  name,
}: PhotoUploadProps) => {
  const fileUploadRef = React.useRef<HTMLInputElement>(null);
  return (
    <div
      className={merge(
        "flex flex-col gap-1 items-center relative bg-blinkGray50 dark:bg-blinkGray900 rounded pt-4 pb-2 px-2",
        className,
      )}
    >
      {url ? (
        <AvatarImage
          className="w-[6.25rem] h-[6.25rem] rounded-full mb-3"
          src={url}
          alt={name || ""}
        />
      ) : (
        <EmptyAvatarRounded className="w-[6.25rem] h-[6.25rem] rounded-full mb-3" />
      )}

      <NormalToLargeButton
        appearance="secondary"
        onClick={() => fileUploadRef.current?.click()}
      >
        Upload photo
      </NormalToLargeButton>

      <NormalToLargeButton
        appearance="text"
        className="text-blinkCoral400 dark:text-blinkCoral300"
      >
        Remove photo
      </NormalToLargeButton>

      <input
        tabIndex={-1}
        ref={fileUploadRef}
        type="file"
        id={id}
        onChange={onFileChange}
        accept=".jpg, .png, .gif"
        className="absolute top-0 left-0 opacity-0"
      />
    </div>
  );
};

PhotoUpload.displayName = "PhotoUpload";
