const MongoDaoFood = require('../daos/mongoProductDao');
const mongoDaoCart = require('../daos/mongoCartDao')
const fsDao = require('../daos/fsProductsDao')
const fsDaoCart = require('../daos/fsCartsDao')


let dbToUse = 'mongoose' 

let productDao; 
let cartDao;

switch (dbToUse) {
	case 'mongoose':
		productDao = MongoDaoFood;
		cartDao = mongoDaoCart;
		break;
	case 'fs':
		productDao = fsDao;
		cartDao = fsDaoCart;
		break;
	default:
		break;
}

module.exports = {productDao,cartDao} ;

