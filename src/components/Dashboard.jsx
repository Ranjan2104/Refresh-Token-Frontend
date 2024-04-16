import React, { useEffect } from "react";
import { useGetDashboardApiQuery } from "../store/middleware/dashboardAPI";
import moment from "moment";
import { useApiTokenMutation } from "../store/middleware/tokenAPI";
import { TokenGenerate } from "../utils/TokenGenerate";

const Dashboard = () => {
  const { data, isLoading, error } = useGetDashboardApiQuery();
  const [apiToken] = useApiTokenMutation();

  useEffect(() => {
    (async () => {
      if (
        error?.status === 401 &&
        error?.data?.message === "Invalid token or Token Expired"
      ) {
        await TokenGenerate(apiToken);
      }
    })();
  }, [error]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <h2>Name - {data?.data?.name || ""}</h2>
          <h2>Number - {data?.data?.mobilenumber || ""}</h2>
          <h2>EmailID - {data?.data?.email || ""}</h2>
          <h2>
            Created At -{" "}
            {moment(data?.data?.createdAt || "").format("DD-MM-YYYY")}
          </h2>
          <h2>ID - {data ? data.data._id : ""}</h2>
        </div>
      )}
    </>
  );
};

export default Dashboard;
