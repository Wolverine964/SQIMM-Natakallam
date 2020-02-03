import React from 'react'
import { Glodal, css} from 'frontity' //you'll need both to use extrnal .CSS files  
import twcss from './tailwind.css' //the path might change depending on your .js location

const exmaple = () => (
  <div>
    <h1 className="text-green-300">Hello everyone</h1>
    {/* remember it's className in React not "class" */}
    <Glodal styles={css(twcss)} /> 
    {/* Global is where all the magic Happend */}
  </div>
)