/**
 * @api {get} /client/ Read all data of a client
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup client
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads client data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/client/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmclient          Description
 * @apiSuccess {int4}     idcompanyregion          Description
 * @apiSuccess {int4}     idcompanysize          Description
 * @apiSuccess {int4}     idcompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmclient": "", 
 *       "idcompanyregion": "", 
 *       "idcompanysize": "", 
 *       "idcompanysector": "", 
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
 * @api {get} /client/:id Read data of a client by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup client
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads client data
 *
 * @apiParam {String} id The client-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/client/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmclient          Description
 * @apiSuccess {int4}     idcompanyregion          Description
 * @apiSuccess {int4}     idcompanysize          Description
 * @apiSuccess {int4}     idcompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmclient": "", 
 *       "idcompanyregion": "", 
 *       "idcompanysize": "", 
 *       "idcompanysector": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /client/ Search data of a client by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup client
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads client data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/clientsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmclient          Description
 * @apiSuccess {int4}     idcompanyregion          Description
 * @apiSuccess {int4}     idcompanysize          Description
 * @apiSuccess {int4}     idcompanysector          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmclient": "", 
 *       "idcompanyregion": "", 
 *       "idcompanysize": "", 
 *       "idcompanysector": "", 
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
 * @api {post} /client Create a new client record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup client
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the client 
 * 
 * @apiParam {varchar}     nmclient          Description
 * @apiParam {int4}     idcompanyregion          Description
 * @apiParam {int4}     idcompanysize          Description
 * @apiParam {int4}     idcompanysector          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/client/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /client/:id Update the client data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup client
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the client 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/client/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /client/:id  Delete data of a client by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup client
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from client
 *
 * @apiParam {Number} id The client-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/client/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

