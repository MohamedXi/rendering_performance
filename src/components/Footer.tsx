import React, {memo} from "react";
import {ItemsValues} from "../App";

type FooterProps = {
  itemsValues: ItemsValues;
}

export const Footer: React.FC<FooterProps> = memo(({itemsValues}) => {
  return (
    <footer className='app-footer'>
      <p className='app-footer-output'>{JSON.stringify(itemsValues)}</p>
    </footer>
  )
});
