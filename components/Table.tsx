import * as React from "react";

import Paper from "@mui/material/Paper";
import Tags from "./Tags";
import Actions from "./Actions";
import { Typography } from "@mui/material";
import {
  CheckCircle,
  ClockCountdown,
  FunnelSimple,
  Warning,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "kNr", headerName: "K-Nr.", width: 100 },
  { field: "firma", headerName: "Firma", width: 250 },
  { field: "adresse", headerName: "Adresse", width: 200 },
  { field: "gebNr", headerName: "GEB-Nr.", width: 120 },
  {
    field: "tags",
    renderHeader: () => (
      <Typography variant="h6">
        Tags <FunnelSimple size={16} />
      </Typography>
    ),
    width: 450,
    renderCell: (params: GridCellParams) => {
      const tagsValue = params.value as string;
      return <Tags tags={tagsValue} />;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params: GridCellParams) => {
      const value = params.value as string;

      if (value == "Bewilligung abgelehnt") {
        return (
          <Typography variant="h6">
            <Warning size={16} color="red" /> {value}
          </Typography>
        );
      } else if (value == "Bewilligung ausstehend") {
        return (
          <Typography variant="h6">
            <ClockCountdown size={16} color="orange" /> {value}
          </Typography>
        );
      } else {
        return (
          <Typography variant="h6">
            <CheckCircle size={16} color="green" /> {value}
          </Typography>
        );
      }
    },
  },
  {
    field: "aktion",
    headerName: "Aktion",
    renderCell: () => <Actions />,
    width: 100,
  },
];

const paginationModel = { page: 0, pageSize: 5 };
async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
const DataTable = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const url =
      "https://api.fakend.fyi/D32useV7yREg7qJdgHda/WErG9kjpwbZepnDxkkxD/organizations";
    getData(url).then((data) => {
      console.log(data);
      setRows(data.payload.data);
    });
  }, []);

  return (
    <Paper sx={{ height: "100%", margin: "1.6rem 0", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          fontSize: "1.4rem",
          "& .MuiIconButton-root svg,& .MuiTablePagination-root p,& .MuiTablePagination-root .MuiInputBase-root,& .MuiTablePagination-root .MuiInputBase-root svg":
            {
              fontSize: "1.4rem",
            },
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
