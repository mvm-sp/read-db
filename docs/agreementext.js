/**
 * @api {get} /agreementext/ Read all data of a agreementext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreementext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreementext": "", 
 *       "idclient": "", 
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
 * @api {get} /agreementext/:id Read data of a agreementext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreementext data
 *
 * @apiParam {String} id The agreementext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreementext": "", 
 *       "idclient": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /agreementext/ Search data of a agreementext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads agreementext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsagreementext": "", 
 *       "idclient": "", 
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
 * @api {post} /agreementext Create a new agreementext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the agreementext 
 * 
 * @apiParam {varchar}     dsagreementext          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /agreementext/:id Update the agreementext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the agreementext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /agreementext/:id  Delete data of a agreementext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup agreementext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from agreementext
 *
 * @apiParam {Number} id The agreementext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/agreementext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

