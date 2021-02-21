import React from "react";
//UI
import { Pagination } from "@material-ui/lab";
//components
import CreateJob from "../CreateJob/CreateJob";

export default function ProfileJobsTab() {
  return (
    <div>
      <div>
        <CreateJob />
      </div>
      <div>
        <Pagination
          // count={count}
          size="large"
          //   page={page}
          variant="outlined"
          shape="rounded"
          // onChange={handleChange}
        />
      </div>
    </div>
  );
}
