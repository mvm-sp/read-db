/**
 * @api {get} /modality/ Read all data of a modality
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup modality
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modality data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modality/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodality          Description
 * @apiSuccess {varchar}     dsacronym          Description
 * @apiSuccess {int4}     nrorder          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodality": "", 
 *       "dsacronym": "", 
 *       "nrorder": "", 
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
 * @api {get} /modality/:id Read data of a modality by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup modality
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modality data
 *
 * @apiParam {String} id The modality-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modality/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodality          Description
 * @apiSuccess {varchar}     dsacronym          Description
 * @apiSuccess {int4}     nrorder          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodality": "", 
 *       "dsacronym": "", 
 *       "nrorder": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /modality/ Search data of a modality by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup modality
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads modality data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modalitysearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsmodality          Description
 * @apiSuccess {varchar}     dsacronym          Description
 * @apiSuccess {int4}     nrorder          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsmodality": "", 
 *       "dsacronym": "", 
 *       "nrorder": "", 
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
 * @api {post} /modality Create a new modality record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup modality
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the modality 
 * 
 * @apiParam {varchar}     dsmodality          Description
 * @apiParam {varchar}     dsacronym          Description
 * @apiParam {int4}     nrorder          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modality/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /modality/:id Update the modality data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup modality
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the modality 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modality/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /modality/:id  Delete data of a modality by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup modality
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from modality
 *
 * @apiParam {Number} id The modality-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/modality/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

