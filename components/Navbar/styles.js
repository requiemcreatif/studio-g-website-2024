import { Box, IconButton, styled } from "@mui/material";

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
`;

export const CloseButton = styled(IconButton)`
  color: inherit;
  transition: transform 1s;

  &:hover {
    color: #d38a23;
    transform: rotate(180deg);
  }
`;
