import React, { useState } from "react";
import { allCategoryAPI } from "../api/allapi";
import { LoadingComponent } from "./utils/LoadingComponent";

export const CategoryList = () => {
  const [allCat, setAllCat] = useState([]);
  const [loading, setLoading] = useState(false);

  const AllCategory = async () => {
    try {
      setLoading(true);
      const data = await allCategoryAPI();
      if (data) {
        setLoading(false);
        setAllCat(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useState(() => {
    AllCategory();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          {/* <table className="table tble m-2 table-bordered table-hover">
            <thead className="">
              <tr>
                <th>Name</th>
                <th>Price per Hour (TK)</th>
                <th>Total Slots</th>
               
              </tr>
            </thead>
            <tbody>
              {allCat.map((category, index) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>TK {category.price_p_h}</td>
                  <td>{category.total_slots}</td>
                
                </tr>
              ))}
            </tbody>
          </table> */}

          <div className="container-fluid my-4">
            <table className="table table-striped table-bordered table-hover m-2">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Price per Hour (TK)</th>
                  <th>Total Slots</th>
                </tr>
              </thead>
              <tbody>
                {allCat.map((category, index) => (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>TK {category.price_p_h}</td>
                    <td>{category.total_slots}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};
