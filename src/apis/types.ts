export type Pool = {
  id: string;
  name: string;
  description: string;
  status: string;
  provider: string;
  cpuUtilization: number;
  memoryUtilization: number;
  gpuUtilization: number;
  networkUtilization: number;
  nodeTypes: number;
  tags: string[];
  createdAt: string; // ISO date string
  active: boolean;
  availableCapacity: {
    cpuCount: number;
    memoryGb: number;
    gpuCount: number;
  };
  totalCapacity: {
    cpuCount: number;
    memoryGb: number;
    gpuCount: number;
  };
  allocatedCapacity: {
    cpuCount: number;
    memoryGb: number;
    gpuCount: number;
  };
  allocations: unknown[]; // Replace unknown with proper type if available
};
