/***********************************************************
  kvPairs
***********************************************************/

/***************************************
  MAIN
***************************************/

const kvPairs = (pairs, rest = {}) => ({
  ...Object.fromEntries (pairs),
  ...rest,
})

/**************************************/

module.exports = kvPairs