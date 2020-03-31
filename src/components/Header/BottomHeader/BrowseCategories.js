import React, { useState } from 'react';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as Constants from '../../../constants';

const BrowseCategories = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <Row>
      <Col sm="12">
        <Dropdown className="browseCategory" isOpen={dropdownOpen} onClick={toggle} >
          <DropdownToggle className="browseToggle" caret>
            {Constants.BROWSE_CATEGORIES.toUpperCase()}
          </DropdownToggle>
          <DropdownMenu>
            {
              props.data?.map(categoryName=>(
              <DropdownItem>{categoryName.name}</DropdownItem>
                ))
            }
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
}
export default BrowseCategories;