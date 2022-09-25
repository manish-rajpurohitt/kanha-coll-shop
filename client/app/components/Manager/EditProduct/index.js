/**
 *
 * EditProduct
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { ROLE_ADMIN } from '../../../constants';
import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';
import axios from 'axios';

const taxableSelect = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' }
];

const EditProduct = props => {
  const {
    user,
    product,
    productChange,
    formErrors,
    brands,
    updateProduct,
    deleteProduct,
    activateProduct,
    getVariants,
    addVariant
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateProduct();
  };
  const [variant, updateVariants] = React.useState({
    variantType: "",
    variantValues: []
  })
  React.useEffect(()=>{
    const fetchVariants = async ()=>{ 
      let data = await getVariants(product._id);
      console.log(data)
      updateVariants({
        variantType: data.variant.variantType,
        variantValues: data.variant.variantValues
      });
    }
    fetchVariants();
  }, [])
  const handleVriantValueChange = (event, idx) =>{
    let data = variant.variantValues;
    console.log(event);
    data[idx] = event.target.value;
    updateVariants({...variant, variantValues: data})
  }

const handleRemoveVariantValue = (idx) =>{

  let data = variant.variantValues.filter((s, sidx) => idx !== sidx);
  updateVariants({...variant, variantValues: data})
}

const handleAddShareholder = () =>{
  let data = variant.variantValues;
  data.push("");
  updateVariants({...variant, variantValues:data })
  console.log(variant)
}

const saveVariants = () =>{
  let res = addVariant(variant, product._id);
}

  return (
    <div className='edit-product'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Product link </label>
        <Link to={`/product/${product.slug}`} className='default-link'>
          {product.slug}
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Name'}
              name={'name'}
              placeholder={'Product Name'}
              value={product.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['sku']}
              label={'Sku'}
              name={'sku'}
              placeholder={'Product Sku'}
              value={product.sku}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['slug']}
              label={'Slug'}
              name={'slug'}
              placeholder={'Product Slug'}
              value={product.slug}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Description'}
              name={'description'}
              placeholder={'Product Description'}
              value={product.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['quantity']}
              label={'Quantity'}
              name={'quantity'}
              decimals={false}
              placeholder={'Product Quantity'}
              value={product.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['price']}
              label={'Price'}
              name={'price'}
              min={1}
              placeholder={'Product Price'}
              value={product.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['taxable']}
              label={'Taxable'}
              multi={false}
              name={'taxable'}
              value={[product.taxable ? taxableSelect[0] : taxableSelect[1]]}
              options={taxableSelect}
              handleSelectChange={value => {
                productChange('taxable', value.value);
              }}
            />
          </Col>
          {user.role === ROLE_ADMIN && (
            <Col xs='12' md='12'>
              <SelectOption
                error={formErrors['brand']}
                label={'Select Brand'}
                multi={false}
                value={product.brand}
                options={brands}
                handleSelectChange={value => {
                  productChange('brand', value);
                }}
              />
            </Col>
          )}
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              id={`enable-product-${product._id}`}
              name={'isActive'}
              label={'Active?'}
              checked={product?.isActive}
              toggleCheckboxChange={value => {
                productChange('isActive', value);
                activateProduct(product._id, value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='mt-3 mb-2'>
          <Input
              type={'text'}
              error={formErrors['name']}
              label={'Variant Type'}
              name={'variantType'}
              placeholder={'VAriant Type'}
              value={variant.variantType}
              onInputChange={(e) => {updateVariants({...variant, variantType: event.target.value})}}
            />
            <div>
            <Button
            text="+"
              type="button"
              onClick={() => handleAddShareholder()}
              className="small"
            /><Button
            text="Save"
              type="button"
              onClick={() => saveVariants()}
              className="small"
            />
            </div>
            {variant.variantValues.map((variant, idx) => (
              <div className="shareholder" key={idx}>
                <Input
                type={'text'}
                placeholder={'Variant ' + idx + " value"}
                value={variant}
                onInputChange={(e)=>handleVriantValueChange(event, idx)}
              />
                <Button
                text="-"
                  type="button"
                  onClick={() => handleRemoveVariantValue(idx)}
                  className="small"
                  color="red"
                />
              </div>
            ))}
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Save'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Delete'
            onClick={() => deleteProduct(product._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
