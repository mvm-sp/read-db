/**
 * @api {get} /accgroupmodule/ Read all data of a accgroupmodule
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroupmodule data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodule/
 *
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {int4}     idmodule          Description
 * @apiSuccess {int4}     cdlevel          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idgroup": "", 
 *       "idmodule": "", 
 *       "cdlevel": "", 
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
 * @api {get} /accgroupmodule/:id Read data of a accgroupmodule by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroupmodule data
 *
 * @apiParam {String} id The accgroupmodule-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodule/4711
 *
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {int4}     idmodule          Description
 * @apiSuccess {int4}     cdlevel          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idgroup": "", 
 *       "idmodule": "", 
 *       "cdlevel": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /accgroupmodule/ Search data of a accgroupmodule by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accgroupmodule data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodulesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {int4}     idmodule          Description
 * @apiSuccess {int4}     cdlevel          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "idgroup": "", 
 *       "idmodule": "", 
 *       "cdlevel": "", 
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
 * @api {post} /accgroupmodule Create a new accgroupmodule record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the accgroupmodule 
 * 
 * @apiParam {int4}     idgroup          Description
 * @apiParam {int4}     idmodule          Description
 * @apiParam {int4}     cdlevel          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodule/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /accgroupmodule/:id Update the accgroupmodule data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the accgroupmodule 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodule/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /accgroupmodule/:id  Delete data of a accgroupmodule by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup accgroupmodule
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from accgroupmodule
 *
 * @apiParam {Number} id The accgroupmodule-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accgroupmodule/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

