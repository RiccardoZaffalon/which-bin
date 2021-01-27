import Link from 'next/link';
import scrape from '../../helpers/scrape';

export default function Bins({bins, zoneName}) {
    return (
        <>
          <Link href="/">
            <a>Home</a>
          </Link>
          <h3>Zona: <strong>{ zoneName }</strong></h3>
          <h4>Domani esce:</h4>
          { bins && bins.map((el, i) => {
              return <li key={i}>{el}</li>
          })}
        </>
    )
}

export async function getServerSideProps({params}) {
  const selector = `#svuotamenti_${params.id} tr td`;
  const bins = await scrape(selector);

  if (!bins) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      bins,
      zoneName: 'Casale sul Sile'
    }
  }
}