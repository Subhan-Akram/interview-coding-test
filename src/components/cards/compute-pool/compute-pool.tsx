// Shadcn ui
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
// Icons
import { Cpu, Ellipsis, Gpu, MemoryStick, Network, Settings, User } from "lucide-react";
// React
import { useCallback, useEffect } from "react";
// Store
import { useComputePool } from "@/store/useComputePool.store";

export default function Compute_Pool() {
  const getComputePool = useComputePool((state) => state.getComputePool);
  const isGetting = useComputePool((state) => state.isGetting);
  const computePoolData = useComputePool((state) => state.computePoolData);

  const percent = useCallback((value: number, total: number) => {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  }, []);

  useEffect(() => {
    getComputePool();
  }, []);

  if (isGetting) {
    return <p>We are getting compute pool</p>;
  }

  return (
    computePoolData.length > 0 &&
    !isGetting &&
    computePoolData.map(
      (
        {
          name,
          description,
          active,
          provider,
          nodeTypes,
          createdAt,
          availableCapacity,
          totalCapacity,
          allocatedCapacity,
          allocations,
          tags,
        },
        i
      ) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex-1">
              <div className="flex items-center mb-5 gap-2.5">
                <Badge variant="secondary">
                  <span className="opacity-60">Provider:</span> <strong>{provider}</strong>
                </Badge>
                <Badge
                  variant="secondary"
                  className={`${
                    active ? "bg-[#032E15] text-green-500" : "bg-red-900 text-red-300"
                  }`}
                >
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="3" fill={`${active ? "#00C950" : "#fb2c36"}`} />
                  </svg>

                  {active ? "Active" : "Inactive"}
                </Badge>
              </div>
              <CardTitle className="mb-2">{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <CardAction>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                    <Ellipsis />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="flex items-center justify-between mb-5">
              <div className="flex-1 text-left">
                <h3>Region</h3>
                <h2>us-east-1</h2>
              </div>
              <div className="flex-1 text-center">
                <h3>Created</h3>
                <h2>
                  {new Date(createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </h2>
              </div>
              <div className="flex-1 text-right">
                <h3>Nodes</h3>
                <h2>{nodeTypes}</h2>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <div className="flex items-center gap-2.5 text-[#99A1AF]">
                  <Cpu />
                  <h2>CPU</h2>
                </div>
                <Progress
                  value={percent(availableCapacity.cpuCount, totalCapacity.cpuCount)}
                  className={`my-3 ${
                    percent(availableCapacity.cpuCount, totalCapacity.cpuCount) <= 50
                      ? "!bg-red-500"
                      : "!bg-green-600"
                  }`}
                />
                <p>{percent(availableCapacity.cpuCount, totalCapacity.cpuCount)}%</p>
              </div>
              <div>
                <div className="flex items-center gap-2.5 text-[#99A1AF]">
                  <MemoryStick />
                  <h2>Memory</h2>
                </div>
                <Progress
                  value={percent(availableCapacity.cpuCount, totalCapacity.cpuCount)}
                  className={`my-3 ${
                    percent(availableCapacity.cpuCount, totalCapacity.cpuCount) <= 50
                      ? "!bg-red-500"
                      : "!bg-green-600"
                  }`}
                />
                <p>{percent(availableCapacity.memoryGb, totalCapacity.memoryGb)}%</p>
              </div>
              <div>
                <div className="flex items-center gap-2.5 text-[#99A1AF]">
                  <Gpu />
                  <h2>GPU</h2>
                </div>
                <Progress
                  value={percent(availableCapacity.cpuCount, totalCapacity.cpuCount)}
                  className={`my-3 ${
                    percent(availableCapacity.cpuCount, totalCapacity.cpuCount) <= 50
                      ? "!bg-red-500"
                      : "!bg-green-600"
                  }`}
                />
                <p>{percent(availableCapacity.gpuCount, totalCapacity.gpuCount)}%</p>
              </div>
              <div>
                <div className="flex items-center gap-2.5 text-[#99A1AF]">
                  <Network />
                  <h2>Network</h2>
                </div>
                <Progress
                  value={percent(availableCapacity.cpuCount, totalCapacity.cpuCount)}
                  className={`my-3 ${
                    percent(availableCapacity.cpuCount, totalCapacity.cpuCount) <= 50
                      ? "!bg-red-500"
                      : "!bg-green-600"
                  }`}
                />
                <p>{allocations.length > 0 ? "Active" : "Idle"}</p>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag: string) => (
                <Badge variant="secondary" className="capitalize" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      )
    )
  );
}
