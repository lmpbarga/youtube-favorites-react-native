import { Box } from "native-base";
import styled from "styled-components/native";

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const HeaderLogoContainer = styled(Box)``;

export const HeaderOptionsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderOption = styled(Box)`
  margin-right: 16px;
`;
