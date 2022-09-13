import React from 'react'
import ProdsNServsComp from '../../ProdsNServsComp'
import {PSObjOne, PSObjTwo } from './Data'
function ProdsNServsPg() {
  return (
    <>
    <ProdsNServsComp {...PSObjOne} />
    <ProdsNServsComp {...PSObjTwo} />
    </>
  )
}

export default ProdsNServsPg