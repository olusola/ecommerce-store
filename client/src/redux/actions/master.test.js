import configureStore from 'redux-mock-store';
import * as selectActions from './master';

const mockStore = configureStore();
const store = mockStore();

describe('select Actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  describe('select addToBasket', () => {
    test('get details of selected product', () => {
      const expectedActions = [{
          type: 'ADD_TO_BASKET',
          item: {
            id: '489b55c0-83ac-4b5f-8edd-b58bebda2603',
            title: 'coke',
            price: 5
          }
      }]

      const mockData = {
        id: '489b55c0-83ac-4b5f-8edd-b58bebda2603',
        title: 'coke',
        price: 5
      }

      store.dispatch(selectActions.addToBasket(mockData))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})