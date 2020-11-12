/* eslint-disable */

import React from 'react';
import Form from './Form';
import minLength from '../validations/minLength';
import maxLength from '../validations/maxLength';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('minlength function validation suite', () => {
  it('should pass length and value and return falsy result', () =>
    expect(minLength(10, 'Wrong - !')).toBeFalsy());

  it('should pass length and value and return truthy result', () =>
    expect(minLength(10, 'Test - "Valid Data"')).toBeTruthy());

  it('should pass value as null and retuth falsy result', () =>
    expect(minLength(10, '')).toBeFalsy());
});

describe('maxlength function validation suite', () => {
  it('should pass length and value and return truthy result', () =>
    expect(maxLength(20, 'Test - "Valid Data"')).toBeTruthy());

  it('should pass length and value and return truthy result', () =>
    expect(maxLength(10, 'Prince Edward Island - "Love"')).toBeFalsy());
});

describe('Form Validation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  }),
    it('validates for text item title less than 10 characters', () => {
      const textBox = wrapper.find('input').first();
      textBox.simulate('change', {
        target: { value: 'wrong - !' },
      });
    });

  it('validates for text item title more than 20 characters', () => {
    const textBox = wrapper.find('input').first();
    textBox.simulate('change', {
      target: { value: 'Prince Edward Island - "Love"' },
    });
  });
});
