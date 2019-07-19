import React from 'react'
import PropTypes from 'prop-types'

class MonthPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleDropdown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { year, month } = this.props
        const { isOpen } = this.state
        const monthRange = myRange(1, 12)
        const yearRange = myRange(2010, 9)

        return (
            <div className='dropdown month-picker-component'>
                <h4>Hello Word</h4>
                <button className='btn btn-lg btn-secondary dropdown-toggle'
                        onClick={this.toggleDropdown}>
                    {year}年 {padLeft(month)}月
                </button>
                { isOpen &&
                    <div className='dropdown-menu' style={{display: 'block'}}>

                        <div className='row'>

                            <div className='col border-right'>
                                {
                                    yearRange.map((yearNumber, index) =>
                                        <a key={index} className='dropdown-item'
                                            href='#'
                                        >
                                            {yearNumber} 年
                                        </a>
                                    )
                                }
                            </div>

                            <div className='col'>
                                {
                                    monthRange.map((monthNumber, index) =>
                                        <a key={index} className='dropdown-item active'
                                           href='#'
                                        >
                                            {monthNumber} 月
                                        </a>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                }

            </div>
        )
    }
}

const padLeft = (month) => {
    return month < 10 ? '0' + month : month
}

const myRange = (start, size) => {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr[i] = start + i
    }
    return arr
}

const isEqualItemStyle = (number1, number2) => {
    return number1 === number2 ? 'dropdown-item active' : 'dropdown-item'
}

export default MonthPicker