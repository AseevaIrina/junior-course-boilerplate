import { Component } from 'react';
import {logger} from 'csssr-school-utils';

class logRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true
  }
}

export default logRender;
