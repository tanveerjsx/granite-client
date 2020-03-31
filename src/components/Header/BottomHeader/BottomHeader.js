import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowseCategories from './BrowseCategories';
import './style.css';

class BottomHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bottomHeader">
        <div id="browseDropdown">
          <BrowseCategories data={this.props.categories}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.products.categories
  }
}
export default connect(mapStateToProps)(BottomHeader);