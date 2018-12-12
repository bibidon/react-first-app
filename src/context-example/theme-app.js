import React, {Fragment} from 'react';

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from "./theme-toggler-button";

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class ThemeApp extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    /*render() {
        return (
            <Fragment>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemedButton/>
                </section>
            </Fragment>
        );
    }*/
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content/>
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default ThemeApp;
