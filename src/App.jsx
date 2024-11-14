import SalesProgress from "./components/SalesProgress";


const salesData = [
  {
    name: "Week sales plan for store 1",
    totalPlan: 7000000,
    progress: 70,
    days: [
      { name: "Mon", totalPlan: 3000000, earned: 1000000 },
      { name: "Tue", totalPlan: 3000000, earned: 1500000 },
      { name: "Wed", totalPlan: 3000000, earned: 2000000 },
      { name: "Thur", totalPlan: 3000000, earned: 2500000 },
      { name: "Fri", totalPlan: 3000000, earned: 2700000 },
      { name: "Sat", totalPlan: 3000000, earned: 3000000 },
    ],
  },
  {
    name: "Week sales plan for store 2",
    totalPlan: 5000000,
    progress: 50,
    days: [
      { name: "Mon", totalPlan: 2000000, earned: 500000 },
      { name: "Tue", totalPlan: 2000000, earned: 1000000 },
      { name: "Wed", totalPlan: 2000000, earned: 1500000 },
      { name: "Thur", totalPlan: 2000000, earned: 1800000 },
      { name: "Fri", totalPlan: 2000000, earned: 1900000 },
      { name: "Sat", totalPlan: 2000000, earned: 2000000 },
      { name: "Sun", totalPlan: 2000000, earned: 2000000 },
    ],
  },
];

const App = () => {
  return (
    <div className="container mx-auto w-[60%] p-4 m-10">
      <SalesProgress data={salesData} />
    </div>
  );
};

export default App;
