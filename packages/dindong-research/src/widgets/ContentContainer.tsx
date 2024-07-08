import { Container, ContainerProps } from "@mui/material";
import React from "react";

//
//
//

interface ContentContainerProps extends ContainerProps {
  children: React.ReactNode;
}

//
//
//

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }} {...props}>
      {children}
    </Container>
  );
};

export default ContentContainer;
