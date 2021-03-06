// Copyright 2017-2020, University of Colorado Boulder

/**
 * IO type for Vector3
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Andrew Adare (PhET Interactive Simulations)
 */

import validate from '../../axon/js/validate.js';
import ObjectIO from '../../tandem/js/types/ObjectIO.js';
import dot from './dot.js';
import Vector3 from './Vector3.js';

class Vector3IO extends ObjectIO {

  /**
   * Encodes a Vector3 instance to a state.
   * @param {Vector3} vector3
   * @returns {Object}
   */
  static toStateObject( vector3 ) {
    validate( vector3, this.validator );
    return { x: vector3.x, y: vector3.y, z: vector3.z };
  }

  /**
   * Decodes a state into a Vector3.
   * @param {Object} stateObject
   * @returns {Vector3}
   */
  static fromStateObject( stateObject ) {
    return new Vector3( stateObject.x, stateObject.y, stateObject.z );
  }
}

Vector3IO.documentation = 'Basic 3-dimensional vector, represented as (x,y,z)';
Vector3IO.validator = { valueType: Vector3 };
Vector3IO.typeName = 'Vector3IO';
ObjectIO.validateSubtype( Vector3IO );

dot.register( 'Vector3IO', Vector3IO );
export default Vector3IO;