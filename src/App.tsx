import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
