import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

interface Ihistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data, isSuccess } = useQuery<Ihistory[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 10000,
    // }
  );

  if (isLoading) return <div>is Loading....</div>;
  return (
    <div>
      {isSuccess && (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "coins",
              data: data.map((price) => {
                return {
                  x: new Date(price.time_close * 1000),
                  y: [price.open, price.high, price.low, price.close],
                };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },

            chart: {
              height: 350,
            },
            title: {
              text: "Coin Chart",
              align: "center",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
