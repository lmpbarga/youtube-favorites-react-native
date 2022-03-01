import { Box } from "native-base";
import React from "react";

export const SizedBox = ({ height, width }: SizedBoxProps) => (
  <Box style={{ height, width }} />
);
