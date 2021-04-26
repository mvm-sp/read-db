/**
 * @api {get} /healthplanext/ Read all data of a healthplanext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplanext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplanext          Description
 * @apiSuccess {int4}     idagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplanext": "", 
 *       "idagreementext": "", 
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
 * @api {get} /healthplanext/:id Read data of a healthplanext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplanext data
 *
 * @apiParam {String} id The healthplanext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplanext          Description
 * @apiSuccess {int4}     idagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplanext": "", 
 *       "idagreementext": "", 
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
 * @api {get} /healthplanext/ Search data of a healthplanext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads healthplanext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dshealthplanext          Description
 * @apiSuccess {int4}     idagreementext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dshealthplanext": "", 
 *       "idagreementext": "", 
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
 * @api {post} /healthplanext Create a new healthplanext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the healthplanext 
 * 
 * @apiParam {varchar}     dshealthplanext          Description
 * @apiParam {int4}     idagreementext          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanext/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /healthplanext/:id Update the healthplanext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the healthplanext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanext/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /healthplanext/:id  Delete data of a healthplanext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup healthplanext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from healthplanext
 *
 * @apiParam {Number} id The healthplanext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/healthplanext/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

