// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Oct 2022
// This file contains the JS functions for index1.html
'use strict'
/**
 * This function gets users area and permiter of triangle.
 */

function submit () {
  // input
  const base = parseInt(document.getElementById('base-value').value)
  const height = parseInt(document.getElementById('height-value').value)

  // process
  const area = ((base * height) / 2)

  // output
  document.getElementById('area').innerHTML = ' The area is : ' + area + ' ㎠ '
}
