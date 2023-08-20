import React, {memo} from "react";

type ItemProps = {
  id: number;
  value: string;
  handleChange: (id: number, value: string) => void;
};

export const Item: React.FC<ItemProps> = memo(({ id, value, handleChange }) => {
  return (
    <form className='item'>
      <h5 className='item-render'>Re-render {(Math.random() * 100).toFixed()}</h5>
      <label className='item-label' htmlFor='text'>Item {id}</label>
      <input
        className='item-input'
        placeholder='Enter text'
        type='text'
        name='text'
        id='text'
        value={value}
        onChange={e => handleChange(id, e.target.value)}
      />
    </form>
  );
});
