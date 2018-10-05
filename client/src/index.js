import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StripeProvider } from 'react-stripe-elements'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import AppSync from '../src/Config/AppSync'
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import masterReducer from '../src/redux/reducers/master'
const store = createStore(masterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey
  }
})

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Provider store={store}r>
        <BrowserRouter>
          <StripeProvider apiKey="pk_test_mvOM0bUdTZ8FxFm70Cw3oSGI">
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
