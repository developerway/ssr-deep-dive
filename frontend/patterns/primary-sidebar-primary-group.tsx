import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupRight,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";

export const PrimarySidebarPrimaryGroup = ({ ...props }) => {
  return (
    <NavigationGroup header="general" {...props}>
      <SidebarRegularItem
        href="/"
        before={<HomeIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Home
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<InboxIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
        after={<Badge text="24" size="small" />}
      >
        Inbox
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<PercentageIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Reporting
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<DashboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Dashboard
      </SidebarRegularItem>
      <CollapsibleSubgroupRight
        text="Tasks"
        icon={<ClipboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={<Badge text="1" size="small" />}
        >
          Todo
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={<Badge text="11" size="small" />}
        >
          In progress
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={<Badge text="56" size="small" />}
        >
          Done
        </SidebarRegularItem>
      </CollapsibleSubgroupRight>
      <SidebarRegularItem
        href="#"
        before={<FileIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Documents
      </SidebarRegularItem>
      <SidebarRegularItem
        href="/settings"
        before={<SettingsIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Settings
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
