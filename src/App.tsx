import React, {useCallback} from 'react';
import {Footer, Header, Item} from './components';

function App() {
  const [itemsValues, setItemsValues] = React.useState<ItemsValues>([
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ]);

  const handleChange = useCallback((id: number, value: string) => {
    setItemsValues((prevItemsValues) => {
      return prevItemsValues.map((item) => {
        if (item.id === id) {
          return { ...item, value };
        }
        return item;
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main className='app-items'>
        {itemsValues.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            value={item.value}
            handleChange={handleChange}
          />
        ))}
      </main>
      <Footer itemsValues={itemsValues} />
    </div>
  );
}

export default App;

export type ItemsValues = {
  id: number;
  value: string;
}[];
