import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, FAMILIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopHeaderLeft>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopHeaderLeft>
        <Logo />
        <DesktopHeaderRight>
          <DesktopHeaderUser>
            <Button>SUBSCRIBE</Button>
            <Link>Already a subscriber?</Link>
          </DesktopHeaderUser>
        </DesktopHeaderRight>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopHeaderLeft = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    flex: 1;
  }
`;

const DesktopHeaderRight = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

const DesktopHeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Link = styled.a`
  font-family: ${FAMILIES.serif};
  text-decoration: underline;
  font-style: italic;
  font-size: ${14 / 16}rem;
  line-height: 22px;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
