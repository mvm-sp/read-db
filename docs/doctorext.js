/**
 * @api {get} /doctorext/ Read all data of a doctorext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads doctorext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmdoctorext          Description
 * @apiSuccess {int8}     crmdoctorext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     ismed          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmdoctorext": "", 
 *       "crmdoctorext": "", 
 *       "idclient": "", 
 *       "ismed": "", 
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
 * @api {get} /doctorext/:id Read data of a doctorext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads doctorext data
 *
 * @apiParam {String} id The doctorext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmdoctorext          Description
 * @apiSuccess {int8}     crmdoctorext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     ismed          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmdoctorext": "", 
 *       "crmdoctorext": "", 
 *       "idclient": "", 
 *       "ismed": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /doctorext/ Search data of a doctorext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads doctorext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     nmdoctorext          Description
 * @apiSuccess {int8}     crmdoctorext          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     ismed          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "nmdoctorext": "", 
 *       "crmdoctorext": "", 
 *       "idclient": "", 
 *       "ismed": "", 
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
 * @api {post} /doctorext Create a new doctorext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the doctorext 
 * 
 * @apiParam {varchar}     nmdoctorext          Description
 * @apiParam {int8}     crmdoctorext          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {bool}     ismed          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /doctorext/:id Update the doctorext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the doctorext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /doctorext/:id  Delete data of a doctorext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup doctorext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from doctorext
 *
 * @apiParam {Number} id The doctorext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/doctorext/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

