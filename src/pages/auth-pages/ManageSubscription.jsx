const ManageSubscription = () => {
  const user = localStorage.getItem("user");
  const userValues = JSON.parse(user);

  console.log("user values", userValues);
  return (
    <div className="flex flex-col gap-5">
      <h1>
        <span className="uppercase tracking-wide">Username: </span>
        {userValues.name}
      </h1>
      <h1>
        <span className="uppercase tracking-wide">Email: </span>
        {userValues.email}
      </h1>
      <h1>
        <span className="uppercase tracking-wide">Plan: </span>
        {userValues.plan}
      </h1>
     
    </div>
  );
};

export default ManageSubscription;
