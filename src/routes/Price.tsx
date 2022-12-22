import styled from "styled-components";

interface Pricesprops {
  tickersData?: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}

function Price({ tickersData }: Pricesprops) {
  return (
    <>
      <Section>Percent_change</Section>
      <Items>
        <Item>
          15minuit
          <span>{tickersData?.quotes.USD.percent_change_15m}%</span>
        </Item>
        <Item>
          30minuit
          <span>{tickersData?.quotes.USD.percent_change_30m}%</span>
        </Item>
        <Item>
          6Hour
          <span>{tickersData?.quotes.USD.percent_change_6h}%</span>
        </Item>
        <Item>
          12Hour
          <span>{tickersData?.quotes.USD.percent_change_12h}%</span>
        </Item>
        <Item>
          7Day
          <span>{tickersData?.quotes.USD.percent_change_7d}%</span>
        </Item>
        <Item>
          30Day
          <span>{tickersData?.quotes.USD.percent_change_30d}%</span>
        </Item>
      </Items>
    </>
  );
}

export default Price;

const Section = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0px;
  margin: 20px 0px;
  border-radius: 20px;
  text-align: center;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Item = styled.span`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  margin: auto;
  font-size: 14px;
  color: ${(props) => props.theme.accentColor};
  span {
    font-size: 2em;
    margin-top: 1em;
  }
`;
