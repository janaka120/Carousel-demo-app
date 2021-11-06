import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../reducers/RootReducer';
// import Toaster from '../scenes/about/components/Toaster';

export const renderScreen = (page: React.ReactNode) => {
  return render(<Provider store={store}>{page}</Provider>);
};

// export const renderWithNavigationScreen = () => {
//   store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   sagaMiddleware.run(watchAll);

//   return render(
//     <Provider store={store}>
//       <NavigationContainer>
//         <Navigator />
//         <Toaster />
//       </NavigationContainer>
//     </Provider>,
//   );
// };
