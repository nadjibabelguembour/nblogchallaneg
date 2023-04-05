import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp


// import "@/styles/globals.css";
// import Context from "../utils/Context";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
// import Navbar from "@/components/navbar/Navbar";
import Footer from '../components/Footer'
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
// import Loading from "@/components/loading-page/Loading";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);



  if (typeof window === "undefined") {
    return <><p>Something went wrong, try again later!</p></>;
  } else {
    return (
      <SessionProvider session={session}>
          {/* <Header /> */}
          <Component {...pageProps} />
        
          <Footer />
      </SessionProvider>
    );
  }
};
export default MyApp;
