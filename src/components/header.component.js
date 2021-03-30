import React from 'react';
// css

function AnchorButton(props) {
    return (
        <a
            className="btn btn-light mr-2"
            href={props.url}
            title="Github repository"
            target="_blank"
            rel="noopener noreferrer"

        >
            {props.text}
        </a>
    );
}

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark shadow">
                <span className="navbar-brand mb-0 h1 mr-auto">{this.props.title}</span>
                <AnchorButton url="https://github.com/UlisesPeguero/react-crud-demo" text="Code"/>
            </nav>
        );
    }

}

export default Header;