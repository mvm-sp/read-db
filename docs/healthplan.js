/**
 * @api {get} /healthplan/ Read all data of a healthplan
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplan data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplan/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplan          Description
 * @apiSuccess {int4}     idagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplan": "", 
 *       "idagreement": "", 
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
 * @api {get} /healthplan/:id Read data of a healthplan by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplan data
 *
 * @apiParam {String} id The healthplan-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplan/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplan          Description
 * @apiSuccess {int4}     idagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplan": "", 
 *       "idagreement": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /healthplan/ Search data of a healthplan by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplan data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplansearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplan          Description
 * @apiSuccess {int4}     idagreement          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplan": "", 
 *       "idagreement": "", 
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
 * @api {post} /healthplan Create a new healthplan record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the healthplan 
 * 
 * @apiParam {varchar}     dshealthplan          Description
 * @apiParam {int4}     idagreement          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplan/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /healthplan/:id Update the healthplan data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the healthplan 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplan/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /healthplan/:id  Delete data of a healthplan by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup healthplan
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from healthplan
 *
 * @apiParam {Number} id The healthplan-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplan/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

