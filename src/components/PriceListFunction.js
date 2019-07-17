import React from 'react'
import PropTypes from 'prop-types'

// 函数式无状态 组件编写 https://www.cnblogs.com/wonyun/p/5930333.html
/*
无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，大大的增强了编写一个组件的便利，除此之外无状态组件还有以下几个显著的特点：

组件不会被实例化，整体渲染性能得到提升
因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
组件不能访问this对象
无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
组件无法访问生命周期的方法
因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用
无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，所以只要有可能，尽量使用无状态组件。
*/

import IosLaptop from 'react-ionicons/lib/IosLaptop'

const PriceListFunction = ({ items, onModifyItem, onDeleteItem}) => {

    return (
        <lu className="list-group list-grop-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex
                    justify-content-between align-items-center" key={item.id}>

                        <span className="col-1">
                            <IosLaptop onClick={() => alert('Hi!')} fontSize="40px" />
                            {/*{item.category.name}*/}
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
                                onClick={() => {onModifyItem(item)}}
                        >
                            编辑
                        </button>

                        <button className="col-1 btn btn-danger"
                                onClick={() => {onDeleteItem(item)}}
                        >
                            删除
                        </button>


                    </li>
                ))
            }
        </lu>
    )
}

PriceListFunction.defaultProps = {
    items: [],
    onModifyItem: () => {},
    onDeleteItem: () => {},
};

PriceListFunction.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default PriceListFunction;