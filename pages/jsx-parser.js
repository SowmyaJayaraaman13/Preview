import React from 'react'
import fs from 'fs'
import JsxParser from 'react-jsx-parser'
import path from 'path'
import ComponentA from "../src/components/componentA";
import ComponentB from "../src/components/componentB";


function Jsxparser(props){

    return(
        <div>
            <JsxParser
            bindings={{name : "Ram", eventHandler: () => {console.log("Button is Clicked!!!!")}}}
            components={{ComponentA, ComponentB}}
            autoCloseVoidElements={true}
            jsx={`${props.data} <ComponentA data={name} /> <ComponentB eventHandler={eventHandler} />`} 
            />
            {/* <div dangerouslySetInnerHTML={{__html: `${props.data}`}} /> */}
        </div>
    )
}

export async function getStaticProps(){
    const filePath = path.join(process.cwd(),'data','form.txt')
    const data = fs.readFileSync(filePath);
    console.log(data.toString());
    return{
        props: {
            data: data.toString()
        }
    }
}

export default Jsxparser;