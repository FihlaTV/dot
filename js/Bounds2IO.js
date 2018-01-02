// Copyright 2016, University of Colorado Boulder

/**
 * IO Type for Bounds2
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Andrew Adare (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var dot = require( 'DOT/dot' );

  // phet-io modules
  var assertInstanceOf = require( 'ifphetio!PHET_IO/assertInstanceOf' );
  var phetioInherit = require( 'ifphetio!PHET_IO/phetioInherit' );
  var ObjectIO = require( 'ifphetio!PHET_IO/types/ObjectIO' );

  /**
   * @param {Bounds2} bounds2
   * @param {string} phetioID
   * @constructor
   */
  function Bounds2IO( bounds2, phetioID ) {
    assert && assertInstanceOf( bounds2, phet.dot.Bounds2 );
    ObjectIO.call( this, bounds2, phetioID );
  }

  phetioInherit( ObjectIO, 'Bounds2IO', Bounds2IO, {}, {
    documentation: 'a 2-dimensional bounds rectangle',

    /**
     * Decodes a state into a Bounds2.
     * @param {Object} stateObject
     * @returns {Bounds2}
     */
    fromStateObject: function( stateObject ) {
      return new phet.dot.Bounds2(
        stateObject.minX, stateObject.minY,
        stateObject.maxX, stateObject.maxY
      );
    },

    /**
     * Encodes a Bounds2 instance to a state.
     * @param {Bounds2} bounds2
     * @returns {Object}
     */
    toStateObject: function( bounds2 ) {
      assert && assertInstanceOf( bounds2, phet.dot.Bounds2 );
      return {
        minX: bounds2.minX,
        minY: bounds2.minY,

        maxX: bounds2.maxX,
        maxY: bounds2.maxY
      };
    }
  } );

  dot.register( 'Bounds2IO', Bounds2IO );

  return Bounds2IO;
} );