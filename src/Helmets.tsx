import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface RouteState {
  name: string;
}
interface HelmetsProps {
  loading: boolean;
  infoData?: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
  };
}

const Helmets = ({ loading, infoData }: HelmetsProps) => {
  const { state } = useLocation<RouteState>();
  return (
    <Helmet>
      <title>
        {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
      </title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    </Helmet>
  );
};

export default Helmets;
