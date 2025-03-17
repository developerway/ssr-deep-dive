import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupLeft,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";

export const PrimarySidebarSecondaryGroup = () => {
  return (
    <NavigationGroup header="Your teams">
      <CollapsibleSubgroupLeft text="First team">
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={<Badge text="24" size="small" />}
        >
          Stories
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={<Badge text="11" size="small" />}
        >
          Tasks
        </SidebarRegularItem>
        <SidebarRegularItem className="pl-12" href="#">
          Resources
        </SidebarRegularItem>
      </CollapsibleSubgroupLeft>

      <CollapsibleSubgroupLeft text="Second team">
        <SidebarRegularItem className="pl-12" href="#">
          Stories
        </SidebarRegularItem>
        <SidebarRegularItem className="pl-12" href="#">
          Tasks
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={<Badge text="42" size="small" />}
        >
          Resources
        </SidebarRegularItem>
      </CollapsibleSubgroupLeft>
    </NavigationGroup>
  );
};
