import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 14px;
  display: inline-flex;
  align-items: center;

  img {
    transaction: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src="/images/logo_rb.png" width={50} height={50} alt="logo" />
          <Text
            color={useColorModeValue("grey.800", "whiteAlpha.900")}
            fontFamily="'Roboto Mono', monospace"
            fontWeight="bold"
          >
            Jordi Becerril Enriquez
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
