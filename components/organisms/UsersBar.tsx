const UsersBar = () => {
  const data = Array(20).fill("Nathalie");

  return (
    <div className="rounded-md h-full p-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-2xl mb-6">other Users</h2>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((user, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-gray-300"></div>
            <p>{user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersBar;
