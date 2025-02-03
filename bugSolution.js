function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null values encountered. Returning default value.');
    return 0; // Or handle nulls appropriately based on function logic
  }
  // ...rest of the function
}