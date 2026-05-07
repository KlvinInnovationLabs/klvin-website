export type Hub = {
  slug: string;
  name: string;
  region: string;
  industries: string[];
  keyMachinery: string[];
  applicableDevices: string[];  // product slugs
  h1: string;
  description: string;
  body: string;
};

export const hubs: Hub[] = [
  {
    slug: "pune",
    name: "Pune Auto Cluster",
    region: "Maharashtra",
    industries: ["Automotive OEM", "Tier-1 auto suppliers", "Rubber & plastics"],
    keyMachinery: ["Transfer press lines", "CNC machining centres", "Paint shop conveyor motors"],
    applicableDevices: ["sam-v3", "trace-v2"],
    h1: "AI motor monitoring for Pune's auto cluster manufacturers",
    description:
      "KLVIN deploys S.A.M.v3 and TRACE.v2 across Pune auto-cluster plants — predicting motor failures and tracking logistics fleets for Tier-1 suppliers.",
    body: "Pune hosts over 4,000 auto-component manufacturers within a 50 km radius of Chakan and Pimpri-Chinchwad. Press-line motors, CNC spindle drives, and conveyor systems run continuously across two or three shifts — making unplanned downtime disproportionately costly. KLVIN's S.A.M.v3 monitors tri-axis vibration, temperature, and current on these assets, running ISO 10816-aligned anomaly detection at the edge. Alerts typically fire 4–6 weeks before a bearing or winding failure, giving maintenance teams time to order spares and schedule planned shutdowns. TRACE.v2 is deployed on in-plant logistics vehicles and inter-plant logistics fleets, combining GPS, OBD-II diagnostics, and fuel-theft detection for Tier-1 suppliers managing 50- to 500-vehicle fleets.",
  },
  {
    slug: "coimbatore",
    name: "Coimbatore Pumps & Motors Hub",
    region: "Tamil Nadu",
    industries: ["Pump manufacturing", "Textile spinning", "Compressors"],
    keyMachinery: ["Centrifugal pumps", "Ring frames", "Air compressors"],
    applicableDevices: ["sam-v3"],
    h1: "Predictive maintenance for Coimbatore pumps and motors",
    description:
      "S.A.M.v3 monitors vibration, temperature, and current on Coimbatore's pump, motor, and compressor manufacturing lines — cutting unplanned downtime.",
    body: "Coimbatore produces over 30% of India's centrifugal pumps, making it the country's pump capital. Ring-frame spindle motors in textile mills, centrifugal pump test rigs, and rotary-screw compressors share a common failure mode: bearing fatigue caused by continuous operation in high-dust environments. KLVIN's S.A.M.v3 detects early bearing defects via envelope analysis, catching faults in the sub-surface raceway stage — long before they become audible or cause catastrophic seizure. Customers typically see a 3–6 month payback on a 10-motor pilot through avoided emergency repairs and reduced spare-parts consumption.",
  },
  {
    slug: "ludhiana",
    name: "Ludhiana Industrial Belt",
    region: "Punjab",
    industries: ["Steel re-rolling", "Rubber goods", "Textile looms"],
    keyMachinery: ["Rolling mill drives", "Loom motor arrays", "Rubber mixers"],
    applicableDevices: ["sam-v3", "ism-v1"],
    h1: "Motor monitoring and emission compliance for Ludhiana industry",
    description:
      "KLVIN helps Ludhiana steel and rubber manufacturers monitor motor health and meet Punjab PCB emission norms — with S.A.M.v3 and I.S.M.v1.",
    body: "Ludhiana's industrial belt spans steel re-rolling mills, bicycle manufacturing, rubber goods, and textile looms. Rolling-mill drive motors are among the most demanding applications for condition monitoring: high radial loads, thermal cycling, and dust ingress combine to produce bearing failures that can shut an entire re-rolling line. S.A.M.v3 provides real-time vibration and temperature monitoring with on-device anomaly detection. For re-rolling and rubber-mixer plants, KLVIN also deploys I.S.M.v1 for stack emissions monitoring, helping plants maintain compliance with Punjab Pollution Control Board norms without manual stack testing on every shift.",
  },
];
