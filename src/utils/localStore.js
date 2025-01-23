export const updateLocalStorageIds = (key, newIds) => {
  // Get existing IDs from localStorage
  const existingIds = JSON.parse(localStorage.getItem(key)) || [];

  // Combine the existing IDs with the new ones, avoiding duplicates
  const updatedIds = Array.from(new Set([...existingIds, ...newIds]));

  // Save the updated array back to localStorage
  localStorage.setItem(key, JSON.stringify(updatedIds));
};



export const savePackageDataToLocalStorage = (packageResponseArray) => {
  const existingPackages = JSON.parse(localStorage.getItem("processedPackages")) || [];
    const updatedPackages = [...existingPackages, ...packageResponseArray];
    localStorage.setItem("processedPackages", JSON.stringify(updatedPackages));
    console.log("Updated Packages saved to localStorage:", updatedPackages);
};




export const getPackageDataFromLocalStorage = () => {
  const packages = JSON.parse(localStorage.getItem("processedPackages")) || [];
  console.log("Retrieved Packages from localStorage:", packages);
  return packages;
};
