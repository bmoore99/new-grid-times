import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: var(--color-gray-300);
  }
`;

const MarketsSection = styled.section`
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(5, 220px);
    overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
