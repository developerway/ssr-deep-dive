import { PrimarySidebar } from "@fe/components/sidebar/sidebar-layouts";
import { PrimarySidebarBottomGroup } from "@fe/patterns/primary-sidebar-bottom-group";
import { PrimarySidebarCreateButton } from "@fe/patterns/primary-sidebar-create-button";
import { PrimarySidebarHeading } from "@fe/patterns/primary-sidebar-heading";
import { PrimarySidebarPrimaryGroup } from "@fe/patterns/primary-sidebar-primary-group";
import { PrimarySidebarSecondaryGroup } from "@fe/patterns/primary-sidebar-secondary-group";

export const FixedWidthPrimarySidebar = () => {
  return (
    <PrimarySidebar>
      <PrimarySidebarHeading />

      <PrimarySidebarCreateButton />

      <PrimarySidebarPrimaryGroup />

      <PrimarySidebarSecondaryGroup />

      <div className="flex-grow" />

      <PrimarySidebarBottomGroup />
    </PrimarySidebar>
  );
};
