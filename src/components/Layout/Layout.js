import React, {Component} from 'react';

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
					<div class="flex items-center flex-shrink-0 text-black mr-6">
						<span class="font-bold text-3xl ml-8">Fashion.</span>
					</div>

					<div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
				        <div class="text-sm sm:flex-grow">
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white mr-4"
				          >
				            Home
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white mr-4"
				          >
				            Shop
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white mr-4"
				          >
				            Collection
				          </a>
				          <a
				            href="#"
				            class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white"
				          >
				            Contact Us
				          </a>
				        </div>
				        <div>
				          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</a>
				    	</div>
			      	</div>
		    	</nav>
			</>
		);
	}
}

export default Layout;