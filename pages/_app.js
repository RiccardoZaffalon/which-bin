import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </div>
  )
}

export default MyApp
