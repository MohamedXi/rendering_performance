import React, {memo} from "react";

export const Header: React.FC = memo(() => {
  return (
    <header className="app-header">
      <h1 className='app-header-title'>Parent holds the state and passes it to the item</h1>
    </header>
  );
});
