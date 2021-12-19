const isValidadCategory = (category: string) => {
  const validCategories = ['P1', 'P2', 'P3', 'FINAL'];
  if (!validCategories.includes(category)) {
    return false;
  }

  return true;
};

export default isValidadCategory;
