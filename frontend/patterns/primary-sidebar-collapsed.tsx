import { AvatarImage } from "@fe/components/avatar";
import { Badge } from "@fe/components/badge";
import { Button, NormalToLargeButton } from "@fe/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@fe/components/dropdown-menu";
import { NavigationGroup } from "@fe/components/sidebar/navigation-groups";
import { SidebarIconItem } from "@fe/components/sidebar/navigation-items";
import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HelpCircleIcon } from "@fe/icons/help-circle-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { LogOutIcon } from "@fe/icons/log-out-icon";
import { ProductLogo } from "@fe/icons/logos/product-logo";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { PlusIcon } from "@fe/icons/plus-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";

export const PrimarySidebarCollapsed = () => {
  return (
    <>
      <ProductLogo className="w-8 h-8 shrink-0" />

      <NormalToLargeButton
        appearance="secondary"
        className="sm:w-8 sm:h-[2.125rem]"
        before={<PlusIcon className="w-8 h-8 sm:w-6 sm:h-6 shrink-0" />}
        title="Create"
      />

      <NavigationGroup>
        <SidebarIconItem
          href="#"
          before={<HomeIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Home"
        />

        <SidebarIconItem
          href="#"
          before={
            <span className="relative">
              <InboxIcon className="w-8 h-8 sm:w-6 sm:h-6" />

              <Badge size="xsmall" className="absolute top-0 right-0" />
            </span>
          }
          title="Inbox"
        />

        <SidebarIconItem
          href="#"
          before={<PercentageIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Reporting"
        />

        <SidebarIconItem
          href="#"
          before={<DashboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Dashboard"
        />

        <SidebarIconItem
          href="#"
          before={<ClipboardIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Tasks"
        />

        <SidebarIconItem
          href="#"
          before={<FileIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Documents"
        />

        <SidebarIconItem
          href="#"
          before={<SettingsIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Settings"
        />
      </NavigationGroup>
      <div className="flex-grow" />

      <NavigationGroup>
        <SidebarIconItem
          href="#"
          before={<HelpCircleIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
          title="Help"
        />

        <DropdownMenu
          trigger={
            <DropdownMenuTrigger>
              <Button
                appearance="text"
                className="rounded-full w-12 h-12 md:w-10 md:h-10 px-0 py-0 shrink-0"
              >
                <AvatarImage
                  className="w-14 h-14 sm:w-8 sm:h-8 shrink-0 rounded-full"
                  src="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
                  alt="Sheera.Gottstein"
                />
              </Button>
            </DropdownMenuTrigger>
          }
        >
          <DropdownMenuContent side="right" align="end">
            <DropdownMenuItem
              asChild
              before={
                <LogOutIcon className="w-10 h-10 sm:w-5 sm:h-5 shrink-0" />
              }
            >
              <a href="#">Log out</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationGroup>
    </>
  );
};
