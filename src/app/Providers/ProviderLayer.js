import App from '../App'
import DataProvider from './DataProvider'

export const ProviderLayer = () => {
  
  return (
    <DataProvider>
      <App/>
    </DataProvider>
  )
}