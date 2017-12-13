import React from 'react';
import { Tabs as RMCTabs, DefaultTabBar as RMCDefaultTabBar } from 'rmc-tabs/lib/index.native';
import Styles from './style';
export default class Tabs extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.renderTabBar = (props) => {
      const { renderTab } = this.props;
      return (
        <RMCDefaultTabBar
          styles={Styles}
          {...props}
          renderTab={renderTab}
        />
      )
    }
  }

  render () {
    return (
      <RMCTabs
        styles={Styles}
        renderTabBar={this.renderTabBar}
        {...this.props}
      />);
  }
}
Tabs.DefaultTabBar = RMCDefaultTabBar;
Tabs.defaultProps = {};
