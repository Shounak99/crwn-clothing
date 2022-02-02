import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection=({title,routeName,items})=>(
    
    <div className='collection-preview'>
      
        <div className='title'><h1>{title}</h1></div>
        <div className='preview'>{items.filter((props,idx)=>idx<4).map(props=>
        (<CollectionItem key={props.id} name={props.name} imageUrl={props.imageUrl} price={props.price}/>))}
        </div>
    </div>


)
export default PreviewCollection