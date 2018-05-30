import React, { Component } from "react";
import { Drawer, Text, View } from "native-base";
import SideBar from "./sideBar";

export default class HamburgerMenu extends Component {
	render() {
    	closeDrawer = () => {
      		this.drawer._root.close();
    	};
    	openDrawer = () => {
      		this.drawer._root.open();
    	};
    	return (
      		<Drawer
        		ref={ref => {
          			this.drawer = ref;
        		}}
        	content={<SideBar navigator={this.navigator} />}
       	 	onClose={() => this.closeDrawer()}
      		/>
    	);
  	}
}
