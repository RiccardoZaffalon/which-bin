import scrape from "../../helpers/scrape";
import { getZoneNameById } from "../../helpers/zones";

function List({bins}) {
  return (
    <>
      <h4>Domani esce:</h4>
      {bins &&
        bins.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
    </>
  );
}

function NoBins() {
  return (
    <>
      <h4>Domani non esce niente!</h4>
    </>
  );
}

export default function Zone({ bins, zoneName }) {
  return (
    <>
      <h3>
        Zona: <strong>{zoneName}</strong>
      </h3>
      {bins && bins.length ? <List bins={bins} /> : <NoBins />}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const selector = `#svuotamenti_${params.id} tr td`;
  const bins = await scrape(selector);

  if (!bins) {
    return {
      notFound: true,
    };
  }

  const zoneName = getZoneNameById(params.id);

  return {
    props: {
      bins,
      zoneName,
    },
  };
}
