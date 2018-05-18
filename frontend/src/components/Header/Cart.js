/**
 * Cart Component
 */
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Button from 'material-ui/Button';
import { Badge } from 'reactstrap';
import IconButton from 'material-ui/IconButton';

import IntlMessages from '../../util/IntlMessages';

const cartData = [
  {
    id: 1,
    productImage: require('../../assets/img/product-1.png'),
    productName: 'Refrigerator',
    poductFeature: 'Rechargeable Battery',
    productColor: '- Off white',
    price: '$50 X 2'
  },
  {
    id: 2,
    productImage: require('../../assets/img/product-2.png'),
    productName: '3DR - Solo Camera',
    poductFeature: 'HD lence',
    productColor: '- Black',
    price: '$45 X 1'
  },
  {
    id: 3,
    productImage: require('../../assets/img/product-3.png'),
    productName: 'PlayStation 4',
    poductFeature: 'HD Screen',
    productColor: '- Black',
    price: '$96 X 1'
  }
]

const Carts = () => (
  <UncontrolledDropdown nav className="list-inline-item cart-icon">
    <DropdownToggle nav className="p-0">
      <IconButton aria-label="bag">
        <i className="zmdi zmdi-shopping-cart"></i>
        <Badge color="success" className="badge-xs badge-top-right">3</Badge>
      </IconButton>
    </DropdownToggle>
    <DropdownMenu right>
      <div className="dropdown-head d-flex justify-content-between">
        <span><IntlMessages id="components.cart" /></span>
        <span>$245.00</span>
      </div>
      <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={280} autoHide>
        <ul className="list-unstyled dropdown-body">
          {cartData.map((cart, key) => (
            <li className="d-flex justify-content-between" key={key}>
              <div className="media">
                <div className="mr-15">
                  <img src={cart.productImage} alt="products" className="media-object" width="63" height="63" />
                </div>
                <div className="media-body">
                  <span className="fs-14 d-block">{cart.productName}</span>
                  <span className="fs-12 d-block text-muted">{cart.poductFeature}</span>
                  <span className="fs-12 d-block text-muted">{cart.productColor}</span>
                </div>
              </div>
              <div>
                <span className="text-muted fs-12 d-block mb-10">{cart.price}</span>
                <a href="javascript:void(0);" className="hover-close"><i className="ti-close"></i></a>
              </div>
            </li>
          ))}
        </ul>
      </Scrollbars>
      <div className="dropdown-foot d-flex justify-content-between align-items-center">
        <div>
          <Button variant="raised" color="primary" className="mr-10 mb-10 btn-xs text-white">
            <IntlMessages id="components.viewCart" />
          </Button>
          <Button variant="raised" color="secondary" className="mb-10 btn-xs text-white">
            <IntlMessages id="components.checkout" />
          </Button>
        </div>
        <span className="fw-normal text-muted fs-14">Total $245.00</span>
      </div>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default Carts;
