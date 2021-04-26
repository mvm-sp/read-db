/**
 * @api {get} /companyregion/ Read all data of a companyregion
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companyregion data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregion/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanyregion          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanyregion": "", 
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
 * @api {get} /companyregion/:id Read data of a companyregion by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companyregion data
 *
 * @apiParam {String} id The companyregion-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregion/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanyregion          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanyregion": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /companyregion/ Search data of a companyregion by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companyregion data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregionsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanyregion          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanyregion": "", 
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
 * @api {post} /companyregion Create a new companyregion record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the companyregion 
 * 
 * @apiParam {varchar}     dscompanyregion          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregion/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /companyregion/:id Update the companyregion data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the companyregion 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregion/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /companyregion/:id  Delete data of a companyregion by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup companyregion
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from companyregion
 *
 * @apiParam {Number} id The companyregion-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companyregion/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

