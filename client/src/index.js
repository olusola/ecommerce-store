import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StripeProvider } from 'react-stripe-elements'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import masterReducer from '../src/redux/reducers/master'
const store = createStore(masterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const client = new AWSAppSyncClient({
  url: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  region: process.env.REACT_APP_GRAPHQL_REGION,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: process.env.REACT_APP_APPSYNC_APIKEY
  }
})

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Provider store={store}>
        <BrowserRouter>
          <StripeProvider apiKey={process.env.REACT_APP_KEY_PUBLISHABLE}>
            <App />
          </StripeProvider>
        </BrowserRouter>
      </Provider>
    </Rehydrated>
  </ApolloProvider>
)

const rootElement = document.getElementById("root")
ReactDOM.render(<WithProvider />, rootElement)
registerServiceWorker()
