/**
 * @api {get} /modalityext/ Read all data of a modalityext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modalityext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodalityext": "", 
 *       "idclient": "", 
 *       "idmodality": "", 
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
 * @api {get} /modalityext/:id Read data of a modalityext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modalityext data
 *
 * @apiParam {String} id The modalityext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodalityext": "", 
 *       "idclient": "", 
 *       "idmodality": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /modalityext/ Search data of a modalityext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modalityext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodalityext": "", 
 *       "idclient": "", 
 *       "idmodality": "", 
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
 * @api {post} /modalityext Create a new modalityext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the modalityext 
 * 
 * @apiParam {varchar}     dsmodalityext          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {int4}     idmodality          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /modalityext/:id Update the modalityext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the modalityext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /modalityext/:id  Delete data of a modalityext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup modalityext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from modalityext
 *
 * @apiParam {Number} id The modalityext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalityext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

