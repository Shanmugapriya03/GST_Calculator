import React from 'react';
import {render} from 'react-dom';
import Display from './display';
import SelectedItem from './selectedItem';
import SelectedItemGST from './selectedItemWithGST';
import axios from 'axios';
import ItemHead from './itemHead';
import ItemFooter from './itemFooter';
var DATA = require("./data.json");
export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {selected:[], showGST:false};
        this.display = this.display.bind(this);
		this.select = this.select.bind(this);
		this.displaySelected = this.displaySelected.bind(this);
		this.displaySelectedGST = this.displaySelectedGST.bind(this);
		this.changeItemVal = this.changeItemVal.bind(this);
		this.showSecond = this.showSecond.bind(this);
		this.toggleGST = this.toggleGST.bind(this);
    }
    display(){
        var items=[];
		var allItems = {};
        for (let i in this.state.data){
            //console.log(i);
            	//items.push(<Display d={this.state.data[i]} key={i} keyProp={i} onselect={this.select}/>);
				if ( allItems[ this.state.data[i]["category-label"] ] == undefined){
					allItems[ this.state.data[i]["category-label"] ] = [];
				}
				allItems[ this.state.data[i]["category-label"] ].push(<Display d={this.state.data[i]} key={i} keyProp={i} onselect={this.select}/>)
        }
		for (let category in allItems ){
			items.push(<h1>{category}</h1>);
			for(let i in allItems[category]){
				items.push(allItems[category][i]);
			}
		}
        return items;
    }
	select(key, e){
		if (e.target.checked)
			this.setState({"selected":[...this.state.selected, this.state.data[key] ] });
		else{
			if (key > -1) {
				let array = this.state.selected;
				let temp = array[key]
				array = array.filter(item => item !== temp)
				this.setState({"selected":array });
			}
		}
	}
	changeItemVal(key, e){
		//console.log(key, e);
		let newItem = this.state.selected[key];
		newItem.currentVal = e.currentTarget.value;
		newItem.gstVal = (Number(newItem["currentVal"])) - ((newItem["currentVal"]*newItem["old-rate"])/100) + (newItem["currentVal"]*newItem["gst-rate"])/100

		newItem.gstVal = Math.round(newItem.gstVal * 100) / 100;
		let newSelected = Object.assign([], this.state.selected, {[key]: newItem});
		//console.log(newSelected);
		this.setState({"selected":newSelected});
	}
	displaySelected(){
       var items=[];
       for (let i in this.state.selected){
           //console.log(i);
           items.push(<SelectedItem d={this.state.selected[i]} key={i} keyProp={i} changeVal={this.changeItemVal}/>);
       }
       return items;
    }
	displaySelectedGST(){
       var items=[];
       for (let i in this.state.selected){
           //console.log(i);
           items.push(<SelectedItemGST d={this.state.selected[i]} key={i} keyProp={i} changeVal={this.changeItemVal}/>);
       }
       return items;
    }
	createCurrentVal(obj){
		var newObj = Object.assign({}, obj, {currentVal:0, gstVal:0});
		return newObj;
    }
    componentWillMount(){
        var self = this;
		let arr = DATA.map(this.createCurrentVal)
        self.setState({"data":arr})
    }
	toggleGST(){
		this.setState({showGST:!this.state.showGST});
	}
	showSecond(flag){
		if (flag){
			if(this.state.showGST){
				return(
					<div className="col-lg-7 list-scroll">
						<button className="btn btn-info" onClick={this.toggleGST}>Hide GST</button>
						<ItemHead />
						{this.displaySelectedGST()}
						<ItemFooter selected={this.state.selected} />
					</div>
				);
			}else{
				return(
					<div className="col-lg-7 list-scroll">
						<button className="btn btn-info" onClick={this.toggleGST}>See how GST your budget</button>
						{this.displaySelected()}
					</div>
				);
			}
		}
		else {
			return <span></span>
		}
	}
    render(){
		let BSClass = "col-md-10 col-md-offset-1 main-list";
		let flag = false;
		if(this.state.selected.length > 0){
			BSClass = "col-md-5 list-scroll"
			flag = true;
		}
        return(
            <div className="row">

                <div className={BSClass}>
					{this.display()}
				</div>
				{this.showSecond(flag)}
            </div>
        );
    }
}
