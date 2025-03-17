import { CollapsiblePrimarySidebar } from "@fe/components/sidebar/sidebar-layouts";
import { PrimarySidebarBottomGroup } from "@fe/patterns/primary-sidebar-bottom-group";
import { PrimarySidebarCollapsed } from "@fe/patterns/primary-sidebar-collapsed";
import { PrimarySidebarCreateButton } from "@fe/patterns/primary-sidebar-create-button";
import { PrimarySidebarHeading2 } from "@fe/patterns/primary-sidebar-heading";
import { PrimarySidebarPrimaryGroup } from "@fe/patterns/primary-sidebar-primary-group";
import { PrimarySidebarSecondaryGroup } from "@fe/patterns/primary-sidebar-secondary-group";

export const CollapsiblePrimarySidebarExample = () => {
  return (
    <CollapsiblePrimarySidebar collapsedElements={<PrimarySidebarCollapsed />}>
      <PrimarySidebarHeading2 />

      <PrimarySidebarCreateButton />

      <PrimarySidebarPrimaryGroup />

      <PrimarySidebarSecondaryGroup />

      <div className="flex-grow" />

      <PrimarySidebarBottomGroup />
    </CollapsiblePrimarySidebar>
  );
};
