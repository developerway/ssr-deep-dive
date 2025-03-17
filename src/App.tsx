import { DashboardPage } from "@fe/pages/dashboard";
import { LoginPage } from "@fe/pages/login";
import { SettingsPage } from "@fe/pages/settings";
import { usePath } from "@fe/utils/use-client-router";

function App({ ssrPath }: { ssrPath?: string }) {
  const path = usePath(ssrPath);

  if (path.startsWith("/settings")) {
    return <SettingsPage />;
  }

  switch (path) {
    case "/login":
      return <LoginPage />;
    default:
      return <DashboardPage />;
  }
}

export default App;
