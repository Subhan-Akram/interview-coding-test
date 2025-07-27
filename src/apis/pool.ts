import type { Pool } from "./types";

const data=[
    {
        "id": "2beb0149-f75c-425e-89e5-fca4e7b21331",
        "name": "TWG1 @ AWS",
        "description": "DEV cluster 1",
        "status": "active",
        "provider": "TWG",
        "cpuUtilization": 0,
        "memoryUtilization": 0.1,
        "gpuUtilization": 0,
        "networkUtilization": 0.1,
        "nodeTypes": 5,
        "tags": [
            "high-priority"
        ],
        "createdAt": "2025-07-10T04:20:01.142040649",
        "active": true,
        "availableCapacity": {
            "cpuCount": 2,
            "memoryGb": 160,
            "gpuCount": 4
        },
        "totalCapacity": {
            "cpuCount": 2,
            "memoryGb": 160,
            "gpuCount": 4
        },
        "allocatedCapacity": {
            "cpuCount": 0,
            "memoryGb": 0,
            "gpuCount": 0
        },
        "allocations": []
    },
    {
        "id": "ce1779ba-a2b3-4b5f-b62d-c99c6ab0bcdb",
        "name": "TWG2 @ AWS",
        "description": "DEV cluster 2",
        "status": "active",
        "provider": "TWG",
        "cpuUtilization": 0,
        "memoryUtilization": 0.1,
        "gpuUtilization": 0,
        "networkUtilization": 0.1,
        "nodeTypes":4,
        "tags": [
            "high-priority"
        ],
        "createdAt": "2025-06-27T04:20:01.142073401",
        "active": true,
        "availableCapacity": {
            "cpuCount": 8,
            "memoryGb": 640,
            "gpuCount": 16
        },
        "totalCapacity": {
            "cpuCount": 8,
            "memoryGb": 640,
            "gpuCount": 16
        },
        "allocatedCapacity": {
            "cpuCount": 0,
            "memoryGb": 0,
            "gpuCount": 0
        },
        "allocations": []
    },
  {
    "id": "c88c929a-749f-4fa3-a4c1-096a11358109",
    "name": "Workstation, Building #741, Rm #4-201",
    "description": "Workstation",
    "status": "inactive",
    "provider": "TAMUS",
    "cpuUtilization": 0,
    "memoryUtilization": 0.1,
    "gpuUtilization": 0,
    "networkUtilization": 0.1,
    "nodeTypes": 2,
    "tags": [
        "high-priority"
    ],
    "createdAt": "2025-06-27T04:20:01.142119633",
    "active": false,
    "availableCapacity": {
        "cpuCount": 1,
        "memoryGb": 8,
        "gpuCount": 2
    },
    "totalCapacity": {
        "cpuCount": 1,
        "memoryGb": 8,
        "gpuCount": 2
    },
    "allocatedCapacity": {
        "cpuCount": 0,
        "memoryGb": 0,
        "gpuCount": 0
    },
    "allocations": []
},

 {
        "id": "b2b3b0149-f75c-425e-89e5-fca4e7b21331",
        "name": "Antrhopic",
        "description": "DEV cluster 5",
        "status": "active",
        "provider": "TWG",
        "cpuUtilization": 0,
        "memoryUtilization": 0.1,
        "gpuUtilization": 0,
        "networkUtilization": 0.1,
        "nodeTypes": 5,
        "tags": [
            "high-priority"
        ],
        "createdAt": "2025-07-10T04:20:01.142040649",
        "active": true,
        "availableCapacity": {
            "cpuCount": 2,
            "memoryGb": 160,
            "gpuCount": 4
        },
        "totalCapacity": {
            "cpuCount": 2,
            "memoryGb": 160,
            "gpuCount": 4
        },
        "allocatedCapacity": {
            "cpuCount": 0,
            "memoryGb": 0,
            "gpuCount": 0
        },
        "allocations": []
    },
    {
        "id": "cemm331779ba-a2b3-4b5f-b62d-c99c6ab0bcdb",
        "name": "Gemini",
        "description": "Prod cluster 2",
        "status": "active",
        "provider": "Google",
        "cpuUtilization": 0,
        "memoryUtilization": 0.1,
        "gpuUtilization": 0,
        "networkUtilization": 0.1,
        "nodeTypes":4,
        "tags": [
            "high-priority"
        ],
        "createdAt": "2025-06-27T04:20:01.142073401",
        "active": true,
        "availableCapacity": {
            "cpuCount": 8,
            "memoryGb": 640,
            "gpuCount": 16
        },
        "totalCapacity": {
            "cpuCount": 8,
            "memoryGb": 640,
            "gpuCount": 16
        },
        "allocatedCapacity": {
            "cpuCount": 0,
            "memoryGb": 0,
            "gpuCount": 0
        },
        "allocations": []
    },
  {
    "id": "c8mmb28c929a-749f-4fa3-a4c1-096a11358109",
    "name": "ML Training",
    "description": "ML Training cluster",
    "status": "inactive",
    "provider": "OpenAI",
    "cpuUtilization": 0,
    "memoryUtilization": 0.1,
    "gpuUtilization": 0,
    "networkUtilization": 0.1,
    "nodeTypes": 2,
    "tags": [
        "high-priority"
    ],
    "createdAt": "2025-06-27T04:20:01.142119633",
    "active": false,
    "availableCapacity": {
        "cpuCount": 1,
        "memoryGb": 8,
        "gpuCount": 2
    },
    "totalCapacity": {
        "cpuCount": 1,
        "memoryGb": 8,
        "gpuCount": 2
    },
    "allocatedCapacity": {
        "cpuCount": 0,
        "memoryGb": 0,
        "gpuCount": 0
    },
    "allocations": []
}
]
export const getPools = () => {
  return new Promise<Pool[]>(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });}