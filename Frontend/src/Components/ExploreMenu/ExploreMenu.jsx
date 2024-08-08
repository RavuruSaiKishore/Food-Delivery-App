import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse featuring a delectable array of dishes creafted with the finest ingredients and culinary expertise. our mission is to satify your carvings and elevate your dining exprience</p>
      <div className='explore-menu-list'>
        { menu_list.map((item, index) =>{
            return (    // if we click on any of the item that is stored in the state that says the setcategory state function
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key= {index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
