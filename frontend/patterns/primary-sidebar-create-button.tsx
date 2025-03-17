import { NormalToLargeButton } from "@fe/components/button";
import { EditIcon } from "@fe/icons/edit-icon";

export const PrimarySidebarCreateButton = () => {
  return (
    <NormalToLargeButton
      appearance="secondary"
      before={<EditIcon className="w-6 h-6 sm:w-4 sm:h-4" />}
    >
      <span className="group-data-[sidebar-open=false]:hidden">Create</span>
    </NormalToLargeButton>
  );
};
