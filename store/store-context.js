import { createContext, useState } from 'react';

const EasybankStore = createContext({
  selected: false,
  updateSelected: (newSelected) => {},
});

export function EasybankStoreProvider(props) {
  const [selectedState, setSelectedState] = useState(false);

  function updSelected(selectedData) {
    setSelectedState((prevSelectedData) => {
      return selectedData;
    });
  }

  const context = {
    selected: selectedState,
    updateSelected: updSelected,
  };

  return (
    <EasybankStore.Provider value={context}>
      {props.children}
    </EasybankStore.Provider>
  );
}

export default EasybankStore;
