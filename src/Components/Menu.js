/*import { getQueriesForElement } from '@testing-library/react';*/
import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
  const handleClick = (c) => {
    props.updatePosts({ color: c, caption: c});
  }

    return (
      <div className="colorOptions">
          <Color color = "green" handleClick = {handleClick}/>
          <Color color = "blue" handleClick = {handleClick}/>
          <Color color = "red" handleClick = {handleClick}/>
          <Color color = "pink" handleClick = {handleClick}/>
      </div>
    );
}

export default Menu;