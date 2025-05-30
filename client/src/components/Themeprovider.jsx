import React from 'react';
import {useSelector} from 'react-redux'

function Themeprovider({children}) {

    // 3:51:61
    const {theme} = useSelector(state => state.theme);

    console.log(theme);

  return (
    <div className={theme}>

            {/* bg-[rgb(16, 23, 42)] */}
        <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16, 23, 42)] min-h-screen">

            {children}

        </div>

    </div>
  )
}

export default Themeprovider;