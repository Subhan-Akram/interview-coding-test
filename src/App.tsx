// Shadcn ui
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Components
import { D_Navbar, D_Sidebar } from "@/components/dashboard";
import { Compute_Pool_Cards } from "@/components";

export default function App() {
  return (
    <SidebarProvider>
      <D_Sidebar />
      <main className="w-full">
        <D_Navbar />
        <div className="px-8">
          <Tabs defaultValue="compute-pools">
            <TabsList>
              <TabsTrigger value="compute-pools">Compute Pools</TabsTrigger>
              <TabsTrigger value="activity-log">Activity Log</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="compute-pools">
              <div className="py-5">
                <h2 className="font-medium">Compute Pools</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                  <Compute_Pool_Cards />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity-log">Change your password here.</TabsContent>
            <TabsContent value="analytics">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </main>
    </SidebarProvider>
  );
}
