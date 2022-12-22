import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexCharts from "react-apexcharts";

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
  isDark: boolean;
}

function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<Ihistory[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 10000,
    // }
  );

  console.log(
    data?.map((price) => {
      return {
        x: new Date(price.time_close * 1000),
        y: [price.open, price.high, price.low, price.close],
      };
    })
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "coins",
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_close * 1000),
                  y: [price.open, price.high, price.low, price.close],
                };
              })!,
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
