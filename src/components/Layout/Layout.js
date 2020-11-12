import React, {Component} from 'react';

import Swiper from '../Swiper/Swiper';

class Layout extends Component {
	// state = {
	// 	showSideDrawer: false
	// }

	// sideDrawerCloseHandler = () => {
	// 	this.setState({ showSideDrawer: false });
	// }

	// sideDrawerToggleHandler = () => {
	// 	this.setState( prevState => { 
	// 		return { showSideDrawer: !this.state.showSideDrawer };
	// 	});
	// }

	render() {
		return (
			<>
				<nav class="flex items-center justify-between flex-wrap bg-blue-100 p-6">
					<div class="flex items-center flex-shrink-0 text-black mr-56">
						<span class="font-bold text-3xl ml-8">Fashion.</span>
					</div>

					<div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
				        <div class="text-xl sm:flex-grow ml-56">
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-purple mr-6"
				          >
				            Home
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-purple mr-6"
				          >
				            Shop
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-purple mr-6"
				          >
				            Collection
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-purple"
				          >
				            Contact Us
				          </a>
				        </div>
				        <div>

				        	<svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
				          	
				          	<svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>

				          	<svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
				    	</div>
			      	</div>
		    	</nav>

		    	<div class="float-left ml-20 mt-56">
		    		<p class="text-2xl">Smart Products</p> <br/>
					<h1 class="text-4xl">Winter Offer 2020 Collection</h1>
				</div>

		    	<div class="float-right mt-4">
					<img src="1.png" />
				</div>


			</>
		);
	}
}

export default Layout;