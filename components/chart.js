import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';



export default class Chart extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){

	}
	render () {
		let selected = this.props.selected;
		let data= {};
		for(let i in selected){
			if (data[ selected[i]["category-code"] ] == undefined ){
				data[ selected[i]["category-code"] ] = {name:selected[i]["category-code"] , value : 0};
			}
			data[ selected[i]["category-code"] ] = {name:selected[i]["category-code"] , value : data[ selected[i]["category-code"] ].value + selected[i].gstVal};
		}
		let cdata = [];
		for( let i in data){
			cdata.push(data[i]);
		}
		console.log(cdata);
	  	return (
	    	<PieChart width={800} height={400}>
	        	<Pie data={cdata} cx={200} cy={200}innerRadius={40} outerRadius={80} fill="#82ca9d"/>
				<Tooltip/>
	       </PieChart>
	    );
    }
}
