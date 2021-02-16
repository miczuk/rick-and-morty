import React from "react";
import Typography from "@material-ui/core/Typography";

type Data = {
  label: string;
  value: string;
};

type InformationListProps = {
  data: Data[];
};

const InformationList: React.FunctionComponent<InformationListProps> = ({
  data,
}) => {
  return (
    <>
      {data.map(({ label, value }) => (
        <React.Fragment key={label}>
          <Typography variant="subtitle1" color="textSecondary">
            {label}
          </Typography>
          <Typography gutterBottom variant="h6">
            {value}
          </Typography>
        </React.Fragment>
      ))}
    </>
  );
};

export default InformationList;
