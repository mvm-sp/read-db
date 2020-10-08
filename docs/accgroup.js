/**
 * @api {get} /accgroup/ Read all data of a accgroup
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroup data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroup/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsgroup          Description
 * @apiSuccess {varchar}     cdgroup          Description
 * @apiSuccess {varchar}     rsgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsgroup": "", 
 *       "cdgroup": "", 
 *       "rsgroup": "", 
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
 * @api {get} /accgroup/:id Read data of a accgroup by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroup data
 *
 * @apiParam {String} id The accgroup-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroup/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsgroup          Description
 * @apiSuccess {varchar}     cdgroup          Description
 * @apiSuccess {varchar}     rsgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsgroup": "", 
 *       "cdgroup": "", 
 *       "rsgroup": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /accgroup/ Search data of a accgroup by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroup data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsgroup          Description
 * @apiSuccess {varchar}     cdgroup          Description
 * @apiSuccess {varchar}     rsgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsgroup": "", 
 *       "cdgroup": "", 
 *       "rsgroup": "", 
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
 * @api {post} /accgroup Create a new accgroup record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the accgroup 
 * 
 * @apiParam {varchar}     dsgroup          Description
 * @apiParam {varchar}     cdgroup          Description
 * @apiParam {varchar}     rsgroup          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /accgroup/:id Update the accgroup data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the accgroup 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /accgroup/:id  Delete data of a accgroup by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup accgroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from accgroup
 *
 * @apiParam {Number} id The accgroup-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

