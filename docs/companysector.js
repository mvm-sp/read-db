/**
 * @api {get} /companysector/ Read all data of a companysector
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysector data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysector/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysector": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function getAll() { return; }

/**
 * @api {get} /companysector/:id Read data of a companysector by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysector data
 *
 * @apiParam {String} id The companysector-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysector/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysector": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /companysector/ Search data of a companysector by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysector data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysectorsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysector": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function search() { return; }

/**
 * @api {post} /companysector Create a new companysector record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the companysector 
 * 
 * @apiParam {varchar}     dscompanysector          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysector/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /companysector/:id Update the companysector data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the companysector 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysector/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /companysector/:id  Delete data of a companysector by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup companysector
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from companysector
 *
 * @apiParam {Number} id The companysector-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysector/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

