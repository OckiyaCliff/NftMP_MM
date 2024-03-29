import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/**
 * The chain ID 11155111 represents the Ethereum Sepolia Network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [11155111]
const connectors = {
  injected: {},
}


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
