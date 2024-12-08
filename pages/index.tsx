import DataTable from "@/components/Table";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { CaretDown } from "@phosphor-icons/react";
export default function Home() {
  return (
    <>
    <Head>
      <title>Class Based Migration</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <main>
        <Stack
          gap={2}
          sx={{ paddingTop: "1.6rem", paddingX: "2.4rem", height: "100%" }}
        >
          <Stack sx={{ paddingX: "1.6rem" }}>
            <Typography variant="h1">Organisationen</Typography>
            <Typography variant="h6" color={'#546E7A'}>
              Subhead Optional: Angaben zur Organisation
            </Typography>
          </Stack>
          <TextField
            label="Suche"
            sx={{
              width: {xs:'100%',sm:"18%"},
              alignSelf: "flex-end",
              
            }}
            
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CaretDown size={20} />
                </InputAdornment>
              ),
            }}
          />
          <DataTable />
        </Stack>
      </main>
      <footer></footer>
    </div>
  </>

  );
}
