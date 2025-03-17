import { AvatarImage } from "@fe/components/avatar";
import { NormalToLargeButton } from "@fe/components/button";
import { NavigationGroup } from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";
import { HelpCircleIcon } from "@fe/icons/help-circle-icon";
import { LogOutIcon } from "@fe/icons/log-out-icon";

export const PrimarySidebarBottomGroup = () => {
  return (
    <NavigationGroup divider="top">
      <SidebarRegularItem
        href="#"
        before={<HelpCircleIcon className="w-8 h-8 sm:w-6 sm:h-6" />}
      >
        Help
      </SidebarRegularItem>
      <SidebarRegularItem
        before={
          <AvatarImage
            className="w-8 h-8 sm:w-6 sm:h-6 shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
            alt="Sheera.Gottstein"
          />
        }
        after={
          <Tooltip text="Log out" position="right">
            <NormalToLargeButton
              appearance="text"
              className="w-14 sm:w-10"
              title="Log out"
            >
              <LogOutIcon className="w-10 h-10 sm:w-5 sm:h-5 shrink-0" />
            </NormalToLargeButton>
          </Tooltip>
        }
      >
        Sheera Gottstein
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
