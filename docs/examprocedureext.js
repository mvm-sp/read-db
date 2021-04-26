/**
 * @api {get} /examprocedureext/ Read all data of a examprocedureext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedureext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     code          Description
 * @apiSuccess {varchar}     dsexamprocedureext          Description
 * @apiSuccess {int4}     idmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     isproced          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "code": "", 
 *       "dsexamprocedureext": "", 
 *       "idmodalityext": "", 
 *       "idclient": "", 
 *       "isproced": "", 
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
 * @api {get} /examprocedureext/:id Read data of a examprocedureext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedureext data
 *
 * @apiParam {String} id The examprocedureext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     code          Description
 * @apiSuccess {varchar}     dsexamprocedureext          Description
 * @apiSuccess {int4}     idmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     isproced          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "code": "", 
 *       "dsexamprocedureext": "", 
 *       "idmodalityext": "", 
 *       "idclient": "", 
 *       "isproced": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /examprocedureext/ Search data of a examprocedureext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedureext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     code          Description
 * @apiSuccess {varchar}     dsexamprocedureext          Description
 * @apiSuccess {int4}     idmodalityext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     isproced          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "code": "", 
 *       "dsexamprocedureext": "", 
 *       "idmodalityext": "", 
 *       "idclient": "", 
 *       "isproced": "", 
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
 * @api {post} /examprocedureext Create a new examprocedureext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the examprocedureext 
 * 
 * @apiParam {varchar}     code          Description
 * @apiParam {varchar}     dsexamprocedureext          Description
 * @apiParam {int4}     idmodalityext          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {bool}     isproced          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureext/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /examprocedureext/:id Update the examprocedureext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the examprocedureext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureext/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /examprocedureext/:id  Delete data of a examprocedureext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup examprocedureext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from examprocedureext
 *
 * @apiParam {Number} id The examprocedureext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedureext/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

