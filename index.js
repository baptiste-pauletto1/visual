'use strict'

import * as dataGenerator from './scripts/generator.js'
import * as init from './scripts/init.js'
import * as playgroundHandler from './scripts/rectangles.js'


/**
 * @file The "visual." entrypoint.
 * @author Baptiste Pauletto
 * @version 1.0.0
 */

(function (d3) {

   const xScale = d3.scaleBand().padding(0.05)
   const yScale = d3.scaleBand().padding(0.05)

   dataGenerator.generateData(10,100)

   let width = d3.select("#playground-container").node().getBoundingClientRect().width
   let height = .20*(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)

   let playground = d3.select("#playground")

   playground.attr("width", width)
      .attr("height",height)


   //playground.createRectangles()

})(d3)