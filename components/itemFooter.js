import React from 'react';
import Chart from './chart';
export default class ItemFooter extends React.Component {
	calcTotal(selected){
		let currentTotal = 0;
		let gstTotal = 0;
		let percent = 0;
		for (let i in selected){
			currentTotal = currentTotal + Number(selected[i].currentVal);
			gstTotal = gstTotal + Number( selected[i].gstVal );
		}
		percent = (currentTotal - gstTotal) / currentTotal * 100;
		percent = Math.floor(percent * 10) / 10;
		let colorClass = "dot green";
		if (percent < 0){
			percent = -percent;
			colorClass = "dot red";
		}

		if(isNaN(percent)){
			//console.log(percent);
			percent = 0;
		}
		return (
			<div className="row list-footer">
				<div className="col-md-3">
					Total
				</div>
				<div className="col-md-4">
					{currentTotal}
				</div>
				<div className="col-md-3">
					{gstTotal}
				</div>
				<div className="col-md-2">
					<span>
						<b>{percent} %</b>
						<span className={colorClass}></span>
					</span>
				</div>
			</div>
		);
	}
	render(){
		return (
			<span>
				{ this.calcTotal(this.props.selected) }
				<Chart selected={this.props.selected}/>
			</span>
		);
	}
}
