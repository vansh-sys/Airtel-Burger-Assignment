/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OrderButton from './OrderButton';
import { fetchMenu, addProduct, onSearch } from '../actions/cafeActions';
import TotalQuantityCard from './TotalQuantityCard';
import SearchBox from './SearchBox';
import FoodRating from './FoodRating';
class BurgerMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            menu:[],
            totalPrice:0,
            totalQuantity:0,
            summaryPage:false,
            order:[]
        }
    }

    componentDidMount(){
        this.props.fetchMenu();
    }

    summaryPage = e => {
        this.setState({
            summaryPage:true
        })
    }

    handleClick = row => {
        this.props.addProduct(row)
        this.setState({
            order:this.props.order.items,
            totalPrice : this.props.order.totalPrice,
            totalQuantity : this.props.order.totalQuantity
        })
      };

    onSearch = e =>{
        //console.log("serachbox",e.target.value)
        this.props.onSearch(e.target.value)
    }
    render(){
        const classes = makeStyles({
            table: {
              minWidth: 100,
            },
            container:{
                width : 'auto',
            },
            searchBox:{
                textAlign: 'initial' 
            }
          });
          //console.log("state",this.state)
        return(
            <Paper className={classes.container}>
            <div style={{textAlign:'initial'}}><SearchBox handleOnChange={this.onSearch}/></div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Burger Type</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                    <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                    <TableCell align="right">Category&nbsp;</TableCell>
                    <TableCell align="left">Rating</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.props.menu && this.props.menu.map(row => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.ingredients}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.category}</TableCell>
                        <TableCell>
                            <FoodRating rating={row.rating}/>
                        </TableCell>
                        <TableCell>
                            <OrderButton click={() => this.handleClick(row)} />
                        </TableCell>
                        
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            
            <TotalQuantityCard orderSummary={this.state.order} totalQuantity = {this.state.totalQuantity} totalPrice={this.state.totalPrice} click={this.placeOrder}/>
            </Paper>
                );
            }
}

const mapStateToprops = (state) => {
    const data = state
    return data;
  };

export default connect(mapStateToprops,{fetchMenu,addProduct,onSearch})(BurgerMenu);