import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import GroupTable from "../components/tables/GroupTable";
import { useQuery } from "@apollo/client";
import { GET_ALL_GROUPS } from "../graphql/groups";
import ToastNotification from "../components/ToastNotification";
import { ToastType } from "../types";

const tableHead = ['Group Name', 'Admin/s', 'Hotspot/s', 'Schedule', 'Created', 'Updated', 'Action']

const Groups: React.FC = (): JSX.Element => {
  const [toast, setToast] = useState<ToastType>({
    open: false,
    variant: "error",
    message: "",
  });

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!!) : null
  const {loading, error, data} = useQuery(GET_ALL_GROUPS, {variables: {organization: userInfo.id}})

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  useEffect(() => {
    error && setToast({...toast, message: error.message, open: true})
  }, [error])

  if (loading) return (
    <Box>
      <GroupTable rows={[]} tableHead={tableHead} />
    </Box>
  )

  if (error) {
    return (
      <Box>
        <GroupTable rows={[]} tableHead={tableHead} />
        <ToastNotification toast={toast} handleClose={handleToastClose}  />
      </Box>
    )
  }

  return (
    <Box>
      <GroupTable rows={data.getAllGroups} tableHead={tableHead} />
    </Box>
  );
};

export default Groups;
