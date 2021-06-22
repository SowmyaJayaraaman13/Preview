import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {


  /* To remove server side injected css */
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
