import { Copy, PencilSimple, Trash } from "@phosphor-icons/react";
import React from "react";
import { Stack } from "@mui/material";
const Actions = () => {
    return (
      <Stack sx={{paddingX:'0.4rem'}} gap={1}  direction='row'>
        <PencilSimple size={20} />
        <Copy size={20} />
        <Trash size={20} />
      </Stack>
    );
  }

export default Actions;


