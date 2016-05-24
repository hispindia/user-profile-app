import React from 'react';
import log from 'loglevel';

import settingsActions from './userSettingsActions';
import { categories } from './userSettingsCategories';

import HeaderBar from 'd2-ui/lib/header-bar/HeaderBar.component';
import Sidebar from 'd2-ui/lib/sidebar/Sidebar.component';

import MuiThemeMixin from './mui-theme.mixin.js';
import AppTheme from './theme';

export default React.createClass({
    propTypes: {
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
    },

    getInitialState() {
        return {
            category: 'profile',
            snackbarMessage: '',
            showSnackbar: false,
            formValidator: undefined,
        };
    },

    mixins: [MuiThemeMixin],


    getChildContext() {
        return {
            d2: this.props.d2,
        };
    },

    componentDidMount() {
        this.subscriptions = [];

        /* eslint-disable complexity */
        this.subscriptions.push(settingsActions.setCategory.subscribe((arg) => {
        	console.log(arg);
            const category = arg.data.key || arg.data || categoryOrder[0];
            this.setState({ category });
        }));
        /* eslint-enable complexity */

        this.subscriptions.push(settingsActions.showSnackbarMessage.subscribe(params => {
            const message = params.data;
            this.setState({ snackbarMessage: message, showSnackbar: !!message });
        }));
    },

    componentWillUnmount() {
        this.subscriptions.forEach(sub => {
            sub.dispose();
        });
    },

    render() {

    	const styles = {
            header: {
                fontSize: 24,
                fontWeight: 100,
                color: AppTheme.rawTheme.palette.textColor,
                padding: '6px 16px',
            },
            card: {
                marginTop: 8,
                marginRight: '1rem',
            },
            cardTitle: {
                background: AppTheme.rawTheme.palette.primary2Color,
                height: 62,
            },
            cardTitleText: {
                fontSize: 28,
                fontWeight: 100,
                color: AppTheme.rawTheme.palette.alternateTextColor,
            },
            forms: {
                minWidth: AppTheme.forms.minWidth,
                maxWidth: AppTheme.forms.maxWidth,
            },
        };

        const sideBarSections = [
            { key: 'profile', label: 'Profile Settings' },
            { key: 'user', label: 'User Settings' },
        ];

        return (
            <div className="app-wrapper">
                <HeaderBar />
                <Sidebar
                    sections={sideBarSections}
                    onChangeSection={settingsActions.setCategory}
                />

                <div className="content-area" style={styles.forms}>
                    <div style={styles.header}>
                    	 {this.props.d2.i18n.getTranslation(categories[this.state.category].pageLabel)}
                    </div>
                </div>
            </div>
        );
    },
});
