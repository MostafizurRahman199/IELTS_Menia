import React from 'react'
import { getPackageDataFromLocalStorage } from '../../utils/localStore';

const MyPackages = () => {

  const savedPackages = getPackageDataFromLocalStorage();

  // here from savedPacked(it is an array of object) show only price, quantity, and serviceName

  console.log(savedPackages);


  return (
    <div>MyPackages</div>
  )
}

export default MyPackages