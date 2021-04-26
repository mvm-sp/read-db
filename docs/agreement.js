/**
 * @api {get} /agreement/ Read all data of a agreement
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreement data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreement/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreement": "", 
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
 * @api {get} /agreement/:id Read data of a agreement by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreement data
 *
 * @apiParam {String} id The agreement-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreement/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreement": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /agreement/ Search data of a agreement by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreement data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreement": "", 
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
 * @api {post} /agreement Create a new agreement record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the agreement 
 * 
 * @apiParam {varchar}     dsagreement          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreement/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /agreement/:id Update the agreement data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the agreement 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreement/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /agreement/:id  Delete data of a agreement by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup agreement
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from agreement
 *
 * @apiParam {Number} id The agreement-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreement/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

