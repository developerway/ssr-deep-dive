import { NormalToLargeCheckbox } from "@fe/components/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@fe/components/table";

export const SettingsNotificationsTable = () => {
  return (
    <>
      <h2 className="italic font-blink-title text-4xl text-blinkGreen700 dark:text-blinkGreen100">
        General
      </h2>
      <div className="w-full overflow-auto">
        <Table className="min-w-[34rem] mb-16">
          <TableHead>
            <TableRow>
              <TableHeadCell></TableHeadCell>
              <TableHeadCell className="w-20">Push</TableHeadCell>
              <TableHeadCell className="w-20">Email</TableHeadCell>
              <TableHeadCell className="w-20">SMS</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Your account security
                </span>
                <span className="blink-text-subdued text-base">
                  Notifications about your account security
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="security-push"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="security-email" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="security-sms" className="mt-2" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Interviews, reviews and surveys
                </span>
                <span className="blink-text-subdued text-base">
                  Invitations to test new features and give feedback
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="interviews-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="interviews-email"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="interviews-sms" className="mt-2" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Marketing and promotional
                </span>
                <span className="blink-text-subdued text-base">
                  News, offers and promotions
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="marketing-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="marketing-email" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="marketing-sms" className="mt-2" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Our campaigns
                </span>
                <span className="blink-text-subdued text-base">
                  Updates about the causes we care about
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="campaigns-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="campaigns-email" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="campaigns-sms" className="mt-2" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <h2 className="italic font-blink-title text-4xl text-blinkGreen700 dark:text-blinkGreen100">
        Social
      </h2>
      <div className="w-full overflow-auto">
        <Table className="min-w-[34rem] mb-16">
          <TableHead>
            <TableRow>
              <TableHeadCell></TableHeadCell>
              <TableHeadCell className="w-20">Push</TableHeadCell>
              <TableHeadCell className="w-20">Email</TableHeadCell>
              <TableHeadCell className="w-20">SMS</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Comments and likes
                </span>
                <span className="blink-text-subdued text-base">
                  When someone reacts to your posts
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="comments-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="comments-email" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="comments-sms"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Reminders
                </span>
                <span className="blink-text-subdued text-base">
                  When you have an event coming up
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="reminders-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="reminders-email" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="reminders-sms"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Updates from friends
                </span>
                <span className="blink-text-subdued text-base">
                  What is happening in your network
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox id="updates-push" className="mt-2" />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="updates-email"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="updates-sms"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="block text-lg blink-text-primary">
                  Friend requests
                </span>
                <span className="blink-text-subdued text-base">
                  When someone wants to connect
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-push"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-email"
                  className="mt-2"
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-sms"
                  className="mt-2"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
