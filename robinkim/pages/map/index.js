import { HOME_PATH } from "@/src/config/config_home";
import MapLayout from "@/src/layout/MapLayout";
import axios from "axios";

export default function MapPage({ data }) {
  return (
    <>
      <div className="sidebar">
        <input type="text" placeholder="Search" />
      </div>
      <MapLayout data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(`${HOME_PATH}/api/map`);
  const data = response.data;

  // Pass the fetched data as props to the page component
  return {
    props: {
      data: data,
    },
  };
}
