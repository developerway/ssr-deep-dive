import { useEffect, useState } from "react";

import { TabButton, TabContent, TabsList, TabsRoot } from "@fe/components/tabs";
import { FixedWidthPrimarySidebarSPA } from "@fe/patterns/fixed-width-primary-sidebar-spa";
import {
  Content,
  ContentBody,
  ContentHeading,
} from "@fe/patterns/layout-components";
import { SettingsNotificationsTable } from "@fe/patterns/settings-notifications-table";
import { TopbarForSidebarContentLayout } from "@fe/patterns/topbar-for-sidebar-content-layout";
import { updateTitle } from "@fe/utils/update-title";

export const SettingsPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateTitle("Study project: Settings");
  }, []);

  return (
    <div className="blink-text-primary flex flex-col lg:flex-row h-screen bg-blinkGray50 dark:bg-blinkNeutral900 gap-0.5">
      <FixedWidthPrimarySidebarSPA />

      <div className="flex flex-1 h-full flex-col">
        <TopbarForSidebarContentLayout search={search} setSearch={setSearch} />

        <div className="w-full h-full flex flex-col lg:flex-row">
          <Content>
            <ContentHeading>
              <h1 className="text-5xl blink-text-primary italic font-blink-title">
                Settings
              </h1>
            </ContentHeading>
            <ContentBody>
              <TabsRoot defaultValue="notifications">
                <TabsList className="mb-6">
                  <TabButton value="account-details">Account details</TabButton>
                  <TabButton value="personal-profile">
                    Personal Profile
                  </TabButton>
                  <TabButton value="email-settings">Email Settings</TabButton>
                  <TabButton value="notifications">Notifications</TabButton>
                </TabsList>
                <div className="py-4">
                  <TabContent value="account-details">
                    Content for Account details
                  </TabContent>
                  <TabContent value="personal-profile">
                    Content for Settings Profile
                  </TabContent>
                  <TabContent value="email-settings">
                    Content for Email Settings
                  </TabContent>
                  <TabContent value="notifications">
                    <SettingsNotificationsTable />
                  </TabContent>
                </div>
              </TabsRoot>
            </ContentBody>
          </Content>
        </div>
      </div>
    </div>
  );
};
