import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
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

const columns = [
  { field: "kNr", headerName: "K-Nr.", width: 100 },
  { field: "firma", headerName: "Firma", width: 250 },
  { field: "adresse", headerName: "Adresse", width: 200 },
  { field: "gebNr", headerName: "GEB-Nr.", width: 120 },
  {
    field: "tags",
    headerName: (
      <Typography variant="h6">
        Tags{' '}
        <FunnelSimple size={16} />
      </Typography>
    ),
    width: 450,
    renderCell: (params) => <Tags tags={params.value} />,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      if (params.value == "Bewilligung abgelehnt") {
        return (
          <Typography variant="h6">
            <Warning size={16} color="red" /> {params.value}
          </Typography>
        );
      } else if (params.value == "Bewilligung ausstehend") {
        return (
          <Typography variant="h6">
            <ClockCountdown size={16} color="orange" /> {params.value}
          </Typography>
        );
      } else {
        return (
          <Typography variant="h6">
            <CheckCircle size={16} color="green" /> {params.value}
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
async function getData() {
  const url =
    "https://api.fakend.fyi/D32useV7yREg7qJdgHda/WErG9kjpwbZepnDxkkxD/organizations";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
    };
  }
  componentDidMount() {
    getData().then((data) => {
      console.log(data);
      this.setState({ rows: data.payload.data });
    });
  }
  render() {
    return (
      <Paper sx={{ height: "100%", margin: "1.6rem 0", width: "100%" }}>
        <DataGrid
          rows={this.state.rows}
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
  }
}

export default DataTable;
