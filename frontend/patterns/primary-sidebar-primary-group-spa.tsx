import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupRight,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularLinkItem } from "@fe/components/sidebar/navigation-items";
import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";

export const PrimarySidebarPrimaryGroupSPA = ({ ...props }) => {
  return (
    <NavigationGroup header="general" {...props}>
      <SidebarRegularLinkItem
        href="/"
        before={<HomeIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Home
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="/inbox"
        before={<InboxIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
        after={<Badge text="24" size="small" />}
      >
        Inbox
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="#"
        before={<PercentageIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Reporting
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="#"
        before={<DashboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Dashboard
      </SidebarRegularLinkItem>
      <CollapsibleSubgroupRight
        text="Tasks"
        icon={<ClipboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        <SidebarRegularLinkItem
          href="#"
          className="pl-12"
          after={<Badge text="1" size="small" />}
        >
          Todo
        </SidebarRegularLinkItem>
        <SidebarRegularLinkItem
          href="#"
          className="pl-12"
          after={<Badge text="11" size="small" />}
        >
          In progress
        </SidebarRegularLinkItem>
        <SidebarRegularLinkItem
          href="#"
          className="pl-12"
          after={<Badge text="56" size="small" />}
        >
          Done
        </SidebarRegularLinkItem>
      </CollapsibleSubgroupRight>
      <SidebarRegularLinkItem
        href="#"
        before={<FileIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Documents
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="/settings"
        before={<SettingsIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Settings
      </SidebarRegularLinkItem>
    </NavigationGroup>
  );
};
