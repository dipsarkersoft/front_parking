import React, { useEffect, useState } from "react";
import { allParkingView } from "../api/allapi.js";
import { useAuth } from "../contex/useAuth.jsx";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { LoadingComponent } from "./utils/LoadingComponent.jsx";

export const AllParkingList = () => {
  const token = localStorage.getItem("token");
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();

  const AllPark = async () => {
    try {
      setLoading(true);
      const { data } = await allParkingView(token);
      if (data) {
        setRes(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleGetCar = async (id) => {
    navigate(`getCar/${id}`);
  };

  const handleReview = async (id) => {
    // console.log(id);
  };

  const handleDelete = async (id) => {
    // console.log(id);
  };

  useEffect(() => {
    AllPark(token);
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <h2>Parking Records</h2>

        {loading ? (
          <>
            <LoadingComponent />
          </>
        ) : (
          <>
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Car Name</th>
                  <th>Start Park</th>
                  <th>End Park</th>
                  <th>Total Price (TK )</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {res.map((record) => {
                  const now = moment().format("YYYY-MM-DD HH:mm:ss");
                  const sPark = moment
                    .utc(record.start_park)
                    .format("YYYY-MM-DD HH:mm:ss");
                  const ePark = moment
                    .utc(record.end_park)
                    .format("YYYY-MM-DD HH:mm:ss");
                  // console.log(sPark < now);
                  // console.log("ss", now.format("YYYY-MM-DD HH:mm:ss"))

                  return (
                    <tr key={record.id}>
                      <td>{record.id}</td>
                      <td>{record.car_name}</td>
                      <td>{sPark}</td>

                      <td>{ePark}</td>

                      <td>TK {record.total_price}</td>
                      <td>
                        {record.is_complete ? (
                          <>
                            <span className="badge rounded-pill text-bg-success">
                              Completed
                            </span>{" "}
                          </>
                        ) : (
                          <>
                            {sPark > now ? (
                              <>
                                <span className="badge rounded-pill text-bg-info">
                                  Pending
                                </span>{" "}
                              </>
                            ) : (
                              <>
                                <>
                                  <span className="badge rounded-pill text-bg-warning">
                                    Ongoing
                                  </span>{" "}
                                </>
                              </>
                            )}
                          </>
                        )}
                      </td>
                      <td>
                        <td>
                          {record.is_complete ? (
                            <>
                              <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() => handleReview(record.id)}
                              >
                                Review
                              </button>

                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(record.id)}
                              >
                                Delete
                              </button>
                            </>
                          ) : (
                            <>
                              {sPark > now ? (
                                <>
                                  <p>Parking In Pending</p>
                                </>
                              ) : (
                                <>
                                  <button
                                    className="btn btn-success btn-sm me-2"
                                    onClick={() => handleGetCar(record.id)}
                                  >
                                    GetCar
                                  </button>
                                </>
                              )}
                            </>
                          )}
                        </td>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
