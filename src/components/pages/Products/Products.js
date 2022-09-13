import React from 'react'
import ProdsNServsComp from '../../ProdsNServsComp'
import {PSObjTwo } from './Data'
function Products() {
  return (
    <>
    <ProdsNServsComp {...PSObjTwo} />
    </>
  )
}

export default Products