import React from "react";

import { Button, NormalToLargeButton } from "@fe/components/button";
import { Drawer } from "@fe/components/drawer";
import { InputWithIconsNormalToLarge } from "@fe/components/input/input-with-icons";
import { WideToggleLarge } from "@fe/components/toggle";
import { DotsVerticalIcon } from "@fe/icons/dots-vertical-icon";
import { DownloadIcon } from "@fe/icons/download-icon";
import { PlusIcon } from "@fe/icons/plus-icon";
import { SearchIcon } from "@fe/icons/search-icon";

export const TopbarForSidebarContentLayout = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) => {
  return (
    <div className="lg:bg-blinkNeutral50 lg:dark:bg-blinkNeutral800">
      <nav
        aria-label="Main Navigation"
        className="h-auto lg:h-16 px-6 flex items-center justify-between absolute top-3 lg:top-0 right-0 lg:right-0 left-12 lg:left-0 lg:relative"
      >
        <div className="text-2xl blink-text-primary italic font-blink-title">
          <a href="#">My Dashboards</a>
        </div>
        <div className="gap-3 hidden lg:flex">
          <InputWithIconsNormalToLarge
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            before={<SearchIcon className="w-6 h-6 lg:w-4 lg:h-4" />}
          />
          <Button
            appearance="secondary"
            after={<PlusIcon className="w-6 h-6 lg:w-4 lg:h-4" />}
          >
            Add widget
          </Button>
          <div className="flex gap-2 items-center">
            <WideToggleLarge id="larger-toggle2" defaultChecked />

            <label className="Label" htmlFor="larger-toggle2">
              Light
            </label>
          </div>
        </div>
        <div className="block lg:hidden">
          <Drawer
            position="right"
            trigger={
              <Button appearance="text" className="w-12 h-12 lg:w-10 lg:h-10">
                <DotsVerticalIcon className="w-8 h-8 lg:w-6 lg:h-6 shrink-0" />
              </Button>
            }
          >
            <div className="p-8 flex flex-col gap-3">
              <InputWithIconsNormalToLarge
                placeholder="Search..."
                before={<SearchIcon className="w-6 h-6 lg:w-4 lg:h-4" />}
              />

              <NormalToLargeButton
                appearance="secondary"
                after={<DownloadIcon className="w-6 h-6 lg:w-4 lg:h-4" />}
              >
                Download
              </NormalToLargeButton>
              <NormalToLargeButton
                appearance="primary"
                after={<PlusIcon className="w-6 h-6 lg:w-4 lg:h-4" />}
              >
                Create
              </NormalToLargeButton>
            </div>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};
