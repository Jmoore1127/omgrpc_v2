import React from 'react';
import chai, { expect } from 'chai';
import { sinon, spy } from 'sinon';
import sinonChai from 'sinon-chai'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, shallow } from 'enzyme';

chai.should();
chai.use(sinonChai);

configure({adapter: new Adapter()});

global.React = React;
global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.fetch = spy();

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.localStorage =  {
    getItem: function (key) {},
    setItem: function (key, value) {},
    removeItem: function(key) {}
  };

