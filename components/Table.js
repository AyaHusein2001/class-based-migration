import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Tags from "./Tags";

import Actions from "./Actions";

const columns = [
  { field: "kNr", headerName: "K-Nr.", width: 100 },
  { field: "firma", headerName: "Firma", width: 250 },
  { field: "adresse", headerName: "Adresse", width: 200 },
  { field: "gebNr", headerName: "GEB-Nr.", width: 120 },
  {
    field: "tags",
    headerName: "Tags",
    width: 450,
    renderCell: (params) => <Tags tags={params.value} />,
  },
  { field: "status", headerName: "Status", width: 200 },
  {
    field: "aktion",
    headerName: "Aktion",
    renderCell: () => <Actions />,
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    kNr: 1007232,
    firma: "A. & A. Akbarzadeh-Glattbard Swint Ltd.",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung erteilt",
  },
  {
    id: 2,
    kNr: 1007232,
    firma: "Abbraccio AG",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung abgelehnt",
  },
  {
    id: 3,
    kNr: 1007232,
    firma: "A&B Commerical Sarl",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung ausstehend",
  },
  {
    id: 4,
    kNr: 1007232,
    firma: "Abderhalden Drogerie AG",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung erteilt",
  },
  {
    id: 5,
    kNr: 1007232,
    firma: "Achtal Futter AG",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung abgelehnt",
  },
  {
    id: 6,
    kNr: 1007232,
    firma: "About Food",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung erteilt",
  },
  {
    id: 7,
    kNr: 1007232,
    firma: "AC Consulting SA",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Speiseöl und Speisefette",
    status: "Bewilligung ausstehend",
  },
  {
    id: 8,
    kNr: 1007232,
    firma: "ACRO CROCE",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung ausstehend",
  },
  {
    id: 9,
    kNr: 1007232,
    firma: "Adelfa GmbH",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Speiseöl und Speisefette",
    status: "Bewilligung erteilt",
  },
  {
    id: 10,
    kNr: 1007232,
    firma: "Aeschlimann Mühle AG",
    adresse: "Kramgasse 4, 3000 Bern",
    gebNr: "12345678",
    tags: "GEB Zucker, Lebensmittel",
    status: "Bewilligung abgelehnt",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
    };
  }
  componentDidMount() {
    this.setState({ rows: rows });
  }
  render() {
    return (
      <Paper sx={{ height: '100%',margin:'1.6rem 0', width: "100%" }}>
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
  }
}

export default DataTable;
