import { useContext, useEffect } from "react";
import Router from "next/router";
import Context from "../context/zone";
import { getZones } from "../helpers/zones";

export default function Home({ zones }) {
  const { zone, setZone } = useContext(Context);

  function handleOnSubmit(e) {
    if (zone) {
      Router.push(`/zone/${zone}`);
    }
    e.preventDefault();
  }

  return (
    <div className="bins">
      <form onSubmit={handleOnSubmit}>
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          <option value="">Seleziona la tua zona</option>
          {zones.map((el, i) => {
            return (
              <option value={el.id} key={el.id}>
                {el.name}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Cosa esce domani?" disabled={!zone} />
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const zones = getZones();

  return {
    props: {
      zones,
    },
  };
}
