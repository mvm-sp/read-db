/**
 * @api {get} /examprocedure/ Read all data of a examprocedure
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedure data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedure/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsexamprocedure          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsexamprocedure": "", 
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
 * @api {get} /examprocedure/:id Read data of a examprocedure by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedure data
 *
 * @apiParam {String} id The examprocedure-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedure/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsexamprocedure          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsexamprocedure": "", 
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
 * @api {get} /examprocedure/ Search data of a examprocedure by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads examprocedure data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examproceduresearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsexamprocedure          Description
 * @apiSuccess {int4}     idmodality          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsexamprocedure": "", 
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
 * @api {post} /examprocedure Create a new examprocedure record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the examprocedure 
 * 
 * @apiParam {varchar}     dsexamprocedure          Description
 * @apiParam {int4}     idmodality          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedure/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /examprocedure/:id Update the examprocedure data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the examprocedure 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedure/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /examprocedure/:id  Delete data of a examprocedure by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup examprocedure
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from examprocedure
 *
 * @apiParam {Number} id The examprocedure-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/examprocedure/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

