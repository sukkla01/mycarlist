import React, { Component } from 'react';
class Header extends Component {

    constructor(props) {
        super(props)
        this.handleHeaderClick = this.handleHeaderClick.bind(this)
    }
    handleHeaderClick() {
        alert(this.props.currentUser)
    }
    render() {
        let { currentUser, isLoggedIn } = this.props
        // currentUser = "Logg in as " + currentUser

        return (
            <div>
                <nav class="navbar fixed-top navbar-light bg-secondary">
                    <a class="navbar-brand text-white" href="#">React MyCar</a>
                </nav>
            </div>
        );
    }
}

export default Header;