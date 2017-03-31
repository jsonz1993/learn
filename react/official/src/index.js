import React from 'react';
import ReactDOM from 'react-dom';

/*
FilterableProductTable 主体
SearchBar 用户输入反馈模块
ProductTable 用户过滤显示的 数据集合
ProductCategoryRow 为每个分类显示一个列表头
ProductRow 每个商品显示一行
 */

// 测试按钮
const ButtonTest = React.createClass({
  handleClick(e) {
    console.log(e.target);
  },

  render() {
    return (<button onClick={this.handleClick}>按钮</button>)
  }
})

// 分类列表头
const ProductCategoryRow = React.createClass({
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

// 商品行
const ProductRow = React.createClass({
  render() {
    const name = this.props.product.stocked?
      this.props.product.name:
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

const ProductTable = React.createClass({
  render() {
    let rows = [],
      lastCategory = null;
    this.props.products.forEach(product=> {
      if (!product.name.includes(this.props.filterText) || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

const SearchBar = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
});

const FilterableProductTable = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText,
      inStockOnly
    });
  },

  render() {
    return (
      <div>
        <ButtonTest />
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
});

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// 接下来构建state 确保最少使用state，比如TODO-List 可以用 list.length代替所有项的总和，不用特地去开一个state.

// 原始的商品列表，用户输入的搜索文本，复选框的值商品的过滤列表
// 他们通过props从父级传递来的吗？ 如果是，它可能不是state。
// 随时间变化吗，如果不是，可能不是state
// 可以基于其他任何组件的state或prop计算出来？可以的话 可能不是state

//  商户列表 props; 搜索和复选框 state; 过滤的商品可以通过原始列表和搜索文本复选框计算出来 所以不是state；
//  用户输入的搜索文本 && checkbox

// 确定哪些组件要基于 state 来渲染内容
// 找到一个共同的拥有者组件，将 state 放于此处


// React Element
const ReactEChild = React.createElement('li', null, 'Text Content');
const ReactE = React.createElement('ul', {className: 'my-list'}, ReactEChild);
ReactDOM.render(
  ReactE,
  document.getElementById('root')
);

// Factories
// const createFactory= type=> React.createElement.bind(null, type);
// const factoriesDiv = React.createFactory('div');
// const factoriesRoot = div({className: 'my-div'});
// ReactDOM.render(
//   factoriesRoot ,
//   document.getElementById('root')
// );









ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
