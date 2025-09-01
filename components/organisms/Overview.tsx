const results = [
  {
    name: "Views",
    noOfViewers: "7,625",
    percent: "+110%",
    bg: "bg-[#e2f5fe]",
  },
  {
    name: "Visits",
    noOfViewers: "3,335",
    percent: "+210%",
    bg: "bg-[#e5ecf6]",
  },
  {
    name: "New Users",
    noOfViewers: "7,625",
    percent: "+130%",
    bg: "bg-[#e2f5fe]",
  },
  {
    name: "Active users",
    noOfViewers: "3,335",
    percent: "+310%",
    bg: "bg-[#e5ecf6]",
  },
];

const Overview = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-2 mb-4">Overview</h2>
      <div className="grid gap-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex flex-col  gap-2 shadow-lg ${result.bg} `}
          >
            <p className="text-lg font-medium">{result.name}</p>
            <p className="text-xl font-semibold flex items-center gap-2 justify-between">
              {result.noOfViewers}{" "}
              <span className="text-sm font-normal">{result.percent}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
