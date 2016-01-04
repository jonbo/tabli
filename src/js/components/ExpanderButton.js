'use strict';

import * as React from 'react';
import {addons} from 'react/addons';
import Styles from './styles';
import * as Util from './util';
const {PureRenderMixin, Perf} = addons;

// expand / contract button for a window
const ExpanderButton = React.createClass({
  mixins: [PureRenderMixin],
  handleClicked: function(event) {
    var nextState = !this.props.expanded;
    this.props.onClick(nextState);
    event.stopPropagation();
  },

  render: function() {
    var expandStyle = this.props.expanded ? Styles.windowCollapse : Styles.windowExpand;
    var buttonStyle = Util.merge(Styles.headerButton, expandStyle);
    return (
      <button style={buttonStyle}
              onClick={this.handleClicked} />
    );
  },
});

export default ExpanderButton;
