/**
 * @api {get} /companysize/ Read all data of a companysize
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysize data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysize/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysize          Description
 * @apiSuccess {float8}     vlrangeinit          Description
 * @apiSuccess {float8}     vlrangefinal          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysize": "", 
 *       "vlrangeinit": "", 
 *       "vlrangefinal": "", 
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
 * @api {get} /companysize/:id Read data of a companysize by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysize data
 *
 * @apiParam {String} id The companysize-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysize/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysize          Description
 * @apiSuccess {float8}     vlrangeinit          Description
 * @apiSuccess {float8}     vlrangefinal          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysize": "", 
 *       "vlrangeinit": "", 
 *       "vlrangefinal": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /companysize/ Search data of a companysize by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads companysize data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysizesearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dscompanysize          Description
 * @apiSuccess {float8}     vlrangeinit          Description
 * @apiSuccess {float8}     vlrangefinal          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dscompanysize": "", 
 *       "vlrangeinit": "", 
 *       "vlrangefinal": "", 
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
 * @api {post} /companysize Create a new companysize record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the companysize 
 * 
 * @apiParam {varchar}     dscompanysize          Description
 * @apiParam {float8}     vlrangeinit          Description
 * @apiParam {float8}     vlrangefinal          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysize/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /companysize/:id Update the companysize data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the companysize 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysize/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /companysize/:id  Delete data of a companysize by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup companysize
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from companysize
 *
 * @apiParam {Number} id The companysize-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/companysize/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

