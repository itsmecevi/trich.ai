import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './IndustriesCard.scss'

class IndustriesCard extends Component {
    
    render() {
        const instustriesItems = [
            {
                key: 1,
                icon: 'build',
                title: 'title here',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 2,
                icon: 'adb',
                title: 'title here',
                text: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 3,
                icon: 'add_a_photo',
                title: 'title here',
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 4,
                icon: 'cancel',
                title: 'title here',
                text: 'dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 5,
                icon: 'airplanemode_active',
                title: 'title here',
                text: 'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 6,
                icon: 'all_inclusive',
                title: 'title here',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sd do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 7,
                icon: 'attach_file',
                title: 'title here',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 8,
                icon: 'attach_money',
                title: 'title here',
                text: 'Lorem ipsum dolor sit amet, consectetur do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                key: 9,
                icon: 'card_travel',
                title: 'title here',
                text: 'Lorem ipsum dolor sit amet, consetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
        
        return (
            <div className='industries'>
                <ul className='solutions__links'>
                    <li className='solutions__links__item active'>
                        <Link to='/solutions'>industries</Link>
                    </li>
                    <li className='solutions__links__item'>
                        <Link to='/solutions/cases'>cases</Link>
                    </li>
                </ul>
                <div className="row industries__list">
                {instustriesItems.map(item =>
                    <div key={item.key} className="industries__list__item">
                        <i class="industries__list__item__icon small material-icons">{item.icon}</i>
                        <h3 className='industries__list__item__title'>{item.title}</h3>
                        <p className='industries__list__item__text'>{item.text}</p>
                    </div>
                )}
                </div>
            </div> 
        )
    }
}

export default IndustriesCard