import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection-component/preview.collection.component';
class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
           shop:SHOP_DATA
        }

    }

   
    render(){
        console.log(this.state.shop);
       
        return(
            <div>
                {
                    this.state.shop.map(({id,title,routeName,items})=>
                        <PreviewCollection key={id} title={title} routeName={routeName} items={items} />
                    )
                }
                

                
             </div>

        )
    }

}
export default Shop;