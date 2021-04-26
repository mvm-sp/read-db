/**
 * @api {get} /accmodule/ Read all data of a accmodule
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accmodule data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodule/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodule          Description
 * @apiSuccess {varchar}     dspath          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodule": "", 
 *       "dspath": "", 
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
 * @api {get} /accmodule/:id Read data of a accmodule by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accmodule data
 *
 * @apiParam {String} id The accmodule-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodule/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodule          Description
 * @apiSuccess {varchar}     dspath          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodule": "", 
 *       "dspath": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /accmodule/ Search data of a accmodule by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accmodule data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodulesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodule          Description
 * @apiSuccess {varchar}     dspath          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodule": "", 
 *       "dspath": "", 
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
 * @api {post} /accmodule Create a new accmodule record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the accmodule 
 * 
 * @apiParam {varchar}     dsmodule          Description
 * @apiParam {varchar}     dspath          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodule/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /accmodule/:id Update the accmodule data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the accmodule 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodule/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /accmodule/:id  Delete data of a accmodule by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup accmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from accmodule
 *
 * @apiParam {Number} id The accmodule-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accmodule/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

