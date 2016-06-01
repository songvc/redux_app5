import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent (ComponentClass) {
  const componentInstance = Test.Utils.renderIntoDocument(<ComponentClass />);

  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build helper for simulating events


// Set up chai-jquery

export { renderComponent, expect };
