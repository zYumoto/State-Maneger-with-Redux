import React from 'react'
import Card from './Card'

export default props =>{

    return(
        <Card title='Media dos números' green> 
           <div>
               <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
            </span>
           </div>
        </Card>
    )
}