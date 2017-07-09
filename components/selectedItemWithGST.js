import React from 'react';

export default class SelectedItemGST extends React.Component{
	constructor(){
		super();
	}
	getPercent(data){
		let gst = data["gst-rate"];
		let old = data["old-rate"];
		let colorClass = "dot red";
		if (old > gst)
			colorClass = "dot green";
		let percent = Math.abs(gst - old);
		return (
			<span>
				<b>{percent} %</b>
				<span className={colorClass}></span>
			</span>
		);
	}
    render(){
        return(
            <div className="row item">
				<div className="col-lg-3">
                	<p>{this.props.d["product-label"]}</p>
				</div>
                <div className="col-lg-4">
                	<p><input type="number"  value={this.props.d["currentVal"]} onChange={(e) => this.props.changeVal(this.props.keyProp, e)}/></p>
				</div>

                <div className="col-lg-3">
					{this.props.d["gstVal"]}
				</div>

                <div className="col-lg-2">
					{this.getPercent(this.props.d)}
                </div>
            </div>
        );
    }
}
