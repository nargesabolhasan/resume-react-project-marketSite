import React, { useMemo, useState } from "react";
import useGetAxios from "../../axios/useGetAxios";
import Pagination from "@mui/material/Pagination";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const PaginationBackend = () => {
  const limit = useMemo(() => 3, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useGetAxios(
    `/products?_page=${activePage}&_limit=${limit}}`
  );
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <tbody>
            {data?.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>$ {record.price}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        variant="outlined"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(49 / limit)}
        onChange={(_, page) => setActivePage(page)}
      />
    </div>
  );
};

export default PaginationBackend;

//data?.headers["x-total-count"];
