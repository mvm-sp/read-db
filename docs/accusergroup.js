/**
 * @api {get} /accusergroup/ Read all data of a accusergroup
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accusergroup data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroup/
 *
 * @apiSuccess {int4}     iduser          Description
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "iduser": "", 
 *       "idgroup": "", 
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
 * @api {get} /accusergroup/:id Read data of a accusergroup by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accusergroup data
 *
 * @apiParam {String} id The accusergroup-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroup/4711
 *
 * @apiSuccess {int4}     iduser          Description
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "iduser": "", 
 *       "idgroup": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /accusergroup/ Search data of a accusergroup by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accusergroup data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroupsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     iduser          Description
 * @apiSuccess {int4}     idgroup          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "iduser": "", 
 *       "idgroup": "", 
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
 * @api {post} /accusergroup Create a new accusergroup record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the accusergroup 
 * 
 * @apiParam {int4}     iduser          Description
 * @apiParam {int4}     idgroup          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /accusergroup/:id Update the accusergroup data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the accusergroup 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /accusergroup/:id  Delete data of a accusergroup by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup accusergroup
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from accusergroup
 *
 * @apiParam {Number} id The accusergroup-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusergroup/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

