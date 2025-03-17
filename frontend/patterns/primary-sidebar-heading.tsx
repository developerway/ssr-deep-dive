import { Badge } from "@fe/components/badge";
import { Button } from "@fe/components/button";
import { SidebarHeading } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";
import { BellIcon } from "@fe/icons/bell-icon";
import { ProductLogo } from "@fe/icons/logos/product-logo";
import { Link } from "@fe/utils/link";

export const PrimarySidebarHeading = () => {
  return (
    <SidebarHeading
      before={
        <Link href="/login">
          <ProductLogo className="w-8 h-8" />
        </Link>
      }
      after={
        <Tooltip text="Notifications" position="right">
          <Button
            appearance="text"
            className="px-0 w-16 sm:w-8 h-16 sm:h-8 relative"
          >
            <Badge
              size="xsmall"
              className="absolute top-4 right-4 sm:top-1 sm:right-1.5"
            />

            <BellIcon className="w-8 h-8 sm:w-6 sm:h-6" />
          </Button>
        </Tooltip>
      }
    >
      <span className="font-medium text-xl">Settings</span>
    </SidebarHeading>
  );
};

export const PrimarySidebarHeading2 = () => {
  return (
    <SidebarHeading
      className="lg:pr-8"
      before={<ProductLogo className="w-8 h-8" />}
      after={
        <Tooltip text="Notifications" position="right">
          <Button
            appearance="text"
            className="px-0 w-16 sm:w-8 h-16 sm:h-8 relative"
          >
            <Badge
              size="xsmall"
              className="absolute top-4 right-4 sm:top-1 sm:right-1.5"
            />

            <BellIcon className="w-8 h-8 sm:w-6 sm:h-6" />
          </Button>
        </Tooltip>
      }
    >
      <span className="font-medium text-xl">Settings</span>
    </SidebarHeading>
  );
};
