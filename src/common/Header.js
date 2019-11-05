import React,{Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';


import './Header.css';
import logo from '../assets/images/logo.png';
import { InputAdornment } from '@material-ui/core';


const styles = (theme => ({

    searchInput:{
        "padding":"0px 16px",
    },
}))


class Header extends Component{
    constructor(){
        super()
        this.state = {
            searchText:""
        }
    }

    inputSearchTextChangeHandler = (event) => {
        this.setState({
            ...this.state,
            searchText:event.target.value,
        })
    }

    render(){
        const {classes} = this.props
        return(
            <header className = "app-header" >
                <img id = "logo" src={logo} alt="Logo"/>
                <div className="header-search-box">
                    <InputBase className={classes.searchInput} placeholder="Search events..."
                        value={this.state.searchText}
                        fullWidth
                        startAdornment={
                            <InputAdornment style={{paddingRight:'8px'}}>
                                <SearchIcon/>
                            </InputAdornment>
                        }
                        onChange={this.inputSearchTextChangeHandler}
                    />
                    
                </div>
            </header>
        )
    }





}

export default withStyles(styles) (Header);