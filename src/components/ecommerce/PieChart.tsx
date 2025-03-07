import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "pie" as const,
  width: 280,
  height: 280,
  series: [44, 55, 13, 43],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "",
      align: "center" as "center",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4CAF50", "#FF9800", "#F44336", "#2196F3", "#9C27B0"], // Updated colors to match EcommerceMetrics
    legend: {
      show: true,
      position: 'bottom' as const,
    },
    labels: ["Furniture", "Hardware", "Others", "Software"], // Add specific names for each series
    stroke: {
      show: false, // Disable the white line around the pie and separating different parts
    },
  },
};

export default function PieChart() {
  return (
    <Card className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type={chartConfig.type}
          width={chartConfig.width}
          height={chartConfig.height}
        />
      </CardBody>
    </Card>
  );
}