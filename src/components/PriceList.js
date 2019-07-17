import React, { Component } from 'react'

export default class PriceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: props.items,
            onModifyItem: props.onModifyItem,
            onDeleteItem: props.onDeleteItem,
        }
    }

    render() {
        return (

            <div>
                <h1>这个是自定义组件</h1>
                <lu className="list-group list-grop-flush">
                    {
                        this.state.items.map((item) => (
                            <li className="list-group-item d-flex
                                justify-content-between align-items-center" key={item.id}>

                                <span className="col-1 badge badge-primary">
                                    {item.category.name}
                                </span>

                                <span className="col-5">
                                    {item.title}
                                </span>

                                <span className="col-2 font-weight-bold">
                                    {item.category.type === "income" ? '+' : '-'}
                                    {item.price}元
                                </span>

                                <span className="col-2">
                                    {item.date}
                                </span>

                                <button className="col-1 btn btn-primary"
                                        onClick={() => {this.state.onModifyItem(item)}}
                                >
                                    编辑
                                </button>

                                <button className="col-1 btn btn-danger"
                                        onClick={() => {this.state.onDeleteItem(item)}}
                                >
                                    删除
                                </button>

                            </li>
                        ))
                    }
                </lu>
            </div>
        );
    }
}
