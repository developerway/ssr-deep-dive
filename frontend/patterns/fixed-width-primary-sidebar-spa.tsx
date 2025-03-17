import { PrimarySidebar } from "@fe/components/sidebar/sidebar-layouts";
import { PrimarySidebarBottomGroup } from "@fe/patterns/primary-sidebar-bottom-group";
import { PrimarySidebarCreateButton } from "@fe/patterns/primary-sidebar-create-button";
import { PrimarySidebarHeading } from "@fe/patterns/primary-sidebar-heading";
import { PrimarySidebarPrimaryGroupSPA } from "@fe/patterns/primary-sidebar-primary-group-spa";
import { PrimarySidebarSecondaryGroup } from "@fe/patterns/primary-sidebar-secondary-group";

export const FixedWidthPrimarySidebarSPA = () => {
  return (
    <PrimarySidebar>
      <PrimarySidebarHeading />

      <PrimarySidebarCreateButton />

      <PrimarySidebarPrimaryGroupSPA />

      <PrimarySidebarSecondaryGroup />

      <div className="flex-grow" />

      <PrimarySidebarBottomGroup />
    </PrimarySidebar>
  );
};
